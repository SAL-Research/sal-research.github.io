// Course website metadata for CS 423 Computer Architecture (Bilkent, Fall 2026)
// Rendered with src/templates/_course.html into teaching/comparch-fall_2026/
//
// Structure: weeks -> days -> lectures. Lecture numbers (L1a, L2b, ...) are
// computed by the build: the day number counts lecture days across the course,
// and the part letter (a, b, c) is the lecture's position within its day
// (omitted for single-lecture days). Do not put lecture numbers in this file.
//
// During the semester, populate materials by replacing 'TBA' with a URL:
//   - per lecture:  pptx, pdf, video (YouTube)
//   - per homework: handout, repo, submission
// Schedule milestone rows reference homeworks by `hw: '<key>'` and pick up
// links automatically.

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

  homework_intro: 'Four homework assignments (40% total) plus one bonus homework. Handouts, git repositories, and submission links will be posted here when each homework is assigned.',
  homework_note: 'Late submission cut-off for all labs: December 14, 2026.',
  homeworks: [
    { key: 'bonus1', id: 'Bonus HW 1', topic: 'Paper Reviews', assigned: 'Sep 21', deadline: 'Dec 14', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw1', id: 'HW 1', topic: 'Single-Cycle vs In-Order Pipeline Architectures', assigned: 'Sep 24', deadline: 'Oct 8', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw2', id: 'HW 2', topic: 'Caching, Prefetching, and Branch Prediction', assigned: 'Oct 8', deadline: 'Oct 22', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw3', id: 'HW 3', topic: 'Out-of-Order and Speculative Execution (Bonus: Spectre and Meltdown)', assigned: 'Oct 22', deadline: 'Nov 12', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
    { key: 'hw4', id: 'HW 4', topic: 'Memory Scheduling', assigned: 'Nov 12', deadline: 'Dec 3', handout: 'TBA', repo: 'TBA', submission: 'TBA' },
  ],

  schedule_note: 'Slides (PPTX and PDF) and lecture videos will be linked next to each lecture as the semester progresses.',
  weeks: [
    {
      theme: 'Introduction and Foundation',
      days: [
        {
          date: 'Sep 17',
          lectures: [
            { title: 'Course Info and Logistics', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Computer Organization and Design Principles: Introduction and Basics', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Pipelined Microarchitecture Fundamentals',
      days: [
        {
          date: 'Sep 21',
          lectures: [
            { title: 'ISA Design Principles', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Performance Evaluation', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Critical Paper Reviews in Computer Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'assigned', hw: 'bonus1' }],
        },
        {
          date: 'Sep 24',
          lectures: [
            { title: 'Trends, Tradeoffs and Design Fundamentals of Computer Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'In-Order Pipelined CPU Design, Hazards, and Data Forwarding', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Branch Prediction', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'assigned', hw: 'hw1' }],
        },
      ],
    },
    {
      theme: 'Memory Subsystem',
      days: [
        {
          date: 'Sep 28',
          lectures: [
            { title: 'Memory Subsystem Overview', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Virtual Memory and Translation Lookaside Buffer', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'SRAM and DRAM', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        { date: 'Oct 1', note: 'No lecture — Homework 1 continues' },
      ],
    },
    {
      theme: 'Memory Stalls, Pipeline Stalls, Out-of-Order Execution',
      days: [
        {
          date: 'Oct 5',
          lectures: [
            { title: 'Cache Organization and Design', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Deeper Look into DRAM Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Memory Request Scheduling', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 8',
          lectures: [
            { title: 'Pipeline Stalls, Prefetching', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Branch Prediction and Loop Unrolling', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw1' },
            { type: 'assigned', hw: 'hw2' },
          ],
        },
      ],
    },
    {
      theme: 'Speculative Execution',
      days: [
        {
          date: 'Oct 12',
          lectures: [
            { title: "Out-of-Order Pipeline Design and Tomasulo's Algorithm", pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Runahead Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 15',
          lectures: [
            { title: 'Speculative Execution from a Security Perspective', note: 'guest lecture by Michael Schwarz', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Multi-Core Architectures',
      days: [
        {
          date: 'Oct 19',
          lectures: [
            { title: 'Multi-Core Architecture', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Memory Consistency', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Oct 22',
          lectures: [
            { title: 'Cache Coherency', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Cache Pollution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw2' },
            { type: 'assigned', hw: 'hw3' },
          ],
        },
      ],
    },
    {
      theme: 'Parallel Execution and GPU Architecture',
      days: [
        {
          date: 'Oct 26',
          lectures: [
            { title: 'Parallelism, Heterogeneity, SIMD, and MIMD', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'GPU Architecture and Predicated Execution', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Midterm Week',
      days: [
        {
          date: 'Nov 2',
          lectures: [
            { title: 'Review Session', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 5',
          lectures: [
            { title: 'Midterm Exam in Class', exam: true },
          ],
        },
      ],
    },
    {
      theme: 'Memory Robustness',
      days: [
        {
          date: 'Nov 9',
          lectures: [
            { title: 'Data Retention and Refresh', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Read Disturbance I: RowHammer, RowPress, and ColumnPress', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 12',
          lectures: [
            { title: 'Read Disturbance II: Mitigations', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Memory Performance and Cold Boot Attacks', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [
            { type: 'due', hw: 'hw3' },
            { type: 'assigned', hw: 'hw4' },
          ],
        },
      ],
    },
    {
      theme: 'Emerging and Killed Memory Architectures',
      days: [
        {
          date: 'Nov 16',
          lectures: [
            { title: 'Phase-Change Memory, STT-MRAM, Resistive Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Monolithic 3D Integration', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 19',
          lectures: [
            { title: 'NAND Flash Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'Memory-Centric Computation',
      days: [
        {
          date: 'Nov 23',
          lectures: [
            { title: 'Processing Near and Using Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Processing Near and Using Flash Memory', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Nov 26',
          lectures: [
            { title: 'Memory Centric Computing', note: 'guest lecture by Geraldo F. de Oliveira Jr., Huawei Zurich', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: 'System on Chip',
      days: [
        {
          date: 'Nov 30',
          lectures: [
            { title: 'Accelerators, Systolic Arrays', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Neuromorphic Computation', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Dec 3',
          lectures: [
            { title: 'On-Chip Networks', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Interrupts and Polling', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
          events: [{ type: 'due', hw: 'hw4' }],
        },
      ],
    },
    {
      theme: 'Application-Oriented Architectures',
      days: [
        {
          date: 'Dec 7',
          lectures: [
            { title: 'Neural Networks and LLM Accelerators', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Architecture Solutions to Bioinformatics Workloads', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
        {
          date: 'Dec 10',
          lectures: [
            { title: 'Agent-based Simulations', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
            { title: 'Graph Accelerators', pptx: 'TBA', pdf: 'TBA', video: 'TBA' },
          ],
        },
      ],
    },
    {
      theme: '',
      days: [
        {
          date: 'Dec 14',
          note: 'No lecture',
          events: [
            { type: 'due', hw: 'bonus1' },
            { type: 'note', icon: 'clock', text: 'Late submission cut-off for all labs' },
          ],
        },
        { date: 'Dec 17', note: 'No lecture' },
      ],
    },
    {
      theme: 'Final Exam Week',
      days: [
        { date: 'Dec 21', note: 'Review Session' },
        { date: 'Dec 24', exam: 'Final Exam' },
      ],
    },
  ],

  contact_notes: [
    'This course is offered by the Department of Computer Engineering at Bilkent University. Course website hosted by the <a href="https://sal-research.github.io">Secure and Sustainable System Scaling Lab</a>.',
  ],
};
