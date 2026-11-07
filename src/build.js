const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');
const defaultMetadata = require('./metadata/metadata');
const dayjs = require('dayjs');
const { pickFeaturedVideo } = require('./utils/youtube');

// ============================================================================
// CONFIGURATION
// ============================================================================

const srcDir = __dirname;
const outputDir = path.join(__dirname, '..', 'dist');
const templatesDir = path.join(srcDir, 'templates');
const metadataDir = path.join(srcDir, 'metadata');

// Templates that need additional metadata beyond what's auto-detected
const ADDITIONAL_METADATA = {
  'bibtex.html': ['publications'],
  'index.html': ['publications'],
  'teaching.html': ['s4l', 'teaching']
};

// Partials that should load a different metadata file
// Format: 'partial-name': 'metadata-name'
const PARTIAL_METADATA_MAPPING = {
  'selected_publications': 'publications',
  'other_publications': 'publications',
  'theses': 'publications',
  'team': 's4l',
  'recent_collaborators': 'publications',
  'research_topics': 'research_topics',
  'research_vision': 'research_topics'
};

// ============================================================================
// METADATA FUNCTIONS
// ============================================================================

/**
 * Load metadata file for a given name (template or partial)
 * @param {string} baseName - Name without .html extension (e.g., 'index', 'publications')
 * @returns {Object|null} Metadata object or null if file doesn't exist
 */
function loadMetadata(baseName) {
  const metadataPath = path.join(metadataDir, `metadata-${baseName}.js`);
  
  if (!fs.existsSync(metadataPath)) {
    return null;
  }
  
  delete require.cache[require.resolve(metadataPath)];
  return require(metadataPath);
}

/**
 * Extract partial names used in template content
 * @param {string} content - Template content
 * @returns {string[]} Array of unique partial names
 */
function extractPartials(content) {
  const regex = /\{\{>\s*(\w+)\s*\}\}/g;
  const partials = [];
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    partials.push(match[1]);
  }
  
  return [...new Set(partials)];
}

/**
 * Build complete metadata object for a template
 * Merges: default → template-specific → partial metadata → additional configured
 * @param {string} templateFile - Template filename
 * @param {string} templateContent - Template content
 * @returns {Object} Merged metadata
 */
function buildMetadata(templateFile, templateContent) {
  const baseName = path.basename(templateFile, '.html');
  const metadata = { ...defaultMetadata };
  
  // 1. Template-specific metadata
  // 2. Auto-detect partial metadata
  const partials = extractPartials(templateContent);
  partials.forEach(partialName => {
    // Check if this partial has a metadata mapping
    const metadataName = PARTIAL_METADATA_MAPPING[partialName] || partialName;
    const partialMetadata = loadMetadata(metadataName);
    if (partialMetadata) {
      console.log(`  ✓ metadata-${metadataName}.js (from partial: ${partialName})`);
      Object.assign(metadata, partialMetadata);
    }
  });
  
  // 3. Additional configured metadata
  const additional = ADDITIONAL_METADATA[templateFile];
  if (additional) {
    additional.forEach(name => {
      const additionalMetadata = loadMetadata(name);
      if (additionalMetadata) {
        console.log(`  ✓ metadata-${name}.js (configured)`);
        Object.assign(metadata, additionalMetadata);
      }
    });
  }
  
  return metadata;
}

// ============================================================================
// HANDLEBARS SETUP
// ============================================================================

/**
 * Register all Handlebars helpers
 */
function registerHelpers() {
  handlebars.registerHelper('eq', (a, b) => a === b);
  handlebars.registerHelper('or', function() {
    const args = Array.prototype.slice.call(arguments, 0, -1);
    return args.some(arg => !!arg);
  });
}

/**
 * Register all partial templates
 * Convention: Files starting with _ or non-template files like s4l-header.html
 */
function registerPartials() {
  const allFiles = fs.readdirSync(templatesDir).filter(f => f.endsWith('.html'));
  
  allFiles
    .filter(file => file.startsWith('_') || file === 's4l-header.html')
    .forEach(file => {
      const partialPath = path.join(templatesDir, file);
      const partialName = path.basename(file, '.html').replace(/^_/, '');
      const content = fs.readFileSync(partialPath, 'utf-8');
      
      handlebars.registerPartial(partialName, content);
      console.log(`Registered partial: ${partialName}`);
    });
}

// ============================================================================
// TEMPLATE PROCESSING
// ============================================================================

/**
 * Process a single template file
 * @param {Object} globals - Build-time values available to every template
 */
function processTemplate(templateFile, globals) {
  console.log(`\nProcessing: ${templateFile}`);

  const templatePath = path.join(templatesDir, templateFile);
  const source = fs.readFileSync(templatePath, 'utf-8');

  // Build metadata
  const metadata = buildMetadata(templateFile, source);
  if (metadata.courses && metadata.academic_calendars) prepareTeachingMetadata(metadata);
  
  // Compile template
  const template = handlebars.compile(source);
  const html = template({ ...metadata, ...globals });
  
  // Write output
  const outputPath = path.join(outputDir, templateFile);
  fs.writeFileSync(outputPath, html);
  
  console.log(`  → ${templateFile}`);
}

/**
 * Derive course start/end dates from institution + term via the
 * academic_calendars table in the teaching metadata, and sort courses
 * chronologically by start date. A course can override the derived dates
 * with explicit `start`/`end` ('YYYY-MM-DD') fields. The teaching page
 * segments courses into upcoming/ongoing/finished from these dates at
 * view time.
 */
function prepareTeachingMetadata(metadata) {
  const iso = (year, [month, day]) =>
    `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  metadata.courses.forEach(course => {
    const match = /^(\w+) (\d{4})$/.exec(course.term || '');
    const calendar = metadata.academic_calendars[course.institution];
    const semester = match && calendar && calendar[match[1]];
    if (semester) {
      const year = parseInt(match[2], 10);
      course.start_iso = course.start || iso(year, semester.start);
      course.end_iso = course.end || iso(semester.end_next_year ? year + 1 : year, semester.end);
    } else {
      course.start_iso = course.start || null;
      course.end_iso = course.end || null;
      if (!course.start_iso) console.warn(`  ! no calendar match for "${course.title}" (${course.institution}, ${course.term})`);
    }
  });

  metadata.courses.sort((a, b) => (a.start_iso || '').localeCompare(b.start_iso || ''));
}

/**
 * Get list of template files (exclude partials)
 */
function getTemplateFiles() {
  return fs.readdirSync(templatesDir)
    .filter(file => file.endsWith('.html'))
    .filter(file => !file.startsWith('_') && file !== 's4l-header.html');
}

// ============================================================================
// MAIN BUILD PROCESS
// ============================================================================

async function build() {
  console.log('Starting build...\n');

  // Setup
  fs.emptyDirSync(outputDir);
  fs.copySync(path.join(srcDir, 'assets'), outputDir);

  registerHelpers();
  registerPartials();

  // Home-page video, picked once per build from the channel's public uploads
  console.log('Picking featured video...');
  const globals = {
    updated: dayjs().format('MMMM D, YYYY'),
    featured_video: await pickFeaturedVideo(loadMetadata('s4l').youtube)
  };

  // Process templates
  const templates = getTemplateFiles();
  templates.forEach(templateFile => processTemplate(templateFile, globals));

  console.log('\nBuild completed!');
}

// Run build
build().catch(err => {
  console.error(err);
  process.exit(1);
});