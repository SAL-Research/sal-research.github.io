const { description } = require("./metadata-s4l");

const research_topics = [
    {   
        topic: "Hardware-Software Co-Design for System Robustness", 
        icon: "microchip",
        description_paragraphs: [
            "Hardware and software each offer unique advantages that can complement one another. Software operates with semantic awareness—understanding data structures, access patterns, and security requirements. Hardware can detect and respond to low-level events with greater speed, accuracy, and efficiency than software alone.",
            "Bridging these two layers creates opportunities for optimization impossible at either level independently. Software's semantic insights can guide hardware to apply its mechanisms selectively rather than universally, reducing unnecessary resource consumption. Conversely, hardware's precise event detection can be enriched by software's ability to interpret the broader context and intent behind those events, distinguishing legitimate activity from malicious behavior.",
            "This semantic-mechanical integration enables systems to make more informed decisions about when and how to apply protective or corrective mechanisms. Rather than treating all data or all events uniformly, co-designed systems can allocate resources strategically based on actual need. The result is improved performance, energy efficiency, and system sustainability—outcomes that emerge from combining software's understanding of what matters with hardware's ability to act swiftly on how to respond.",
            "Effective hardware-software co-design transforms potential waste into opportunity, enabling robust system scaling while minimizing environmental and operational costs."
        ]
    },
    {   
        topic: "Data-Centric Robustness", 
        icon: "database",
        description_paragraphs: [
            "Modern applications (e.g., like large language models, DNA sequencing,  and agent-based simulations) demand vast computational parallelism, high-bandwidth and low-latency access to large data, and confidentiality guarantees throughout execution. Modern systems are experiencing a paradigm shift toward data-centric computation components (e.g., processing in memory and storage). Unfortunately, data integrity and confidentiality mechanisms fall behind, leading to high overheads on system performance, energy consumption, and hardware complexity. Decentralizing and distributing security responsibilities across system components based on data locality and computational resource availability can alleviate these drawbacks, enabling individual components (CPUs, GPUs, FPGAs, DRAMs, SSDs) to manage security autonomously. This is especially important as components become less reliable with shrinking technology nodes and systems scale out in distributed environments. Our research aims to address these challenges in several different ways, including encrypting data where it resides, distributing trusted execution environments (TEEs) across components, revisiting attestation protocols for distributed TEEs, and offloading security-critical tasks in the presence of untrusted system software."
        ]
    },
    {   
        topic: "Building Better Understanding of Circuit-Level Failure Mechanisms", 
        icon: "magnifying-glass-chart",
        description_paragraphs: [
            "Continuous shrinking of manufacturing technology nodes provides better performance at lower energy and hardware cost, but amplifies circuit-level failure mechanisms. To enable secure and sustainable scaling, research is needed to build detailed understanding of known failure mechanisms and discover unknown ones before they manifest in real systems. This research is crucial for developing effective, low-cost countermeasures before robustness problems appear or are exploited. Future work will investigate variation in hardware failures in DRAM and Flash chips under unexplored conditions of aging and radiation exposure through real chip testing and detailed circuit simulations. Open-source testing tools and methodologies will foster collaboration, enabling collective effort to gather data on hardware failures (including silent data corruptions) under diverse workload access patterns, data patterns, and environmental conditions (temperature, voltage, aging). This foundational understanding will inform future architecture design and contribute to robust, sustainable computing systems that scale effectively with modern and future application demands."
        ]
    },
    {
        topic: "Health-Oriented Systems",
        icon: "heart-pulse",
        description_paragraphs: [
            "The increasing integration of computing systems into healthcare applications necessitates a focus on health-oriented system design. These systems must prioritize reliability, data integrity, and security to ensure patient safety and confidentiality. Our research explores the development of computing architectures that can effectively support health-related workloads. In particular we are interested in agent-based simulations and the bioinformatics pipeline.",
            "Agent-based simulations model complex biological systems by simulating the interactions of individual agents, such as cells or organisms. These simulations require significant computational resources and must be designed to handle large datasets efficiently. Our research aims to optimize system architectures to support these simulations, ensuring they can run effectively at scale.",
            "The bioinformatics pipeline involves processing and analyzing vast amounts of biological data, such as genomic sequences. This process demands high-throughput computing capabilities and robust data management strategies. We investigate system designs that can facilitate efficient data processing while maintaining the integrity and confidentiality of sensitive biological information.",
            "By focusing on health-oriented systems, our research seeks to contribute to advancements in healthcare technology, enabling more effective simulations and analyses that can lead to improved patient outcomes."
        ]
    }
];

const research_vision = "Our research focuses on enabling secure and sustainable scaling with shrinking manufacturing technology node size and increasing computational and memory components in scale-out systems. Our goal is to provide systems with strong confidentiality and data integrity without sacrificing availability and performance at low energy and hardware cost. To this end, we are interested in any related research topics in the fields of Computer Architecture, Hardware Security, and Systems. In our near-term research, we mainly focus on hardware-software co-design for system robustness, data-centric robustness, and building a more detailed understanding of circuit-level failure mechanisms.";

module.exports = {
    research_topics,
    research_vision
};