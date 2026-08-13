const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');
const markdownHelper = require('./utils/helpers/markdown');
const defaultMetadata = require('./metadata/metadata');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');

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
  'index.html': ['publications']
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
  handlebars.registerHelper('markdown', markdownHelper);
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
 */
function processTemplate(templateFile) {
  console.log(`\nProcessing: ${templateFile}`);
  
  const templatePath = path.join(templatesDir, templateFile);
  const source = fs.readFileSync(templatePath, 'utf-8');
  
  // Build metadata
  const metadata = buildMetadata(templateFile, source);
  
  // Compile template
  const template = handlebars.compile(source);
  const html = template({
    ...metadata,
    baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
    updated: dayjs().format('MMMM D, YYYY')
  });
  
  // Write output
  const outputPath = path.join(outputDir, templateFile);
  fs.writeFileSync(outputPath, html);
  
  console.log(`  → ${templateFile}`);
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

function build() {
  console.log('Starting build...\n');
  
  // Setup
  fs.emptyDirSync(outputDir);
  fs.copySync(path.join(srcDir, 'assets'), outputDir);
  
  registerHelpers();
  registerPartials();
  
  // Process templates
  const templates = getTemplateFiles();
  templates.forEach(processTemplate);
  
  console.log('\nBuild completed!');
}

// Run build
build();