// Course website metadata for CS 423 Computer Architecture (Bilkent, Fall 2026)
// Rendered with src/templates/_course.html into teaching/comparch-fall_2026/
//
// During the semester, populate materials by replacing 'TBA' with a URL:
//   - lecture slides/video:   slides: 'https://...', video: 'https://youtu.be/...'
//   - homework handouts:      handout: 'https://...' (both in homework.rows and
//                             in the matching schedule milestone event)

module.exports = {
  code: 'CS 423',
  title: 'Computer Architecture',
  nav_title: 'CS 423 — Fall 2026',
  institution: 'Bilkent University',
  institution_line: 'Bilkent University, Department of Computer Engineering',
  term: 'Fall 2026',
  accent: '#8c1d40',
  accent_dark: '#661530',
  badges: [
    { icon: 'graduation-cap', text: 'Bilkent 3 credits / 5 ECTS' },
  ],
  instructor: {
    role: 'Course coordinator',
    name: 'Abdullah Giray Yağlıkçı',
    web: 'https://agyaglikci.github.io',
    email: 'giray@cispa.de',
  },
  announcements: [
    'Homework handouts, lecture slides, and lecture videos will be posted on this page throughout the semester — check the <a href="#schedule">schedule</a> regularly.',
  ],
  description: [
    'Basic hardware structure of modern computing platforms: memory systems, storage systems, interconnects, multiprocessors, accelerators, hardware/software cooperation. Key issues in performance, efficiency, scalability, reliability, security, safety, predictability, and quality of service.',
    '<b>Learning outcomes:</b> Understand fundamental principles and the state of the art in computer architecture. Implement and hands-on learn various parts of a modern computing system.',
  ],
  logistics: [
    { label: 'Prerequisite', value: 'CS 224' },
    { label: 'Contact Hours', value: '4 hours of lecture per week, 3 hours of lab/studio/others per week' },
    { label: 'Textbook', value: 'Recommended: <em>Computer Architecture, Fifth Edition: A Quantitative Approach</em>, John L. Hennessy and David A. Patterson, 2011, Morgan Kaufmann' },
    { label: 'GenAI Policy', value: 'Allowed as helpers in coding, preparing data visualization scripts, and proofreading the final text. <b>Not allowed</b> for completely taking over any tasks (e.g., implementing mechanisms, conducting simulations, data analysis, and critical paper reviews).' },
  ],
  grading: {
    rows: [
      { component: 'Midterm', type: 'Essay/written', count: 1, contribution: '30%' },
      { component: 'Final', type: 'Essay/written', count: 1, contribution: '30%' },
      { component: 'Homework', type: 'Hands-on assignments', count: 4, contribution: '40%' },
    ],
    notes: [
      '<b>Minimum requirement to qualify for the final exam:</b> the midterm grade must be more than 50%.',
    ],
  },
  homework: {
    intro: 'Four homework assignments (40% total) plus one bonus homework. Handouts will be linked here when each homework is assigned.',
    rows: [
      { id: 'Bonus HW 1', topic: 'Paper Reviews', assigned: 'Sep 21', due: 'Dec 14', handout: 'TBA' },
      { id: 'HW 1', topic: 'Single-Cycle vs In-Order Pipeline Architectures', assigned: 'Sep 24', due: 'Oct 8', handout: 'TBA' },
      { id: 'HW 2', topic: 'Caching, Prefetching, and Branch Prediction', assigned: 'Oct 8', due: 'Oct 22', handout: 'TBA' },
      { id: 'HW 3', topic: 'Out-of-Order and Speculative Execution (Bonus: Spectre and Meltdown)', assigned: 'Oct 22', due: 'Nov 12', handout: 'TBA' },
      { id: 'HW 4', topic: 'Memory Scheduling', assigned: 'Nov 12', due: 'Dec 3', handout: 'TBA' },
    ],
    note: 'Late submission cut-off for all labs: December 14, 2026.',
  },
  schedule_note: 'Slides and lecture videos will be linked next to each lecture as the semester progresses.',
  schedule: [
    {
      type: 'day', date: 'Sep 17', week: 'Week 1', theme: 'Introduction and Foundation',
      lectures: [
        { id: 'L1a', title: 'Course Info and Logistics', slides: 'TBA', video: 'TBA' },
        { id: 'L1b', title: 'Computer Organization and Design Principles: Introduction and Basics', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Sep 21', week: 'Week 2', theme: 'Pipelined Microarchitecture Fundamentals',
      lectures: [
        { id: 'L2a', title: 'ISA Design Principles', slides: 'TBA', video: 'TBA' },
        { id: 'L2b', title: 'Performance Evaluation', slides: 'TBA', video: 'TBA' },
        { id: 'L2c', title: 'Critical Paper Reviews in Computer Architecture', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'milestone',
      events: [
        { icon: 'pen-to-square', text: 'Bonus Homework 1 assigned', detail: 'Paper Reviews', handout: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Sep 24',
      lectures: [
        { id: 'L3a', title: 'Trends, Tradeoffs and Design Fundamentals of Computer Architecture', slides: 'TBA', video: 'TBA' },
        { id: 'L3b', title: 'In-Order Pipelined CPU Design, Hazards, and Data Forwarding', slides: 'TBA', video: 'TBA' },
        { id: 'L3c', title: 'Branch Prediction', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'milestone',
      events: [
        { icon: 'pen-to-square', text: 'Homework 1 assigned', detail: 'Single-Cycle vs In-Order Pipeline Architectures', handout: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Sep 28', week: 'Week 3', theme: 'Memory Subsystem',
      lectures: [
        { id: 'L4a', title: 'Memory Subsystem Overview', slides: 'TBA', video: 'TBA' },
        { id: 'L4b', title: 'Virtual Memory and Translation Lookaside Buffer', slides: 'TBA', video: 'TBA' },
        { id: 'L4c', title: 'SRAM and DRAM', slides: 'TBA', video: 'TBA' },
      ],
    },
    { type: 'note', date: 'Oct 1', text: 'No lecture — Homework 1 continues' },
    {
      type: 'day', date: 'Oct 5', week: 'Week 4', theme: 'Memory Stalls, Pipeline Stalls, Out-of-Order Execution',
      lectures: [
        { id: 'L5a', title: 'Cache Organization and Design', slides: 'TBA', video: 'TBA' },
        { id: 'L5b', title: 'Deeper Look into DRAM Architecture', slides: 'TBA', video: 'TBA' },
        { id: 'L5c', title: 'Memory Request Scheduling', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Oct 8',
      lectures: [
        { id: 'L6a', title: 'Pipeline Stalls, Prefetching', slides: 'TBA', video: 'TBA' },
        { id: 'L6b', title: 'Branch Prediction and Loop Unrolling', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'milestone',
      events: [
        { icon: 'flag-checkered', text: 'Homework 1 due' },
        { icon: 'pen-to-square', text: 'Homework 2 assigned', detail: 'Caching, Prefetching, and Branch Prediction', handout: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Oct 12', week: 'Week 5', theme: 'Speculative Execution',
      lectures: [
        { id: 'L7a', title: "Out-of-Order Pipeline Design and Tomasulo's Algorithm", slides: 'TBA', video: 'TBA' },
        { id: 'L7b', title: 'Runahead Execution', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Oct 15',
      lectures: [
        { id: 'L8', title: 'Speculative Execution from a Security Perspective', note: 'guest lecture by Michael Schwarz', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Oct 19', week: 'Week 6', theme: 'Multi-Core Architectures',
      lectures: [
        { id: 'L9a', title: 'Multi-Core Architecture', slides: 'TBA', video: 'TBA' },
        { id: 'L9b', title: 'Memory Consistency', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Oct 22',
      lectures: [
        { id: 'L10a', title: 'Cache Coherency', slides: 'TBA', video: 'TBA' },
        { id: 'L10b', title: 'Cache Pollution', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'milestone',
      events: [
        { icon: 'flag-checkered', text: 'Homework 2 due' },
        { icon: 'pen-to-square', text: 'Homework 3 assigned', detail: 'Out-of-Order and Speculative Execution (Bonus: Spectre and Meltdown)', handout: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Oct 26', week: 'Week 7', theme: 'Parallel Execution and GPU Architecture',
      lectures: [
        { id: 'L11a', title: 'Parallelism, Heterogeneity, SIMD, and MIMD', slides: 'TBA', video: 'TBA' },
        { id: 'L11b', title: 'GPU Architecture and Predicated Execution', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 2', week: 'Week 8', theme: 'Midterm Week',
      lectures: [
        { id: 'L12', title: 'Review Session', slides: 'TBA', video: 'TBA' },
      ],
    },
    { type: 'exam', date: 'Nov 5', text: 'L13: Midterm Exam in Class' },
    {
      type: 'day', date: 'Nov 9', week: 'Week 9', theme: 'Memory Robustness',
      lectures: [
        { id: 'L14a', title: 'Data Retention and Refresh', slides: 'TBA', video: 'TBA' },
        { id: 'L14b', title: 'Read Disturbance I: RowHammer, RowPress, and ColumnPress', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 12',
      lectures: [
        { id: 'L15a', title: 'Read Disturbance II: Mitigations', slides: 'TBA', video: 'TBA' },
        { id: 'L15b', title: 'Memory Performance and Cold Boot Attacks', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'milestone',
      events: [
        { icon: 'flag-checkered', text: 'Homework 3 due' },
        { icon: 'pen-to-square', text: 'Homework 4 assigned', detail: 'Memory Scheduling', handout: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 16', week: 'Week 10', theme: 'Emerging and Killed Memory Architectures',
      lectures: [
        { id: 'L16a', title: 'Phase-Change Memory, STT-MRAM, Resistive Memory', slides: 'TBA', video: 'TBA' },
        { id: 'L16b', title: 'Monolithic 3D Integration', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 19',
      lectures: [
        { id: 'L17', title: 'NAND Flash Memory', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 23', week: 'Week 11', theme: 'Memory-Centric Computation',
      lectures: [
        { id: 'L18a', title: 'Processing Near and Using Memory', slides: 'TBA', video: 'TBA' },
        { id: 'L18b', title: 'Processing Near and Using Flash Memory', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 26',
      lectures: [
        { id: 'L19', title: 'Memory Centric Computing', note: 'guest lecture by Geraldo F. de Oliveira Jr., Huawei Zurich', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Nov 30', week: 'Week 12', theme: 'System on Chip',
      lectures: [
        { id: 'L20a', title: 'Accelerators, Systolic Arrays', slides: 'TBA', video: 'TBA' },
        { id: 'L20b', title: 'Neuromorphic Computation', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Dec 3',
      lectures: [
        { id: 'L21a', title: 'On-Chip Networks', slides: 'TBA', video: 'TBA' },
        { id: 'L21b', title: 'Interrupts and Polling', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'milestone',
      events: [
        { icon: 'flag-checkered', text: 'Homework 4 due' },
      ],
    },
    {
      type: 'day', date: 'Dec 7', week: 'Week 13', theme: 'Application-Oriented Architectures',
      lectures: [
        { id: 'L22a', title: 'Neural Networks and LLM Accelerators', slides: 'TBA', video: 'TBA' },
        { id: 'L22b', title: 'Architecture Solutions to Bioinformatics Workloads', slides: 'TBA', video: 'TBA' },
      ],
    },
    {
      type: 'day', date: 'Dec 10',
      lectures: [
        { id: 'L23a', title: 'Agent-based Simulations', slides: 'TBA', video: 'TBA' },
        { id: 'L23b', title: 'Graph Accelerators', slides: 'TBA', video: 'TBA' },
      ],
    },
    { type: 'note', date: 'Dec 14', week: 'Week 14', text: 'No lecture' },
    {
      type: 'milestone',
      events: [
        { icon: 'flag-checkered', text: 'Bonus Homework 1 due' },
        { icon: 'clock', text: 'Late submission cut-off for all labs' },
      ],
    },
    { type: 'note', date: 'Dec 17', text: 'No lecture' },
    {
      type: 'day', date: 'Dec 21', week: 'Week 15', theme: 'Final Exam Week',
      lectures: [
        { id: 'Review', title: 'Review Session', slides: 'TBA', video: 'TBA' },
      ],
    },
    { type: 'exam', date: 'Dec 24', text: 'Final Exam' },
  ],
  contact_notes: [
    'This course is offered by the Department of Computer Engineering at Bilkent University. Course website hosted by the <a href="https://sal-research.github.io">Secure and Sustainable System Scaling Lab</a>.',
  ],
};
