// Metadata for the teaching.html template.
//
// Courses with a `site` slug get a generated website at teaching/<site>/ from
// src/templates/_course.html + src/metadata/metadata-<site>.js; courses with an
// external `link` (and no `site`) just link out.
//
// Each course's start/end dates are derived by the build from `institution` +
// `term` (e.g. 'Fall 2026') using the academic_calendars table below; the
// teaching page segments courses into upcoming/ongoing/finished at view time
// from those dates. Add `start`/`end` ('YYYY-MM-DD') on a course to override
// the derived dates.

module.exports = {
  // Semester date ranges per institution: [month, day] of the semester start
  // and end. `end_next_year: true` marks semesters that span the year boundary
  // (the end date falls in the year after the term's year).
  academic_calendars: {
    'Saarland University': {
      Summer: { start: [3, 1], end: [9, 30] },
      Winter: { start: [10, 1], end: [3, 31], end_next_year: true },
    },
    'Bilkent University': {
      // Official 2026-27 calendar: fall classes Sep 16 - Dec 25, finals to
      // Jan 10; spring classes Feb 1 - May 21, finals to Jun 2.
      Fall: { start: [9, 15], end: [1, 10], end_next_year: true },
      Spring: { start: [2, 1], end: [6, 5] },
    },
  },

  courses: [
    {
      title: 'Seminar/Proseminar in Computer Architecture',
      institution: 'Saarland University',
      term: 'Summer 2026',
      link: 'https://cms.cispa.saarland/comparch_s26/',
      icon: 'chalkboard-user',
      description: 'Seminar and proseminar on cutting-edge topics in computer architecture, with a focus on memory systems, hardware security, and reliability.',
    },
    {
      title: 'Seminar/Proseminar in Computer Architecture',
      institution: 'Saarland University',
      term: 'Winter 2026',
      link: 'teaching/comparch_seminar-winter_2026/',
      site: 'comparch_seminar-winter_2026',
      icon: 'chalkboard-user',
      description: 'Seminar and proseminar on cutting-edge topics in computer architecture, with a focus on memory systems, hardware security, and reliability.',
    },
    {
      title: 'CS 423/520 — Computer Architecture',
      institution: 'Bilkent University',
      term: 'Fall 2026',
      link: 'https://sal-research.github.io/comparch-fall-2026/',
      icon: 'microchip',
      description: 'Basic hardware structure of modern computing platforms: memory systems, storage, interconnects, multiprocessors, accelerators, and hardware/software cooperation. 4 homework assignments, midterm, and final.',
    },
  ],
};
