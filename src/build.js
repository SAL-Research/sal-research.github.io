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
  if (metadata.courses && metadata.academic_calendars) prepareTeachingMetadata(metadata);
  
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

  // Process standalone course websites
  processCoursePages();

  console.log('\nBuild completed!');
}

/**
 * Render standalone course websites.
 * Each course in metadata-teaching.js with a `site` slug is rendered from the
 * shared _course.html template, populated with metadata-<site>.js, and written
 * to teaching/<site>/index.html. Courses without `site` (external websites)
 * are skipped.
 */
function processCoursePages() {
  const teachingMetadata = loadMetadata('teaching');
  const courses = ((teachingMetadata && teachingMetadata.courses) || []).filter(c => c.site);
  if (courses.length === 0) return;

  const source = fs.readFileSync(path.join(templatesDir, '_course.html'), 'utf-8');
  const template = handlebars.compile(source);
  const readingsSource = fs.readFileSync(path.join(templatesDir, '_course_readings.html'), 'utf-8');
  const readingsTemplate = handlebars.compile(readingsSource);

  courses.forEach(course => {
    console.log(`\nProcessing course site: ${course.site}`);
    const metadata = loadMetadata(course.site);
    if (!metadata) {
      console.warn(`  ! metadata-${course.site}.js not found, skipping`);
      return;
    }
    const prepared = prepareCourseMetadata(metadata);
    const courseDir = path.join(outputDir, 'teaching', course.site);
    fs.mkdirsSync(courseDir);
    fs.writeFileSync(path.join(courseDir, 'index.html'), template(prepared));
    console.log(`  → teaching/${course.site}/index.html`);
    if (prepared.readings && prepared.readings.length > 0) {
      fs.writeFileSync(path.join(courseDir, 'readings.html'), readingsTemplate(prepared));
      console.log(`  → teaching/${course.site}/readings.html`);
    }
  });
}

/**
 * Derive display data from the hierarchical course metadata:
 * - week.number: 1-based position in `weeks`
 * - lecture.number: "L<day><part>" where <day> counts lecture days across the
 *   whole course and <part> is a, b, c... by position within the day (omitted
 *   when the day has a single lecture). Lectures with an explicit `number`
 *   (e.g. 'LR1' for review sessions) or an `exam` flag keep it / stay
 *   unnumbered and do not make their day count as a lecture day. Days with
 *   `alternatives: true` list mutually exclusive candidates: all get the plain
 *   day number without part letters.
 * - event.homework: resolves a schedule event's `hw` key against `homeworks`
 * - lecture.readings: keys into `readings`; each referenced reading collects
 *   its relevant lectures (number, title, date) for the readings page, and the
 *   lecture gets `readings_anchor` for linking into readings.html
 */
function prepareCourseMetadata(metadata) {
  const homeworkByKey = {};
  (metadata.homeworks || []).forEach(hw => { homeworkByKey[hw.key] = hw; });
  const readingByKey = {};
  (metadata.readings || []).forEach(reading => {
    readingByKey[reading.key] = reading;
    reading.relevant_lectures = [];
  });

  let lectureDay = 0;
  (metadata.weeks || []).forEach((week, weekIndex) => {
    week.number = weekIndex + 1;
    (week.days || []).forEach(day => {
      const numbered = (day.lectures || []).filter(l => !l.number && !l.exam);
      if (numbered.length > 0) {
        lectureDay += 1;
        const multipart = numbered.length > 1 && !day.alternatives;
        numbered.forEach((lecture, i) => {
          lecture.number = `L${lectureDay}${multipart ? String.fromCharCode(97 + i) : ''}`;
        });
      }
      (day.lectures || []).forEach(lecture => {
        if (lecture.readings && lecture.readings.length > 0) {
          lecture.readings_anchor = lecture.readings[0];
          lecture.readings.forEach(key => {
            const reading = readingByKey[key];
            if (!reading) {
              console.warn(`  ! unknown reading key: ${key}`);
              return;
            }
            reading.relevant_lectures.push({ number: lecture.number, title: lecture.title, date: day.date });
          });
        }
      });
      (day.events || []).forEach(event => {
        if (event.hw) {
          event.homework = homeworkByKey[event.hw];
          if (!event.homework) console.warn(`  ! unknown homework key: ${event.hw}`);
        }
      });
    });
  });
  return metadata;
}

// Run build
build();