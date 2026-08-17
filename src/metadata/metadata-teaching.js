// Metadata for the teaching.html template
// Each course links to its own standalone website under teaching/<slug>/
// (course sites live in src/assets/teaching/ and are copied into the build as-is)

module.exports = {
  courses: [
    {
      title: 'Seminar/Proseminar in Computer Architecture',
      institution: 'Saarland University',
      term: 'Summer 2026',
      link: 'teaching/comparch-seminar-summer2026/',
      icon: 'chalkboard-user',
      description: 'Seminar and proseminar on cutting-edge topics in computer architecture, with a focus on memory systems, hardware security, and reliability.',
    },
    {
      title: 'Seminar/Proseminar in Computer Architecture',
      institution: 'Saarland University',
      term: 'Winter 2026',
      link: 'teaching/comparch-seminar-winter2026/',
      icon: 'chalkboard-user',
      description: 'Seminar and proseminar on cutting-edge topics in computer architecture, with a focus on memory systems, hardware security, and reliability.',
    },
    {
      title: 'Computer Architecture',
      institution: 'Bilkent University',
      term: 'Fall 2026',
      link: 'teaching/comparch-bilkent-fall2026/',
      icon: 'microchip',
      description: 'Undergraduate course covering the fundamentals of computer architecture: ISA design, pipelining, caches, memory systems, and parallelism.',
    },
  ],
};
