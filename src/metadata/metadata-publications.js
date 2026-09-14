const { awards } = require('./metadata.js');

const theses = [
  {
      title: 'Enabling Efficient and Scalable DRAM Read Disturbance Mitigation via New Experimental Insights into Modern DRAM Chips',
      venue: 'PhD Thesis, ETH Zürich',
      year: 2024,
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true}
      ],
      type: "thesis",
      bibtextype: 'phdthesis',
      label: 'yaglikci2024enabling',
      citation: `<u>A. Giray Yağlıkçı</u>, "Enabling Efficient and Scalable DRAM Read Disturbance Mitigation via New Experimental Insights into Modern DRAM Chips,"
      ETH Zürich, 2024.`,
      keywords: ['rowhammer', 'defense', 'refresh', 'memory', 'dram', 'memory controller', 'subarray', 'parallelism', 'spatial', 'variation', 'temperature', 'access pattern', 'rowpress'],
      awards: [
        {name: "ACM SIGMICRO Dissertation Award", year: 2025},
        {name: "IEEE/IFIP DSN W. C. Carter Doctoral Dissertation Award", year: 2025},
        {name: "ACM SIGARCH Outstanding Dissertation Award (Honorable Mention)", year: 2025},
        {name: "IEEE TTTC McCluskey Doctoral Dissertation Award (Semifinalist)", year: 2025},
        {name: "ETH Medal for Outstanding Doctoral Thesis (Nominated)", year: 2024},
        {name: "HOST Best Dissertation Award (Finalist)", year: 2024},
      ],
      summary: `This PhD dissertation, based on my PhD research, demonstrates that we can mitigate DRAM read disturbance efficiently and scalably by 
      1) building a detailed understanding of DRAM read disturbance,
      2) leveraging insights into modern DRAM chips and memory controllers,
      and 3) devising novel solutions that do not require proprietary knowledge of DRAM chip internals. 
      This thesis comprehensively explains the cutting edge in DRAM read disturbance research as of August, 2024,
      and identifies future research avenues to address the outstanding and emerging challenges in the field.`,
      sources:[
        {
          text:'Online',
          urls: [
            {type: 'pdf', url:'https://github.com/agyaglikci/agyaglikci.github.io/raw/main/pub/agy_phd_thesis.pdf'},
            {type: 'ETH Library', url:'https://www.research-collection.ethz.ch/entities/publication/925efab5-102a-43e1-b8ac-bb2178c0feda'}
          ]
        },
        {
          text:'Defense Slides',
          urls: [
            {type: 'ppt', url: 'https://safari.ethz.ch/wp-content/uploads/giray-phd-defense-slides-short.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/giray-phd-defense-slides-short.pdf'}
          ]
        },
      ]
  }
];


const selected_publications = [
  {
    title: "Terracotta: Enabling the Adoption of New DRAM Techniques via a Flexible DRAM Interface and Memory Controller",
    venue: "58th International Symposium on Microarchitecture (MICRO), Athens, Greece",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'songara2026terracotta',
    authors: [
      {lastname: 'Songara', firstname:'Harsh'},
      {lastname: 'Kanellopoulos', firstname:'Konstantinos'},
      {lastname: 'Bostanci', firstname:'Nisa'},
      {lastname: 'Sgouras', firstname:'Konstantinos Marios'},
      {lastname: 'Olgun', firstname:'Ataberk'},
      {lastname: 'Yüksel', firstname:'Ismail Emir'},
      {lastname: 'Kakolyris', firstname:'Andreas Kosmas'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname:'Onur'}
    ],
    sources:[
      // {
      //   text:'Preprint',
      //   urls: [
      //     {type: 'pdf', url:''},
      //   ]
      // },
      // {
      //   text:'Slides',
      //   urls: [
      //     {type: 'pptx', url:''},
      //     {type: 'pdf', url:''}
      //   ]
      // }
    ]
  },
  {
    title: "ColumnKeeper: Efficient Solutions to the ColumnDisturb Vulnerability in DRAM-based Systems",
    venue: "ACM International Symposium on Computer Architecture (ISCA), Raleigh, North Carolina, USA",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'kakolyris2026columnkeeper',
    authors: [
      {lastname: 'Kakolyris', firstname:'Andreas Kosmas'},
      {lastname: 'Bostanci', firstname:'Nisa'},
      {lastname: 'Olgun', firstname:'Ataberk'},
      {lastname: 'Yüksel', firstname:'Ismail Emir'},
      {lastname: 'Songara', firstname:'Harsh'},
      {lastname: 'Sgouras', firstname:'Konstantinos Marios'},
      {lastname: 'Baser', firstname:'Umut'},
      {lastname: 'Kanellopoulos', firstname:'Konstantinos'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname:'Onur'}
    ],
    sources:[
      {
        text:'Preprint',
        urls: [
          {type: 'pdf', url:'https://arxiv.org/pdf/2606.22632'},
        ]
      },
      {
        text:'Slides',
        urls: [
          {type: 'pptx', url:'https://raw.githubusercontent.com/agyaglikci/agyaglikci.github.io/refs/heads/main/talks/andreas-columnkeeper-isca26.pptx'},
          {type: 'pdf', url:'https://raw.githubusercontent.com/agyaglikci/agyaglikci.github.io/refs/heads/main/talks/andreas-columnkeeper-isca26.pdf'}
        ]
      }
    ]
  },
  {
    title: "In-DRAM True Random Number Generation Using Simultaneous Multiple-Row Activation: An Experimental Study of Real DRAM Chips",
    venue: "43rd IEEE International Conference on Computer Design (ICCD), Dallas, TX, USA",
    type: "conference",
    year: 2025,
    bibtextype: 'inproceedings',
    label: 'yuksel2025indram',
    authors: [
      {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
      {lastname: 'Olgun', firstname: 'Ataberk'},
      {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
      {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
      {lastname: 'Oliveira', firstname: 'Geraldo F.'},
      {lastname: 'Sadrosadati', firstname: 'Mohammad'},
      {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname: 'Onur'}
    ],
    citation: "İsmail Emir Yüksel, Ataberk Olgun, Nisa Bostancı, Oğuzhan Canpolat, Geraldo Francisco de Oliveira Junior, Mohammad Sadrosadati, <u>A. Giray Yağlıkçı</u>, and Onur Mutlu, \"In-DRAM True Random Number Generation Using Simultaneous Multiple-Row Activation: An Experimental Study of Real DRAM Chips\" in Proceedings of the 43rd IEEE International Conference on Computer Design (ICCD), Dallas, TX, USA, November 2025.",
    keywords: ['random number generation', 'memory', 'dram', 'hardware'],
    sources:[
      {
        text:'Full Paper',
        urls: [{type: 'pdf', url:'https://arxiv.org/pdf/2510.20269'}]
      },
      {
        text:'Slides',
        urls: [{type: 'pptx', url:'https://people.inf.ethz.ch/omutlu/pub/LeakyHammer_micro25_talk.pptx'}, {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/LeakyHammer_micro25_talk.pdf'}]
      }
    ]
  },
  {
    title: "ColumnDisturb: Understanding Column-based Read Disturbance in Real DRAM Chips and Implications for Future Systems",
    venue: "58th International Symposium on Microarchitecture (MICRO), Seoul, South Korea",
    type: "conference",
    year: 2025,
    bibtextype: 'inproceedings',
    label: 'yuksel2025columndisturb',
    authors: [
      {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
      {lastname: 'Olgun', firstname: 'Ataberk'},
      {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
      {lastname: 'Luo', firstname: 'Haocong'},
      {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname: 'Onur'}
    ],
    citation: "İsmail Emir Yüksel, Ataberk Olgun, Nisa Bostancı, Haocong Luo, <u>A. Giray Yağlıkçı</u>, and Onur Mutlu, \"ColumnDisturb: Understanding Column-based Read Disturbance in Real DRAM Chips and Implications for Future Systems\" in Proceedings of the 58th International Symposium on Microarchitecture (MICRO), Seoul, South Korea, October 2025.",
    keywords: ['rowhammer', 'memory', 'dram', 'hardware'],
    sources:[
      {
        text:'Full Paper',
        urls: [{type: 'pdf', url:'https://arxiv.org/pdf/2510.14750'}]
      },
      {
        text:'Slides',
        urls: [{type: 'pptx', url:'https://people.inf.ethz.ch/omutlu/pub/columndisturb_micro25_talk.pptx'}, {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/columndisturb_micro25_talk.pdf'}]
      }
    ],
    awards: [
      {name: "One of the 12 computer architecture papers of 2025 selected as Top Picks by IEEE Micro."},
    ] 
  },
  {
    title: "Understanding and Mitigating Covert Channel and Side Channel Vulnerabilities Introduced by RowHammer Defenses",
    venue: "58th International Symposium on Microarchitecture (MICRO), Seoul, South Korea",
    type: "conference",
    year: 2025,
    bibtextype: 'inproceedings',
    label: 'bostanci2025understanding',
    authors: [
      {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
      {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
      {lastname: 'Olgun', firstname: 'Ataberk'},
      {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
      {lastname: 'Kanellopoulos', firstname: 'Konstantinos'},
      {lastname: 'Sadrosadati', firstname: 'Mohammad'},
      {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname: 'Onur'}
    ],
    citation: "Nisa Bostancı, Oğuzhan Canpolat, Ataberk Olgun, İsmail Emir Yüksel, Konstantinos Kanellopoulos, Mohammad Sadrosadati, <u>A. Giray Yağlıkçı</u>, and Onur Mutlu, \"Understanding and Mitigating Covert Channel and Side Channel Vulnerabilities Introduced by RowHammer Defenses\" in Proceedings of the 58th International Symposium on Microarchitecture (MICRO), Seoul, South Korea, October 2025.",
    keywords: ['rowhammer', 'security', 'defense', 'covert channel', 'side channel', 'memory', 'dram', 'hardware'],
    sources:[
      {
        text:'Full Paper',
        urls: [{type: 'pdf', url:'https://arxiv.org/pdf/2510.14750'}]
      },
      {
        text:'Slides',
        urls: [{type: 'pptx', url:'https://people.inf.ethz.ch/omutlu/pub/LeakyHammer_micro25_talk.pptx'}, {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/LeakyHammer_micro25_talk.pdf'}]
      },
      {
        text:'Artifact',
        urls: [
          {type: 'code', url:'https://github.com/CMU-SAFARI/leakyhammer'},
        ]
      }
    ]
  },
  {
      title: "Chronus: Understanding and Securing the Cutting-Edge Industry Solutions to DRAM Read Disturbance",
      venue: "31st International Symposium on High-Performance Computer Architecture (HPCA), Las Vegas, NV, USA",
      type: "conference",
      year: 2025,
      bibtextype: 'inproceedings',
      label: 'canpolat2025chronus',
      authors: [
        {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: "Oğuzhan Canpolat, <u>A. Giray Yağlıkçı</u>, Geraldo Francisco de Oliveira, Ataberk Olgun, Nisa Bostanci, İsmail Emir Yuksel, Haocong Luo, Oğuz Ergin, and Onur Mutlu, <b>\"Chronus: Understanding and Securing the Cutting-Edge Industry Solutions to DRAM Read Disturbance,\"</b> in Proceedings of the 31st International Symposium on High-Performance Computer Architecture (HPCA), Las Vegas, NV, USA, March 2025.",
      keywords: ['rowhammer', 'defense', 'prac', 'memory', 'dram', 'memory controller', 'hardware'],
      awards: [
        {name: "Officially artifact evaluated as available, functional, and reproduced."},
        {name: "Invited Talk at Future of Memory Systems (FMS) 2025"},
        {name: "Invited Talk at Hardwear.io, Amsterdam, 2025"},

      ],
      summary: "We 1) present the first rigorous security, performance, energy, and cost analyses of the state-of-the-art on-DRAM-die read disturbance mitigation method, Per Row Activation Counting (PRAC) and 2) propose Chronus, a new mechanism that addresses PRAC's two major weaknesses. Our analysis shows that PRAC's system performance overhead on benign applications is non-negligible for modern DRAM chips and prohibitively large for future DRAM chips that are more vulnerable to read disturbance. We identify two weaknesses of PRAC that cause these overheads. First, PRAC increases critical DRAM access latency parameters due to the additional time required to increment activation counters. Second, PRAC performs a constant number of preventive refreshes at a time, making it vulnerable to an adversarial access pattern, known as the wave attack, and consequently requiring it to be configured for significantly smaller activation thresholds. To address PRAC's two weaknesses, we propose a new on-DRAM-die RowHammer mitigation mechanism, Chronus. Chronus 1) updates row activation counters concurrently while serving accesses by separating counters from the data and 2) prevents the wave attack by dynamically controlling the number of preventive refreshes performed. Our performance analysis shows that Chronus's system performance overhead is near-zero for modern DRAM chips and very low for future DRAM chips. Chronus outperforms three variants of PRAC and three other state-of-the-art read disturbance solutions. We discuss Chronus's and PRAC's implications for future systems and foreshadow future research directions. To aid future research, we open-source our Chronus implementation and the tools we develop to analyze PRAC.",
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2502.12650'}
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/Chronus_hpca25-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Chronus_hpca25-talk.pdf'}
          ]
        },
        {
          text:'Artifact',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/Chronus'},
          ]
        },
        {
          text:'DRAMSec\'24 Version',
          urls: [
            {type: 'Paper', url:'https://arxiv.org/pdf/2406.19094'}, 
            {type: 'Slides ppt', url:'https://safari.ethz.ch/wp-content/uploads/UnderstandingPRAC_slides.pptx'},
            {type: 'Slides pdf', url:'https://safari.ethz.ch/wp-content/uploads/UnderstandingPRAC_slides.pdf'}                    
          ]
        }
        
      ]
    },
    {
      title: "Understanding RowHammer Under Reduced Refresh Latency: Experimental Analysis of Real DRAM Chips and Implications on Future Solutions",
      venue: "31st International Symposium on High-Performance Computer Architecture (HPCA), Las Vegas, NV, USA",
      type: "conference",
      year: 2025,
      bibtextype: 'inproceedings',
      label: 'tugrul2025understanding',
      authors: [
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: "Yahya Can Tugrul, <u>A. Giray Yağlıkçı</u>, İsmail Emir Yuksel, Ataberk Olgun, Oğuzhan Canpolat, Nisa Bostanci, Mohammad Sadrosadati, Oğuz Ergin, and Onur Mutlu, \"Understanding RowHammer Under Reduced Refresh Latency: Experimental Analysis of Real DRAM Chips and Implications on Future Solutions\" in Proceedings of the 31st International Symposium on High-Performance Computer Architecture (HPCA), Las Vegas, NV, USA, March 2025.",
      keywords: ['rowhammer', 'characterization', 'charge restoration', 'memory', 'dram', 'hardware'],
      awards: [
        {name: "Officially artifact evaluated as available, functional, and reproduced."},
        {name: "Distinguished Artifact Award at HPCA 2025"}
      ],
      summary: " In this paper, our goal is to mitigate RowHammer at low cost by understanding the impact of reduced preventive refresh latency on RowHammer. To this end, we present the first rigorous experimental study on the interactions between refresh latency and RowHammer characteristics in real DRAM chips. Our experimental characterization using 388 real DDR4 DRAM chips from three major manufacturers demonstrates that a preventive refresh latency can be significantly reduced (by 64%). To investigate the impact of reduced preventive refresh latency on system performance and energy efficiency, we reduce the preventive refresh latency and adjust the aggressiveness of existing RowHammer solutions by developing a new mechanism, Partial Charge Restoration for Aggressive Mitigation (PaCRAM). Our results show that PaCRAM reduces the performance and energy overheads induced by five state-of-the-art RowHammer mitigation mechanisms with small additional area overhead. Thus, PaCRAM introduces a novel perspective into addressing RowHammer vulnerability at low cost by leveraging our experimental observations. To aid future research, we open-source our PaCRAM implementation.",
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2502.11745'}
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/PacRAM_hpca25-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/PacRAM_hpca25-talk.pdf'}
          ]
        },
        {
          text:'Artifact',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/PaCRAM'},
          ]
        }
      ]
    },   
    {
      title: "BreakHammer: Enhancing RowHammer Mitigations by Carefully Throttling Suspect Threads",
      venue: "57th International Symposium on Microarchitecture (MICRO), Austin, TX, USA",
      type: "conference",
      year: 2024,
      bibtextype: 'inproceedings',
      label: 'canpolat2024breakhammer',
      authors: [
        {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Kanellopoulos', firstname: 'Konstantinos'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: "Oğuzhan Canpolat, <u>A. Giray Yağlıkçı</u>, Ataberk Olgun, İsmail Emir Yüksel, Yahya Can Tuğrul, Konstantinos Kanellopoulos, Oğuz Ergin, and Onur Mutlu, \"BreakHammer: Enhancing RowHammer Mitigations by Carefully Throttling Suspect Threads\" in Proceedings of the 57th International Symposium on Microarchitecture (MICRO), Austin, TX, USA, November 2024.",
      keywords: ['rowhammer', 'defense', 'throttling', 'memory', 'dram', 'memory controller', 'hardware', "performance attacks", "denial of service"],
      awards: [
        {name: "Officially artifact evaluated as available, functional, and reproduced."},
        {name: "Invited Talk at Hardwear.io, Amsterdam, 2025"},
      ],
      summary: "In this work, we tackle the performance overheads of RowHammer solutions by tracking and throttling the generators of memory accesses that trigger RowHammer solutions. To this end, we propose BreakHammer. BreakHammer 1) observes the time-consuming RowHammer-preventive actions of existing RowHammer mitigation mechanisms, 2) identifies hardware threads that trigger many of these actions, and 3) reduces the memory bandwidth usage of each identified thread. As such, BreakHammer significantly reduces the number of RowHammer-preventive actions performed, thereby improving 1) system performance and DRAM energy, and 2) reducing the maximum slowdown induced on a benign application, with near-zero area overhead. Our extensive evaluations demonstrate that BreakHammer effectively reduces the negative performance, energy, and fairness effects of eight RowHammer mitigation mechanisms. To foster further research we open-source our BreakHammer implementation and scripts",
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2404.13477'}
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/BreakHammer_micro24-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/BreakHammer_micro24-talk.pdf'}
          ]
        },
        {
          text:'Artifact',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/BreakHammer'},
          ]
        }
      ]
    },
    { title: "ABACuS: All-Bank Activation Counters for Scalable and Low Overhead RowHammer Mitigation",
      venue: "33rd USENIX Security Symposium (USENIX Security, Philadelphia, PA, USA",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'olgun2024abacus',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Rhyner', firstname: 'Steve'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2310.09977.pdf'},
            {type: 'USENIX Security', url:'https://www.usenix.org/conference/usenixsecurity24/presentation/olgun'}
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/ABACuS_usenixsec24-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/ABACuS_usenixsec24-talk.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/ABACuS'}
          ]
        }
      ],
      awards: [
        {name: "Officially artifact evaluated as available, functional, and reproduced."},
      ]
    },
    { label: 'yaglikci2024svard',
      bibtextype: 'inproceedings',
      title: 'Spatial Variation-Aware Read Disturbance Defenses: Experimental Analysis of Real DRAM Chips and Implications on Future Solutions',
      venue: '30th IEEE International Symposium on High-Performance Computer Architecture (HPCA), Edinburgh, United Kingdom',
      type: "conference",
      year: 2024,
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `<u>A. Giray Yağlıkçı</u>, Yahya Can Tuğrul, Geraldo F. Oliveira, İsmail Emir Yüksel, Ataberk Olgun, Haocong Luo, Onur Mutlu
      "Spatial Variation-Aware Read Disturbance Defenses: Experimental Analysis of Real DRAM Chips and Implications on Future Solutions"
      Proceedings of the 30th IEEE International Symposium on High-Performance Computer Architecture (HPCA-30), 2024.`,
      keywords: ['rowhammer', 'defense', 'refresh', 'memory', 'dram', 'memory controller', 'subarray', 'parallelism', 'spatial', 'variation'],
      awards: [],
      summary:`
      We tackle the performance overhead of existing read disturbance solutions by leveraging the spatial variation in read disturbance
      across different memory locations in real DRAM chips. To do so, we 1) present the first rigorous real DRAM chip characterization 
      study of spatial variation of read disturbance and 2) propose Svärd, a new mechanism that dynamically adapts the aggressiveness 
      of existing solutions based on the row-level read disturbance profile. Our experimental characterization on 144 real DDR4 DRAM chips 
      representing 10 chip designs demonstrates a large variation in read disturbance vulnerability across different memory locations: 
      in the part of memory with the worst read disturbance vulnerability, 1) up to 2x the number of bitflips can occur and 2) bitflips 
      can occur at an order of magnitude fewer accesses, compared to the memory locations with the least vulnerability to read disturbance. 
      Svärd leverages this variation to reduce the overheads of five state-of-the-art read disturbance solutions, 
      and thus significantly increases system performance.
      `,
      sources:[
        {
          text:'Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2402.18652'}
          ]
        },
        {
          text:'Live Talk',
          urls: [
            {type: 'video', url:'https://youtu.be/cOUyQBBWPew'},
            {type: 'ppt', url: 'https://github.com/agyaglikci/agyaglikci.github.io/raw/main/talks/giray_svard_hpca24.pptx'},
            {type: 'pdf', url: 'https://github.com/agyaglikci/agyaglikci.github.io/raw/main/talks/giray_svard_hpca24.pdf'}
          ]
        },
      ]
    },
    {
      title: "Fundamentally Understanding and Solving RowHammer",
      venue: "Invited Special Session Paper at the 28th Asia and South Pacific Design Automation Conference (ASP-DAC), Tokyo, Japan",
      year: 2023,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'mutlu2023fundamentally',
      authors: [
        {lastname: 'Mutlu', firstname: 'Onur'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true}
      ],
      citation: `Onur Mutlu, Ataberk Olgun, and <u>A. Giray Yağlıkçı</u>,
      <b>"Fundamentally Understanding and Solving RowHammer"</b>
      Invited Special Session Paper at the 28th Asia and South Pacific Design Automation Conference (ASP-DAC), Tokyo, Japan, January 2023.`,
      keywords: ['rowhammer', 'survey', 'position', 'characterization', 'dram', 'mitigation', 'attack'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2211.07613.pdf'}                    
          ]
        },
        {
          text:'Recorded Talk (26 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=1kpDJkh_I8s'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/rowhammer_aspdac23-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: 'HiRA: Hidden Row Activation for Reducing Refresh Latency of Off-the-Shelf DRAM Chips',
      venue: '55th International Symposium on Microarchitecture (MICRO), Chicago, IL, USA',
      year: 2022,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yaglikci2022hira',
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Ergin', firstname: 'Oğuz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `<u>A. Giray Yağlıkçı</u>, Ataberk Olgun, Minesh Patel, Haocong Luo, Hasan Hassan, Lois Orosa, Oğuz Ergin, and Onur Mutlu,
      "HiRA: Hidden Row Activation for Reducing Refresh Latency of Off-the-Shelf DRAM Chips"
      Proceedings of the 55th International Symposium on Microarchitecture (MICRO), Chicago, IL, USA, October 2022.`,
      keywords: ['rowhammer', 'defense', 'refresh', 'memory', 'dram', 'memory controller', 'subarray', 'parallelism'],
      awards: [],
      summary:`
      We propose a new operation, Hidden Row Activation (HiRA), and the HiRA Memory Controller (HiRA-MC) to
      perform HiRA operations.
      HiRA hides a refresh operation's latency by refreshing a
      row concurrently with accessing or refreshing another row
      within the same bank. Unlike prior works, HiRA achieves this
      parallelism without any modifications to off-the-shelf DRAM
      chips. To do so, it leverages the new observation that two
      rows in the same bank can be activated without data loss if the
      rows are connected to different charge restoration circuitry. 

      HiRA reduces the time spent on refresh operations by 51.4%. 
      HiRA-MC increases system performance by 12.6% and 3.73× as it reduces the performance degradation due to periodic refreshes 
      and refreshes for RowHammer protection (preventive refreshes), respectively, for future DRAM chips with increased density and 
      RowHammer vulnerability.
      `,
      sources:[
        {
          text:'Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2209.10198.pdf'}
          ]
        },
        {
          text:'Live Talk Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_micro22-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_micro22-talk.pdf'}
          ]
        },
        {
          text:'Lecture (36 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=HTo3bVFSTjw'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_lecture-slides.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/hira_lecture-slides.pdf'}
          ]
        }
      ]
    },
    {
      title: 'Understanding RowHammer Under Reduced Wordline Voltage: An Experimental Study Using Real DRAM Devices',
      venue: '52nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Baltimore, MD, USA',
      year: 2022,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yaglikci2022understanding',
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Park', firstname: 'Jisung'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `<u>A. Giray Yağlıkçı</u>, Haocong Luo, Geraldo F. de Oliveira, Ataberk Olgun, Minesh Patel, Jisung Park, Hasan Hassan, Jeremie S. Kim, Lois Orosa, and Onur Mutlu,
      <b>"Understanding RowHammer Under Reduced Wordline Voltage: An Experimental Study Using Real DRAM Devices"</b>
      Proceedings of the 52nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Baltimore, MD, USA, June 2022.`,
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'voltage', 'wordline'],
      awards: [],
      summary:`
      This is the first work to experimentally demonstrate on 272
      real DRAM chips that lowering VPP reduces a DRAM chip's
      RowHammer vulnerability. We show that lowering VPP 1) increases the number of activate-precharge cycles needed to induce a RowHammer bit flip by up to 85.8 % with an average of
      7.4 % across all tested chips and 2) decreases the RowHammer
      bit error rate by up to 66.9 % with an average of 15.2 % across
      all tested chips. At the same time, reducing VPP marginally
      worsens a DRAM cell's access latency, charge restoration, and
      data retention time within the guardbands of system-level nominal timing parameters for 208 out of 272 tested chips. We
      conclude that reducing VPP is a promising strategy for reducing
      a DRAM chip's RowHammer vulnerability without requiring
      modifications to DRAM chips.      
      `,
      sources: [
        {text: 'Paper', urls: [
          {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22.pdf'},
          {type: 'arXiv', url:'https://arxiv.org/pdf/2206.09999.pdf'}
        ]},
        {text: 'Lightning Talk (2 mins)', urls: [
          {type: 'video', url:'https://www.youtube.com/watch?v=_njHx34GgXo'},
          {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-lightning-talk.pdf'},
          {type: 'ppt', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-lightning-talk.pptx'},
        ]},
        {text: 'Full Talk (34 mins incl. Q&A)', urls: [
          {type: 'video', url:'https://www.youtube.com/watch?v=CJoBROgFbwc'},
          {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pdf'},
          {type: 'ppt', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pptx'},
        ]},
      ]
    },
    {
      title: "A Deeper Look into RowHammer's Sensitivities: Experimental Analysis of Real DRAM Chips and Implications on Future Attacks and Defenses",
      venue: '54th International Symposium on Microarchitecture (MICRO), Virtual',
      year: 2021,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yaglikci2021deeper',
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', underline: true, equalcontrib: true, lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}'},
        {lastname: 'Orosa', firstname: 'Lois', equalcontrib: true},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Park', firstname: 'Jisung'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],  
      citation: 'Lois Orosa, <u>A. Giray Yağlıkçı</u>, Haocong Luo, Ataberk Olgun, Jisung Park, Hasan Hassan, Minesh Patel, Jeremie S. Kim, and Onur Mutlu, <b>"A Deeper Look into RowHammer’s Sensitivities: Experimental Analysis of Real DRAM Chips and Implications on Future Attacks and Defenses"</b> Proceedings of the 54th International Symposium on Microarchitecture (MICRO), Virtual, October 2021.',
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'temperature', 'access pattern', 'spatial variation'],
      awards: [],
      summary:`
        We present an experimental characterization using 248 DDR4
        and 24 DDR3 modern DRAM chips from four major DRAM manufacturers demonstrating how the RowHammer effects vary with
        three fundamental properties: 1) DRAM chip temperature, 2) aggressor row active time, and 3) victim DRAM cell's physical location.
        Among our 16 new observations, we highlight that a RowHammer
        bit flip 1) is very likely to occur in a bounded range, specific to each
        DRAM cell (e.g., 5.4% of the vulnerable DRAM cells exhibit errors
        in the range 70 °C to 90 °C), 2) is more likely to occur if the aggressor row is active for longer time (e.g., RowHammer vulnerability
        increases by 36% if we keep a DRAM row active for 15 column
        accesses), and 3) is more likely to occur in certain physical regions
        of the DRAM module under attack (e.g., 5% of the rows are 2x more
        vulnerable than the remaining 95% of the rows). Our study has
        important practical implications on future RowHammer attacks
        and defenses. We describe and analyze the implications of our new
        findings by proposing three future RowHammer attack and six
        future RowHammer defense improvements.
      `,
      sources: [
        {text: 'Paper', urls: [
          {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21.pdf'}, 
          {type: 'arXiv', url:'https://arxiv.org/abs/2110.10291'}
        ]},
        {text: 'Lightning Talk (1.5 mins)', urls: [
          {type: 'video', url:'https://www.youtube.com/watch?v=slFNdmPVD-Q&list=PL5Q2soXY2Zi--0LrXSQ9sST3N0k0bXp51&index=6'},
          {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-lightning-talk.pdf'},
          {type: 'ppt', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-lightning-talk.pptx'},
        ]},
        {text: 'Full Talk (21 mins)', urls: [
          {type: 'video', url:'https://www.youtube.com/watch?v=fkM32oA0u6U&list=PL5Q2soXY2Zi--0LrXSQ9sST3N0k0bXp51&index=12'},
          {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-talk.pdf'},
          {type: 'ppt', url:'https://people.inf.ethz.ch/omutlu/pub/ADeeperLookIntoRowhammer_micro21-talk.pptx'},
        ]},
      ]
    },
    {
      title: 'BlockHammer: Preventing RowHammer at Low Cost by Blacklisting Rapidly-Accessed DRAM Rows',
      venue: '27th IEEE International Symposium on High-Performance Computer Architecture (HPCA), Virtual',
      year: 2021,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yaglikci2021blockhammer',
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', underline: true, lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Azizi', firstname: 'Roknoddin'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Park', firstname: 'Jisung'},
        {lastname: 'Kanellopoulos', firstname: 'Konstantinos'},
        {lastname: 'Shahroodi', firstname: 'Taha'},
        {lastname: 'Ghose', firstname: 'Saugata'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: '<u>A. Giray Yağlıkçı</u>, Minesh Patel, Jeremie S. Kim, Roknoddin Azizi, Ataberk Olgun, Lois Orosa, Hasan Hassan, Jisung Park, Konstantinos Kanellopoulos, Taha Shahroodi, Saugata Ghose, and Onur Mutlu, <b>"BlockHammer: Preventing RowHammer at Low Cost by Blacklisting Rapidly-Accessed DRAM Rows,"</b> in Proceedings of the 27th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, February-March 2021.',
      keywords: ['rowhammer', 'defense', 'throttling', 'memory', 'dram', 'memory controller', 'hardware'],
      awards: [
        {name: "Intel Hardware Security Academic Award Finalist (one of 4 finalists out of 34 nominations)"}
      ],
      summary:`
        In this paper, we show that it is possible to efficiently and scalably prevent RowHammer bitflips 
        without knowledge of or modification to DRAM internals. We introduce BlockHammer, 
        a low-cost, effective, and easy-to-adopt RowHammer mitigation mechanism that prevents all RowHammer 
        bitflips while overcoming the two key challenges: scalability with worsening RowHammer vulnerability 
        and compatibility with commodity DRAM chips. BlockHammer selectively throttles memory accesses that 
        may cause RowHammer bitflips. To our knowledge, this is the first work that prevents RowHammer 
        bitflips efficiently and scalably without knowledge of or modifications to DRAM internals.
      `,
      sources:[
        {
          text:'Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/BlockHammer_preventing-DRAM-rowhammer-at-low-cost_hpca21.pdf'}
          ]
        },
        {
          text:'Short Talk (7 mins)',
          urls: [
            {type: 'video', url:'https://youtu.be/40SXSKXW5kY'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-short-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-short-talk.pdf'}
          ]
        },
        {
          text:'Full Talk (22 mins)',
          urls: [
            {type: 'video', url:'https://youtu.be/cWbW4qoDFds'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-preventing-rowhammer-at-low-cost-by-blacklisting-rapidly-accessed-dram-rows_hpca21-talk.pdf'}
          ]
        },
        {
          text:'Intel HWSec Academic Awards Talk (2 mins)',
          urls: [
            {type:'video', url:'https://www.youtube.com/watch?v=5TymwquygZM'},
            {type:'ppt', url:'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-IntelHardwareSecurityAcademicAwards-short-talk.pptx'},
            {type:'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/BlockHammer-IntelHardwareSecurityAcademicAwards-short-talk.pdf'}
          ]
        }
      ]
    }
]

const other_publications = [
  {
    title: "Clutch: High Performance Vector-Scalar Comparison using DRAM via Chunked Temporal Coding",
    venue: "40th ACM International Conference on Supercomputing (ICS), Belfast, Northern Ireland (United Kingdom)",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'tokuda2026clutch',
    authors: [
      {lastname: 'Tokuda', firstname:'Daichi'},
      {lastname: 'Kubo', firstname:'Tatsuya'},
      {lastname: 'Yüksel', firstname:'Ismail Emir'},
      {lastname: 'Olgun', firstname:'Ataberk'},
      {lastname: 'Luo', firstname:'Haocong'},
      {lastname: 'Nagatani', firstname:'Tomoya'},
      {lastname: 'Oliveira', firstname:'Geraldo Francisco de'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Sadrosadati', firstname:'Mohammad'},
      {lastname: 'Mutlu', firstname:'Onur'},
      {lastname: 'Takamaeda-Yamazaki', firstname:'Shinya'}
    ],
    sources:[
      {
        text:'Preprint',
        urls: [
          {type: 'pdf', url:'https://doi.org/10.60882/cispa.32935067'},
        ]
      }
    ]
  },
  {
    title: "PuDGhost: Experimental Analysis of Computation Result Corruption in Processing-using-DRAM Operations on Real DRAM Chips and Implications for Future Systems",
    venue: "ACM International Symposium on Computer Architecture (ISCA), Raleigh, North Carolina, USA",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'tokuda2026pudghost',
    authors: [
      {lastname: 'Tokuda', firstname:'Daichi'},
      {lastname: 'Yüksel', firstname:'Ismail Emir'},
      {lastname: 'Kubo', firstname:'Tatsuya'},
      {lastname: 'Olgun', firstname:'Ataberk'},
      {lastname: 'Luo', firstname:'Haocong'},
      {lastname: 'Bostanci', firstname:'Nisa'},
      {lastname: 'Wang', firstname:'Jikun'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Takamaeda-Yamazaki', firstname:'Shinya'},
      {lastname: 'Mutlu', firstname:'Onur'}
    ],
    sources:[
      {
        text:'Preprint',
        urls: [
          {type: 'pdf', url:'https://doi.org/10.60882/cispa.32781576'},
        ]
      }
    ]
  },
  {
    title: "DeJaVu: Why You Should Write to Your DRAM Rows Twice, Carefully",
    venue: "ACM International Symposium on Computer Architecture (ISCA), Raleigh, North Carolina, USA",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'luo2026dejavu',
    authors: [
      {lastname: 'Luo', firstname:'Haocong'},
      {lastname: 'Yüksel', firstname:'Ismail Emir'},
      {lastname: 'Olgun', firstname:'Ataberk'},
      {lastname: 'Bostanci', firstname:'Nisa'},
      {lastname: 'Ecemis', firstname:'Orhun'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname:'Onur'}
    ],
    sources:[
      {
        text:'Preprint',
        urls: [
          {type: 'pdf', url:'https://doi.org/10.60882/cispa.32782785'},
        ]
      }
    ]
  },
  { 
    title: "ScaleDisturb: Exploiting Temporal Asymmetry to Amplify Read Disturbance in Modern DRAM Chips",
    venue: "IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Charlotte, North Carolina, USA",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'wang2026scaledisturb',
    // Carina Fiedler, Jonas Juffinger, Sudheendra Raghav Neela, Martin Heckel, Hannes Weissteiner, A. Giray Yaglıkçı, Florian Adamsky, Daniel Gruss
    authors: [
      {lastname: 'Wang', firstname:'Jikun'},
      {lastname: 'Luo', firstname:'Haocong'},
      {lastname: 'Olgun', firstname:'Ataberk'},
      {lastname: 'Yüksel', firstname:'Ismail Emir'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Liang', firstname:'Yu'},
      {lastname: 'Bostanci', firstname:'Nisa'},
      {lastname: 'Sadrosadati', firstname:'Mohammad'},
      {lastname: 'Mutlu', firstname:'Onur'}
    ],
    sources:[
      {
        text:'Full Paper',
        urls: [
          {type: 'pdf', url:'https://arxiv.org/pdf/2606.07761v1'},
        ]
      }
    ]
  },  
  { 
    title: "Cleaning up the Mess: Re-evaluating the Real-System Modeling Accuracy of Ramulator 2.0",
    venue: "IEEE International Symposium on Performance Analysis of System and Software (ISPASS), Seoul, South Korea",
    year: 2026,
    type: "conference",
    bibtextype: 'inproceedings',
    label: 'bostanci2026cleaning',
    // Carina Fiedler, Jonas Juffinger, Sudheendra Raghav Neela, Martin Heckel, Hannes Weissteiner, A. Giray Yaglıkçı, Florian Adamsky, Daniel Gruss
    authors: [
      {lastname: 'Bostanci', firstname:'Nisa '},
      {lastname: 'Luo', firstname:'Haocong '},
      {lastname: 'Olgun', firstname:'Ataberk '},
      {lastname: 'Makeenkova', firstname:'Maria '},
      {lastname: 'de Oliveira', firstname:'Geraldo Francisco'},
      {lastname: 'Yağlıkçı', firstname:'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
      {lastname: 'Mutlu', firstname:'Onur'}
    ],
    sources:[
      {
        text:'Preprint',
        urls: [
          {type: 'pdf', url:'https://arxiv.org/pdf/2510.15744.pdf'},
        ]
      }
    ]
  },  
  { title: "Memory Band-Aid: A Principled RowHammer Defense-in-Depth",
      venue: "Network and Distributed System Security Symposium (NDSS), San Diego, CA, USA",
      year: 2026,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'fiedler2026memory',
      // Carina Fiedler, Jonas Juffinger, Sudheendra Raghav Neela, Martin Heckel, Hannes Weissteiner, A. Giray Yaglıkçı, Florian Adamsky, Daniel Gruss
      authors: [
        {lastname: 'Fiedler', firstname: 'Carina'},
        {lastname: 'Juffinger', firstname: 'Jonas'},
        {lastname: 'Neela', firstname: 'Sudheendra Raghav'},
        {lastname: 'Heckel', firstname: 'Martin'},
        {lastname: 'Weissteiner', firstname: 'Hannes'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Adamsky', firstname: 'Florian'},
        {lastname: 'Gruss', firstname: 'Daniel'}
      ],
      sources:[
        {
          text:'Preprint',
          urls: [
            {type: 'pdf', url:'https://carinafiedler.com/papers/memory_bandaid.pdf'},
          ]
        }
      ]
    },
    { title: "PuDHammer: Experimental Analysis of Read Disturbance Effects of Processing-using-DRAM in Real DRAM Chips",
      venue: "52nd Annual International Symposium on Computer Architecture (ISCA), Tokyo, Japan",
      year: 2025,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yuksel2025pudhammer',
      authors: [
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Sood', firstname: 'Akash'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2506.12947'},
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/pudHammer_isca25-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/pudhammer_isca25_talk.pdf'}
          ]
        }
      ]
    },
    { title: "Proteus: Achieving High-Performance Processing-Using-DRAM via Dynamic Precision Bit-Serial Arithmetic",
      venue: "37th ACM International Conference on Supercomputing (ICS), Salt Lake City, UT, USA",
      year: 2025,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'oliveira2025proteus',
      authors: [
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Kabra', firstname: 'Mayank'},
        {lastname: 'Guo', firstname: 'Yuxin'},
        {lastname: 'Chen', firstname: 'Kangqi'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Soysal', firstname: 'Melina'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Olivares', firstname: 'Joaquin'},
        {lastname: 'Ghose', firstname: 'Saugata'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2501.17466v2'},
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/proteus_ics25-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/proteus_ics25_talk.pdf'}
          ]
        }
      ]
    },
    { title: "Revisiting Main Memory-Based Covert and Side Channel Attacks in the Context of Processing-in-Memory",
      venue: "55th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Naples, Italy",
      year: 2025,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'bostanci2025revisiting',
      authors: [
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Kanellopoulos', firstname: 'Konstantinos'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Ghiasi', firstname: 'Nika Mansouri'},
        {lastname: 'Bingol', firstname: 'Zülal', firstnamelatex: 'Z{\\\"{u}}lal'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2404.11284'},
          ]
        },  
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/IMPACT_dsn25_talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/IMPACT_dsn25_talk.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/IMPACT'}
          ]
        }
      ],
      awards: [
        {name: "Officially artifact evaluated as available, reviewed, and reproduced."}
      ]
    },
    { title: "Revisiting DRAM Read Disturbance: Identifying Inconsistencies Between Experimental Characterization with Device-Level Studies",
      venue: "43rd IEEE VLSI Test Symposium (VTS), Tempe, AZ, USA",
      year: 2025,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'luo2025revisiting',
      authors: [
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://www.arxiv.org/pdf/2503.16749'},
          ]
        },  
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/DRAM-read-disturb-experiments-versus-device_vts25-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/DRAM-read-disturb-experiments-versus-device_vts25-talk.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/ReadDisturbanceVTS25'}
          ]
        }
      ]
    },
    { title: "Variable Read Disturbance: An Experimental Analysis of Temporal Variation in DRAM Read Disturbance",
      venue: "31st IEEE International Symposium on High-Performance Computer Architecture (HPCA), Las Vegas, NV, USA",
      year: 2025,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'olgun2025variable',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2502.13075'},
          ]
        },  
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/VRD_hpca25-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/VRD_hpca25-talk.pdf'}
          ]
        }
      ]
    },
    { title: "Rethinking the Producer-Consumer Relationship in Modern DRAM-Based Systems",
      venue: "IEEE Access",
      year: 2024,
      type: "journal",
      bibtextype: 'article',
      label: 'patel2024rethinking',
      authors: [
        // "Minesh Patel, Taha Shahroodi, Aditya Manglik, A. Giray Yaglikci, Ataberk Olgun, Haocong Luo, and Onur Mutlu,
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Shahroodi', firstname: 'Taha'},
        {lastname: 'Manglik', firstname: 'Aditya'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: "Minesh Patel, Taha Shahroodi, Aditya Manglik, <u>A. Giray Yağlıkçı</u>, Ataberk Olgun, Haocong Luo, and Onur Mutlu, \"Rethinking the Producer-Consumer Relationship in Modern DRAM-Based Systems,\" IEEE Access, December 2024.",
      keywords: ['producer-consumer', 'memory', 'dram', 'memory controller', 'hardware', 'performance'],
      awards: [],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2401.16279'},  
            {type: 'IEEE Access', url:'https://ieeexplore.ieee.org/document/10794671'}
          ]
        },
        {
          text:'Source Code and Data',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/DRAM-Datasheet-Survey'}
          ]
        }
      ]
    },
    { title: "Self-Managing DRAM: A Low-Cost Framework for Enabling Autonomous and Efficient DRAM Maintenance Operations",
      venue: "57th International Symposium on Microarchitecture (MICRO), Austin, TX, USA",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'hassan2024selfmanaging',
      authors: [
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2207.13358'},
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/SMD_self_managing_DRAM_micro24-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/SMD_self_managing_DRAM_micro24-talk.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/SelfManagingDRAM'}
          ]
        }
      ]

    },

    { title: "Sectored DRAM: A Practical Energy-Efficient and High-Performance Fine-Grained DRAM Architecture",
      venue: "ACM Transactions on Architecture and Code Optimization (TACO)",
      year: 2024,
      type: "journal",
      bibtextype: 'article',
      label: 'olgun2024sectored',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Bera', firstname: 'Rahul'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2207.13795'},
            {type: 'ACM Digital Library', url:'https://doi.org/10.1145/3673653'}
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/Sectored_DRAM_access24-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Sectored_DRAM_access24-talk.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/Sectored-DRAM'}
          ]
        }
      ]
    },
    { title: "RowPress Vulnerability in Modern DRAM Chips",
      venue: "Special Issue, IEEE Micro, Special Issue: Micro's Top Picks from 2023 Computer Architecture Conferences (MICRO TOP PICKS)",
      year: 2024,
      type: "journal",
      bibtextype: 'article',
      label: 'luo2024rowpress',
      authors: [
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Rhyner', firstname: 'Steve'},
        {lastname: 'Cavlak', firstname: 'M. Banu'},
        {lastname: 'Lindegger', firstname: 'Joel'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2406.16153'}                    
          ]
        }
      ]
    },
    { title: "Read Disturbance in High Bandwidth Memory: A Detailed Experimental Study on HBM2 DRAM Chips",
      venue: "54th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Brisbane, Australia",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'olgun2024read',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Osseiran', firstname: 'Majd'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Rhyner', firstname: 'Steve'},
        {lastname: 'Salami', firstname: 'Behzad'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'Ataberk Olgun, Majd Osseiran, A. Giray Yağlıkçı, Yahya Can Tuğrul, Haocong Luo, Steve Rhyner, Behzad Salami, Juan Gómez Luna, Onur Mutlu, <b>"Read Disturbance in High Bandwidth Memory: A Detailed Experimental Study on HBM2 DRAM Chips"</b> Proceedings of the 54th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Brisbane, Australia, June 2024.',
      keywords: ['hbm', 'read disturbance', 'memory', 'characterization', 'security'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2310.14665'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://safari.ethz.ch/wp-content/uploads/DSN_HBM_ReadDisturbance.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/DSN_HBM_ReadDisturbance.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/HBM-Read-Disturbance'}
          ]
        },
      ],
      awards: [
        {name: "Officially artifact evaluated as both code and dataset available, reviewed and reproducible."}
      ]
    },
    { title: "Simultaneous Many-Row Activation in Off-the-Shelf DRAM Chips: Experimental Characterization and Analysis",
      venue: "54th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Brisbane, Australia",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yuksel2024simultaneous',
      authors: [
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Soysal', firstname: 'Melina'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'İsmail Emir Yüksel, Yahya Can Tuğrul, F. Nisa Bostanci, Geraldo F. Oliveira, A. Giray Yağlıkçı, Ataberk Olgun, Melina Soysal, Haocong Luo, Juan Gómez-Luna, Mohammad Sadrosadati, Onur Mutlu, <b>"Simultaneous Many-Row Activation in Off-the-Shelf DRAM Chips: Experimental Characterization and Analysis"</b> Proceedings of the 54th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Brisbane, Australia, June 2024.',
      keywords: ['dram', 'simultaneous activation', 'memory', 'characterization', 'security'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2405.06081'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://safari.ethz.ch/wp-content/uploads/simradram_dsn24_final.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/simradram_dsn24_final.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/SiMRA-DRAM'}
          ]
        }
      ],
      awards: [
        {name: "Officially artifact evaluated as both code and dataset available, reviewed and reproducible."}
      ]
    },
    { title: "An Experimental Characterization of Combined RowHammer and RowPress Read Disturbance in Modern DRAM Chips",
      venue: "54th Annual IEEE/IFIP International Conference on Dependable Systems and Networks Disrupt Track (DSN Disrupt), Brisbane, Australia",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'luo2024experimental',
      authors: [
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'Haocong Luo, İsmail Emir Yüksel, Ataberk Olgun, A. Giray Yağlıkçı, Mohammad Sadrosadati, Onur Mutlu, <b>"An Experimental Characterization of Combined RowHammer and RowPress Read Disturbance in Modern DRAM Chips"</b> Proceedings of the 54th Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Brisbane, Australia, June 2024.',
      keywords: ['rowhammer', 'rowpress', 'read disturbance', 'memory', 'characterization', 'security'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2406.13080'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://safari.ethz.ch/wp-content/uploads/DSNDisrupt24_CombinedRHRP.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/DSNDisrupt24_CombinedRHRP.pdf'}
          ]
        }
      ] 
    },
    { title: "Functionally-Complete Boolean Logic in Real DRAM Chips: Experimental Characterization and Analysis",
      venue: "30th International Symposium on High-Performance Computer Architecture (HPCA), Edinburgh, UK",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yuksel2024functionally',
      authors: [
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'İsmail Emir Yüksel, Yahya Can Tuğrul, Ataberk Olgun, F. Nisa Bostanci, A. Giray Yağlıkçı, Geraldo F. Oliveira, Haocong Luo, Juan Gómez-Luna, Mohammad Sadrosadati, Onur Mutlu, <b>"Functionally-Complete Boolean Logic in Real DRAM Chips: Experimental Characterization and Analysis"</b> Proceedings of the 28th International Symposium on High-Performance Computer Architecture (HPCA), Edinburgh, UK, March 2024.',
      keywords: ['pim', 'dram', 'boolean', 'in-memory computing', 'processing-using-memory'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2402.18736'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://safari.ethz.ch/wp-content/uploads/fcdram_slides.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/fcdram_slides.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/FCDRAM/'}
          ]
        }
      ]
    },
    { title: "CoMeT: Count-Min-Sketch-based Row Tracking to Mitigate RowHammer at Low Cost",
      venue: "30th International Symposium on High-Performance Computer Architecture (HPCA), Edinburgh, UK",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'bostanci2024comet',
      authors: [
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Yüksel', firstname: 'İsmail Emir', lastnamelatex: 'Y{\\"{u}}ksel', firstnamelatex: '{\\I}smail Emir'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Kanellopoulos', firstname: 'Konstantinos'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      keywords: ['rowhammer', 'defense', 'count-min-sketch', 'memory', 'dram', 'memory controller', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2402.18769'}
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://safari.ethz.ch/wp-content/uploads/CoMeT_HPCA24.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/wp-content/uploads/CoMeT_HPCA24.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/CoMeT'}
          ]
        }
      ],
      awards: [
        {name: "Officially artifact evaluated as available, functional, and reproduced."}
      ]
    },
    {
      title: "MIMDRAM: An End-to-End Processing-Using-DRAM System for High-Throughput, Energy-Efficient and Programmer-Transparent Multiple-Instruction Multiple-Data Computing",
      venue: "30th International Symposium on High-Performance Computer Architecture (HPCA), Edinburgh, UK",
      year: 2024,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'oliveira2024mimdram',
      authors: [
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Ghose', firstname: 'Saugata'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'Geraldo F. Oliveira, Ataberk Olgun, A. Giray Yaglikçi, F. Nisa Bostanci, Juan Gómez-Luna, Saugata Ghose, Onur Mutlu, <b>"MIMDRAM: An End-to-End Processing-Using-DRAM System for High-Throughput, Energy-Efficient and Programmer-Transparent Multiple-Instruction Multiple-Data Computing"</b> Proceedings of the 28th International Symposium on High-Performance Computer Architecture (HPCA), Edinburgh, UK, March 2024.',
      keywords: ['pim', 'pum', 'mimd', 'dram'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://www.computer.org/csdl/proceedings-article/hpca/2024/931300a186/1VOACBfwFmU'}                    
          ]
        },
        {
          text:'Extended Version',
          urls:[
            {type: 'pdf', url:'https://arxiv.org/pdf/2402.19080'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/MIMDRAM'}
          ]
        }
      ]
    },
    {
      title: "Ramulator 2.0: A Modern, Modular, and Extensible DRAM Simulator",
      venue: "IEEE Access",
      year: 2024,
      type: "journal",
      bibtextype: 'article',
      label: 'luo2024ramulator2',
      authors: [
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Haocong Luo, Yahya Can Tuğrul, F. Nisa Bostanci, Ataberk Olgun, <u>A. Giray Yaglikci</u>, and Onur Mutlu, <b>"Ramulator 2.0: A Modern, Modular, and Extensible DRAM Simulator"</b> IEEE Access, vol. 12, pp. 14745-14764, 2024.`,
      keywords: ['ramulator', 'dram simulator', 'memory simulator', 'memory system', 'architecture simulator'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Ramulator2_arxiv23.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/ramulator2-comparch-fall24-lecture.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/ramulator2-comparch-fall24-lecture.pdf'}
          ] 
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/ramulator2'}
          ]
        }
      ]
    },
    {
      title: "SpyHammer: Understanding and Exploiting RowHammer Under Fine-Grained Temperature Variations",
      venue: "IEEE Access",
      year: 2024,
      type: "journal",
      bibtextype: 'article',
      label: 'orosa2024spyhammer',
      authors: [
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Ruhrmair', firstname: 'Ulrich'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Jattke', firstname: 'Patrick'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Razavi', firstname: 'Kaveh'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Lois Orosa, Ulrich Ruhrmair, A. Giray Yağlıkçı, Haocong Luo, Ataberk Olgun, Patrick Jattke, Minesh Patel, Jeremie S. Kim, Kaveh Razavi, and Onur Mutlu, <b>"SpyHammer: Understanding and Exploiting RowHammer Under Fine-Grained Temperature Variations"</b> IEEE Access, vol. 12, pp. 14624-14644, 2024.`,
      keywords: ['rowhammer', 'temperature', 'attack', 'security', 'dram'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://ieeexplore.ieee.org/document/10547262'}                    
          ]
        }
      ]
    },
    {
      title: "RowPress: Amplifying Read Disturbance in Modern DRAM Chips",
      venue: "50th International Symposium on Computer Architecture (ISCA), Orlando, FL, USA",
      year: 2023,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'luo2023rowpress',
      authors: [
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Rhyner', firstname: 'Steve'},
        {lastname: 'Cavlak', firstname: 'M. Banu'},
        {lastname: 'Lindegger', firstname: 'Joel'},
        {lastname: 'Sadrosadati', firstname: 'Mohammad'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Haocong Luo, Ataberk Olgun, <u>A. Giray Yaglikci</u>, Yahya Can Tugrul, Steve Rhyner, M. Banu Cavlak, Joel Lindegger, Mohammad Sadrosadati, and Onur Mutlu, <b>"RowPress: Amplifying Read Disturbance in Modern DRAM Chips"</b> Proceedings of the 50th International Symposium on Computer Architecture (ISCA), Orlando, FL, USA, June 2023.`,
      keywords: ['rowhammer', 'read disturbance', 'rowpress', 'dram', 'mitigation', 'attack'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowPress_isca23.pdf'}                    
          ]
        },
        {
          text:'Extended Version',
          urls:[
            {type: 'pdf', url:'https://arxiv.org/pdf/2306.17061.pdf'}
          ]
        },
        {
          text:'Lightning Talk (3 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=R3VKbbbWMnY'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/RowPress_isca23-lightning-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/RowPress_isca23-lightning-talk.pdf'}
          ]
        },
        {
          text:'Full Talk (26 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=PMM_XuLDFFo'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/RowPress_isca23-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/RowPress_isca23-talk.pdf'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/RowPress'}
          ]
        }
      ],
      awards: [
        {name: "Officially artifact evaluated as available, reusable and reproducible."},
        {name: "Distinguished artifact award at ISCA 2023."},
        {name: "One of the 12 computer architecture papers of 2023 selected as Top Picks by IEEE Micro."},
      ] 
    },
    {
      title: "An Experimental Analysis of RowHammer in HBM2 DRAM Chips",
      venue: "53nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks Disrupt Track (DSN Disrupt), Porto, Portugal",
      year: 2023,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'olgun2023hbmrowhammer',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Osseiran', firstname: 'Majd'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Rhyner', firstname: 'Steve'},
        {lastname: 'Salami', firstname: 'Behzad'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Ataberk Olgun, Majd Osseiran, <u>A. Giray Yaglikci</u>, Yahya Can Tugrul, Haocong Luo, Steve Rhyner, Behzad Salami, Juan Gómez-Luna, and Onur Mutlu,
      <b>"An Experimental Analysis of RowHammer in HBM2 DRAM Chips"</b>
      Proceedings of the 53nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks Disrupt Track (DSN Disrupt), Porto, Portugal, June 2023.`,
      keywords: ['rowhammer', 'read disturbance', 'hbm', 'dram', 'high bandwidth', 'attack'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/HBM_RowHammer_dsn-disrupt23.pdf'}                    
          ]
        },
        {
          text:'Full Talk (26 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=0OkYwavtrMc'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/HBM_RowHammer_dsn-disrupt23-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/HBM_RowHammer_dsn-disrupt23-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "DRAM Bender: An Extensible and Versatile FPGA-based Infrastructure to Easily Test State-of-the-art DRAM Chips",
      venue: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
      year: 2023,
      type: "journal",
      bibtextype: 'article',
      label: 'olgun2023drambender',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Tuğrul', firstname: 'Yahya Can', lastnamelatex: 'Tu\\u{g}rul'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Ergin', firstname: 'Oğuz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],  
      citation: `Ataberk Olgun, Hasan Hassan, <u>A Giray Yaglikci</u>, Yahya Can Tuğrul, Lois Orosa, Haocong Luo, Minesh Patel, Oğuz Ergin, Onur Mutlu,
      <b>"DRAM Bender: An Extensible and Versatile FPGA-based Infrastructure to Easily Test State-of-the-art DRAM Chips"</b>
      IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, 2023.`,
      keywords: ['dram', 'testing', 'verification', 'infrastructure', 'retention', 'rowhammer', 'real chips'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url: 'https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/595592/2211.05838.pdf?sequence=2&isAllowed=y'}
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url: 'https://github.com/CMU-SAFARI/DRAM-Bender'}
          ]
        }
      ]
    },
    {
      title: "DR-STRaNGe: End-to-End System Design for DRAM-based True Random Number Generators",
      venue: "28th International Symposium on High-Performance Computer Architecture (HPCA), Virtual",
      year: 2022,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'bostanci2022drstrange',
      authors: [
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],  
      citation: `F. Nisa Bostanci, Ataberk Olgun, Lois Orosa, <u>A. Giray Yağlıkçı</u>, Jeremie S. Kim, Hasan Hassan, Oğuz Ergin, and Onur Mutlu,
<b>"DR-STRaNGe: End-to-End System Design for DRAM-based True Random Number Generators"</b>
Proceedings of the 28th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, April 2022.`,
      keywords: ['end-to-end', 'random numbers', 'security', 'memory', 'dram', 'memory controller'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DR_STRANGE_EndtoEnd-DRAM-TRNG_hpca22.pdf'}                    
          ]
        },
        {
          text:'Full Talk (24 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=mSJ7GLrCu1o'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/DR_STRANGE_EndtoEnd-DRAM-TRNG_hpca22-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/DR_STRANGE_EndtoEnd-DRAM-TRNG_hpca22-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "DarkGates: A Hybrid Power-Gating Architecture to Mitigate the Performance Impact of Dark-Silicon in High Performance Processors",
      venue: "28th International Symposium on High-Performance Computer Architecture (HPCA), Virtual",
      year: 2022,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yahya2022darkgates',
      authors: [
        {lastname: 'Haj-Yahya', firstname: 'Jawad'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Park', firstname: 'Jisung'},
        {lastname: 'Rotem', firstname: 'Efraim'},
        {lastname: 'Sazeides', firstname: 'Yanos'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Jawad Haj-Yahya, Jeremie S. Kim, <u>A. Giray Yağlıkçı</u>, Jisung Park, Efraim Rotem, Yanos Sazeides, and Onur Mutlu,
<b>"DarkGates: A Hybrid Power-Gating Architecture to Mitigate the Performance Impact of Dark-Silicon in High Performance Processors"</b>
Proceedings of the 28th International Symposium on High-Performance Computer Architecture (HPCA), Virtual, April 2022. `,
      keywords: ['power gating', 'package', 'power delivery', 'energy efficiency', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DarkGates_hpca22.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            // {type: 'video', url:''},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/DarkGates_hpca22-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/DarkGates_hpca22-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "QUAC-TRNG: High-Throughput True Random Number Generation Using Quadruple Row Activation in Commodity DRAM Chips",
      venue: "48th International Symposium on Computer Architecture (ISCA), Virtual",
      year: 2021,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'olgun2021quactrng',
      authors: [
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Bostancı', firstname: 'F. Nisa', lastnamelatex: 'Bostanc{\\i}'},
        {lastname: 'Vijaykumar', firstname: 'Nandita'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Ataberk Olgun, Minesh Patel, <u>A. Giray Yağlıkçı</u>, Haocong Luo, Jeremie S. Kim, F. Nisa Bostancı, Nandita Vijaykumar, Oğuz Ergin, and Onur Mutlu,
<b>"QUAC-TRNG: High-Throughput True Random Number Generation Using Quadruple Row Activation in Commodity DRAM Chips"</b>
Proceedings of the 48th International Symposium on Computer Architecture (ISCA), Virtual, June 2021. `,
      keywords: ['random numbers', 'characterization', 'real chips', 'memory', 'dram'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21.pdf'}                    
          ]
        },
        {
          text:'Full Talk (25 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=QtBrq0WVOmQ&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=132'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pdf'}
          ]
        },
        {
          text:'SAFARI Live Seminar (1hr 26 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=snvF3g3GfkI&list=PL5Q2soXY2Zi_tOTAYm--dYByNPL7JhwR9&index=6'},
            // {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pptx'},
            // {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/QUAC-TRNG-DRAM_isca21-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "IChannels: Exploiting Current Management Mechanisms to Create Covert Channels in Modern Processors",
      venue: "48th International Symposium on Computer Architecture (ISCA), Virtual",
      year: 2021,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'yahya2021ichannels',
      authors: [
        {lastname: 'Haj-Yahya', firstname: 'Jawad'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Puddu', firstname: 'Ivan'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Gómez-Luna', firstname: 'Juan'},
        {lastname: 'Alser', firstname: 'Mohammed'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Jawad Haj-Yahya, Jeremie S. Kim, <u>A. Giray Yağlıkçı</u>, Ivan Puddu, Lois Orosa, Juan Gómez-Luna, Mohammed Alser, and Onur Mutlu,
      <b>"IChannels: Exploiting Current Management Mechanisms to Create Covert Channels in Modern Processors"</b>
      Proceedings of the 48th International Symposium on Computer Architecture (ISCA), Virtual, June 2021. `,
      keywords: ['security', 'covert channels', 'power delivery'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/IChannels-covert-channels_isca21.pdf'}                    
          ]
        },
        {
          text:'Full Talk (21 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=Why4Ffn5bRY&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=134'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/IChannels-covert-channels_isca21-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/IChannels-covert-channels_isca21-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Revisiting RowHammer: An Experimental Analysis of Modern Devices and Mitigation Techniques",
      venue: "47th International Symposium on Computer Architecture (ISCA), Valencia, Spain",
      year: 2020,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'kim2020revisitingrowhammer',
      authors: [
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Azizi', firstname: 'Roknoddin'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'Jeremie S. Kim, Minesh Patel, <u>A. Giray Yağlıkçı</u>, Hasan Hassan, Roknoddin Azizi, Lois Orosa, and Onur Mutlu, <b>"Revisiting RowHammer: An Experimental Analysis of Modern Devices and Mitigation Techniques,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.',
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (20 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=hU88UeWE48A&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=104'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Revisiting-RowHammer_isca20-talk.pdf'}
          ]
        },
        {
          text:'Lecture (55 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=gR7XR-Eepcg'},
            {type: 'ppt', url: 'https://safari.ethz.ch/architecture/fall2020/lib/exe/fetch.php?media=onur-comparch-fall2020-lecture5b-rowhammerin2020-revisitingrowhammer-afterlecture.pptx'},
            {type: 'pdf', url: 'https://safari.ethz.ch/architecture/fall2020/lib/exe/fetch.php?media=onur-comparch-fall2020-lecture5b-rowhammerin2020-revisitingrowhammer-afterlecture.pdf'}
          ]
        },
      ]
    },
    {
      title: "CLR-DRAM: A Low-Cost DRAM Architecture Enabling Dynamic Capacity-Latency Trade-Off",
      venue: "47th International Symposium on Computer Architecture (ISCA), Valencia, Spain",
      year: 2020,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'luo2020clrdram',
      authors: [
        {lastname: 'Luo', firstname: 'Haocong'},
        {lastname: 'Shahroodi', firstname: 'Taha'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Park', firstname: 'Jisung'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'Haocong Luo, Taha Shahroodi, Hasan Hassan, Minesh Patel, <u>A. Giray Yağlıkçı</u>, Lois Orosa, Jisung Park, and Onur Mutlu, <b>"CLR-DRAM: A Low-Cost DRAM Architecture Enabling Dynamic Capacity-Latency Trade-Off,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.',
      keywords: ['low-latency', 'density-performance tradeoff', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/CLR-DRAM_capacity-latency-reconfigurable-DRAM_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (20 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=L3Y1eOF9C7U'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/CLR-DRAM_capacity-latency-reconfigurable-DRAM_isca20-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CLR-DRAM_capacity-latency-reconfigurable-DRAM_isca20-talk.pdf'}
          ]
        },
      ]
    },
    {
      title: "SysScale: Exploiting Multi-domain Dynamic Voltage and Frequency Scaling for Energy Efficient Mobile Processors",
      venue: "47th International Symposium on Computer Architecture (ISCA), Valencia, Spain",
      year: 2020,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'hajyahya2020sysscale',
      authors: [
        {lastname: 'Haj-Yahya', firstname: 'Jawad'},
        {lastname: 'Alser', firstname: 'Mohammed'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Vijaykumar', firstname: 'Nandita'},
        {lastname: 'Rotem', firstname: 'Efraim'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Jawad Haj-Yahya, Mohammed Alser, Jeremie Kim, <u>A. Giray Yağlıkçı</u>, Nandita Vijaykumar, Efraim Rotem, and Onur Mutlu, <b>"SysScale: Exploiting Multi-domain Dynamic Voltage and Frequency Scaling for Energy Efficient Mobile Processors,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.
      `,
      keywords: ['memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/sysscale_multi-DVFS-energy-mobile-processors_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (17 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=UOK0gDDk1i8'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/sysscale_multi-DVFS-energy-mobile-processors_isca20-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/sysscale_multi-DVFS-energy-mobile-processors_isca20-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "EDEN: Energy-Efficient, High-Performance Neural Network Inference Using Approximate DRAM",
      venue: "52nd International Symposium on Microarchitecture (MICRO), Columbus, OH, USA",
      year: 2019,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'koppula2019eden',
      authors: [
        {lastname: 'Koppula', firstname: 'Skanda'},
        {lastname: 'Orosa', firstname: 'Lois'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Azizi', firstname: 'Roknoddin'},
        {lastname: 'Shahroodi', firstname: 'Taha'},
        {lastname: 'Kanellopoulos', firstname: 'Konstantinos'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `Skanda Koppula, Lois Orosa, <u>A. Giray Yağlıkçı</u>, Roknoddin Azizi, Taha Shahroodi, Konstantinos Kanellopoulos, and Onur Mutlu, <b>"EDEN: Energy-Efficient, High-Performance Neural Network Inference Using Approximate DRAM,"</b> in Proceedings of the 52nd International Symposium on Microarchitecture (MICRO), Columbus, OH, USA, October 2019.`,
      keywords: ['approximate memory', 'dram latency', 'voltage scaling', 'deep neural networks', 'error resiliency'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19.pdf'}                    
          ]
        },
        {
          text:'Lecture (38 mins)',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=B5E95OPTlaw'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-talk.pdf'}
          ]
        },
        {
          text:'Lightning Talk',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=oS-bKY75gXQ'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-lightning-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/EDEN-efficient-DNN-inference-with-approximate-memory_micro19-lightning-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "CROW: A Low-Cost Substrate for Improving DRAM Performance, Energy Efficiency, and Reliability",
      venue: "46th International Symposium on Computer Architecture (ISCA), Phoenix, AZ, USA",
      year: 2019,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'hassan2019crow',
      authors: [
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Patel', firstname: 'Minesh'},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Vijaykumar', firstname: 'Nandita'},
        {lastname: 'Mansouri Ghiasi', firstname: 'Nika'},
        {lastname: 'Ghose', firstname: 'Saugata'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `H. Hassan, M. Patel, J. S. Kim, <u>A. Giray Yağlıkçı</u>, N. Vijaykumar, N. Mansouri Ghiasi, S. Ghose, O. Mutlu, <b>"CROW: A Low-Cost Substrate for Improving DRAM Performance, Energy Efficiency, and Reliability,"</b> in Proceedings of the 46th International Symposium on Computer Architecture (ISCA), June 2019.`,
      keywords: ['memory latency', 'row decoder', 'spare rows', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19.pdf'}                    
          ]
        },
        {
          text:'Full Talk',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=FckbkwW1u_E'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-talk.pdf'}
          ]
        },
        {
          text:'Lightning Talk',
          urls: [
            {type: 'video', url:'https://www.youtube.com/watch?v=8Ml5sz63Jbc'},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-lightning-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/CROW-DRAM-substrate-for-performance-energy-reliability_isca19-lightning-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "What Your DRAM Power Models Are Not Telling You: Lessons from a Detailed Experimental Study",
      venue: "ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS), Irvine, CA, USA",
      year: 2018,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'ghose2018dram-powermodels',
      authors: [
        {lastname: 'Ghose', firstname: 'Saugata'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Gupta', firstname: 'Raghav'},
        {lastname: 'Lee', firstname: 'Donghyuk'},
        {lastname: 'Kudrolli', firstname: 'Kais'},
        {lastname: 'Liu', firstname: 'William X.'},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Chang', firstname: 'Kevin K.'},
        {lastname: 'Chatterjee', firstname: 'Niladrish'},
        {lastname: 'Agrawal', firstname: 'Aditya'},
        {lastname: "O'Connor", firstname: "Mike"},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `S. Ghose, <u>A. Giray Yağlıkçı</u>, R. Gupta, D. Lee, K. Kudrolli, W. X. Liu, H. Hassan, K. K. Chang, N. Chatterjee, A. Agrawal, M. O'Connor, and O. Mutlu, <b>"What Your DRAM Power Models Are Not Telling You: Lessons from a Detailed Experimental Study,"</b> in Proceedings of the ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS), Irvine, CA, USA, June 2018.`,
      keywords: ['rowhammer', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Abstract',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18-abstract.pdf'}                    
          ]
        },
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18_pomacs18-twocolumn.pdf'}                    
          ]
        },
        {
          text:'POMACS Journal Version',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18_pomacs18.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/VAMPIRE-DRAM-power-characterization-and-modeling_sigmetrics18-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Understanding Reduced-Voltage Operation in Modern DRAM Devices: Experimental Characterization, Analysis, and Mechanisms",
      venue: "ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS), Urbana-Champaign, IL, USA",
      year: 2017,
      type: "conference",
      bibtextype: 'inproceedings',
      label: 'chang2017understanding-reduced-voltage-dram',
      authors: [
        {lastname: 'Chang', firstname: 'Kevin K.'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Ghose', firstname: 'Saugata'},
        {lastname: 'Agrawal', firstname: 'Aditya'},
        {lastname: 'Chatterjee', firstname: 'Niladrish'},
        {lastname: 'Kashyap', firstname: 'Abhijith'},
        {lastname: 'Lee', firstname: 'Donghyuk'},
        {lastname: "O'Connor", firstname: "Mike"},
        {lastname: 'Hassan', firstname: 'Hasan'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: `K. Chang, <u>A. Giray Yağlıkçı</u>, S. Ghose, A. Agrawal, N. Chatterjee, A. Kashyap, D. Lee, M. O'Connor, H. Hassan, and O. Mutlu, <b>"Understanding Reduced-Voltage Operation in Modern DRAM Devices: Experimental Characterization, Analysis, and Mechanisms,"</b> in Proceedings of the ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS), Urbana-Champaign, IL, USA, June 2017.`,
      keywords: ['voltage scaling', 'access latency', 'characterization', 'real chips', 'memory', 'dram', 'hardware'],
      sources:[
        {
          text:'Abstract',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-abstract.pdf'}                    
          ]
        },
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-paper.pdf'}                    
          ]
        },
        {
          text:'POMACS Journal Version',
          urls: [
            {type: 'pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-pomacs-onecolumn.pdf'}                    
          ]
        },
        {
          text:'Slides',
          urls: [
            {type: 'video', url:''},
            {type: 'ppt', url: 'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-talk.pptx'},
            {type: 'pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Voltron-reduced-voltage-DRAM-sigmetrics17-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Understanding the Security Benefits and Overheads of Emerging Industry Solutions to DRAM Read Disturbance",
      venue: "4th Workshop on DRAM Security (DRAMsec), held with 51st ISCA, Buenos Aires, Argentina",
      year: 2024,
      type: "techreport",
      bibtextype: 'article',
      label: 'canpolat2024understanding',
      authors: [
        {lastname: 'Canpolat', firstname: 'Oğuzhan', firstnamelatex: 'O\\u{g}uzhan'},
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Oliveira', firstname: 'Geraldo F.'},
        {lastname: 'Olgun', firstname: 'Ataberk'},
        {lastname: 'Ergin', firstname: 'Oğuz', firstnamelatex: 'O\\u{g}uz'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: 'Oğuzhan Canpolat, <u>A. Giray Yağlıkçı</u>, Geraldo F. Oliveira, Ataberk Olgun, Oğuz Ergin, and Onur Mutlu, <b>"Understanding the Security Benefits and Overheads of Emerging Industry Solutions to DRAM Read Disturbance"</b> 4th Workshop on DRAM Security (DRAMsec), held with 51st Annual International Symposium on Computer Architecture (ISCA), Buenos Aires, Argentina, July 2024.',
      keywords: ['read disturbance', 'characterization', 'memory', 'dram', 'security'],
      sources:[
        {
          text:'Slides',
          urls: [
            {type: 'ppt', url:'https://safari.ethz.ch/wp-content/uploads/UnderstandingPRAC_slides.pptx'},
            {type: 'pdf', url:'https://safari.ethz.ch/wp-content/uploads/UnderstandingPRAC_slides.pdf'}                    
          ]
        },
        {
          text:'Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/pdf/2406.19094'}                    
          ]
        },
        {
          text:'Source Code',
          urls: [
            {type: 'code', url:'https://github.com/CMU-SAFARI/ramulator2'}
          ]
        }
      ]
    },
    {
      title: 'Security Analysis of the Silver Bullet Technique for RowHammer Prevention',
      venue: 'arXiv:2106.07084 [cs.CR]',
      year: 2021,
      type: 'techreport',
      bibtextype: 'article',
      label: 'yaglikci2021security',
      authors: [
        {lastname: 'Yağlıkçı', firstname: 'A. Giray', lastnamelatex: 'Ya\\u{g}l{\\i}k\\c{c}{\\i}', underline: true},
        {lastname: 'Kim', firstname: 'Jeremie S.'},
        {lastname: 'Devaux', firstname: 'Fabrice'},
        {lastname: 'Mutlu', firstname: 'Onur'}
      ],
      citation: '<u>A. Giray Yağlıkçı</u>, Jeremie S. Kim, Fabrice Devaux, and Onur Mutlu, <b>""Security Analysis of the Silver Bullet Technique for RowHammer Prevention","</b> arXiv, 2021.',
      keywords: ['rowhammer', 'defense', 'refresh', 'memory', 'dram', 'on-die', 'hardware'],
      awards: [],
      summary:`
      We mathematically demonstrate that Silver Bullet, when properly configured and implemented in a DRAM chip, can securely prevent RowHammer attacks. The demonstration focuses on the most representative implementation of Silver Bullet, the patent claiming many implementation possibilities not covered in this demonstration. Our study concludes that Silver Bullet is a promising RowHammer prevention mechanism that can be configured to operate securely against RowHammer attacks at various efficiency-area tradeoff points, supporting relatively small hammer count values (e.g., 1000) and Silver Bullet table sizes (e.g., 1.06KB).
      `,
      sources:[ 
        {
          text:'Full Paper',
          urls: [
            {type: 'pdf', url:'https://arxiv.org/abs/2106.07084.pdf'}
          ]
        },
      ]
    }
];

const publications = selected_publications.concat(other_publications, theses);

// Count occurrences of each venue text
const venue_counts = {
  "International Symposium on High-Performance Computer Architecture (HPCA)": 0,
  "International Symposium on Computer Architecture (ISCA)": 0,
  "International Symposium on Microarchitecture (MICRO)": 0,
  "IEEE/IFIP International Conference on Dependable Systems and Networks (DSN)": 0,
  "IEEE/IFIP International Conference on Dependable Systems and Networks Disrupt Track (DSN Disrupt)": 0,
  "Design, Automation & Test in Europe Conference & Exhibition (DATE)": 0,
  "International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS)": 0,
  "IEEE VLSI Test Symposium (VTS)": 0,
  "Asia and South Pacific Design Automation Conference (ASP-DAC)": 0,
  "USENIX Security Symposium": 0,
  "Network and Distributed System Security Symposium (NDSS)": 0,
  "ACM International Conference on Measurement and Modeling of Computer Systems (SIGMETRICS)": 0,
  "Workshop on DRAM Security (DRAMsec)": 0
};

publications.forEach(pub => {
  const venue = pub.venue;
  // if one of the venue_counts keys is a substring of venue, count it
  Object.keys(venue_counts).forEach(key => {
    if (venue.includes(key)) {
      venue_counts[key] = venue_counts[key] + 1;
    }
  }
  );
});

// Convert venue_counts to sorted array for template
const venue_counts_array = Object.entries(venue_counts)
  .sort((a, b) => b[1] - a[1]); // Sort by count descending

// Log the results
console.log('Venue occurrence counts:');
venue_counts_array.forEach(([venue, count]) => {
  console.log(`${count}x: ${venue}`);
});

// Drop the venue_counts_array entry if count is zero
for (let i = venue_counts_array.length - 1; i >= 0; i--) {
  if (venue_counts_array[i][1] === 0) {
    venue_counts_array.splice(i, 1);
  }
}

// Go through the authors of each publication and create a list of unique authors across all publications in the last five years 
const currentYear = new Date().getFullYear();
const fiveYearsAgo = currentYear - 5;

const uniqueAuthorsLastFiveYears = new Set();

uniqueAuthorsLastFiveYears.add("Onur Mutlu"); // Ensure Onur Mutlu is included
uniqueAuthorsLastFiveYears.add("Oğuz Ergin"); // Ensure Oğuz Ergin is included
uniqueAuthorsLastFiveYears.add("Saugata Ghose"); // Ensure Saugata Ghose is included

publications.forEach(pub => {
  if (pub.year >= fiveYearsAgo) {
    pub.authors.forEach(author => {
      const fullName = `${author.firstname} ${author.lastname}`;
      uniqueAuthorsLastFiveYears.add(fullName);
    });
  }
});
uniqueAuthorsLastFiveYears.delete("A. Giray Yağlıkçı"); // Remove self

// Convert Set to object with counts
const authorCounts = {};
publications.forEach(pub => {
  if (pub.year >= fiveYearsAgo) {
    pub.authors.forEach(author => {
      const fullName = `${author.firstname} ${author.lastname}`;
      if (uniqueAuthorsLastFiveYears.has(fullName)) {
        authorCounts[fullName] = (authorCounts[fullName] || 0) + 1;
      }
    });
  }
});

// Convert to sorted array by count (descending) then alphabetically
const uniqueAuthorsArray = Object.entries(authorCounts)
  .sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1]; // Sort by count descending
    return a[0].localeCompare(b[0]); // Then alphabetically
  });

console.log(`\nUnique authors in publications from ${fiveYearsAgo}-${currentYear}:`);
console.log(`Total: ${uniqueAuthorsArray.length} authors`);
uniqueAuthorsArray.forEach(([author, count]) => {
  console.log(`  ${count}x - ${author}`);
});


module.exports = {
  publications,
  theses,
  selected_publications,
  other_publications,
  venue_counts: venue_counts_array,
  unique_authors_last_five_years: uniqueAuthorsArray
};