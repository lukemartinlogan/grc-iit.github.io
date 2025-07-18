import { ProjectId, Publication, PublicationTag } from "../types";

const publications: Publication[] = [
  {
    authors: ["Y. Wu", "X. Lu", "X. Chen", "Y. Han", "X.-H. Sun"],
    title:
      "Concurrency-Aware Cache Miss Cost Prediction with Perceptron Learning",
    venue:
      "The 35th ACM Great Lakes Symposium on VLSI (GLSVLSI 2025), New Orleans, LA, USA, June 30 - July 2, 2025",
    type: "Conference",
    date: "June, 2025",
    tags: ["Cache Management", "Memory System Optimization", "Concurrency"],
    links: {},
  },
  {
    authors: [
      "K. Bateman",
      "N. Rajesh",
      "J. Cernuda",
      "L. Logan",
      "B. Nicolae",
      "F. Cappello",
      "X.-H. Sun",
      "A. Kougkas",
    ],
    title: "DTIO: Data Stack for AI-driven Workflows",
    venue:
      "The 37th International Conference on Scalable Scientific Data Management (SSDBM 2025)",
    type: "Conference",
    date: "June, 2025",
    tags: [],
    links: {},
  },
  {
    authors: [
      "I. Yildirim",
      "H. Devarajan",
      "A. Kougkas",
      "X.-H. Sun",
      "K. Mohror",
    ],
    title:
      "WisIO: Automated I/O Bottleneck Detection with Multi-Perspective Views for HPC Workflows",
    venue: "The 39th ACM International Conference on Supercomputing (ICS 2025)",
    type: "Conference",
    date: "June, 2025",
    tags: [
      "HPC",
      "Workflows",
      "I/O Analysis",
      "I/O Bottleneck Detection",
      "WisIO",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yildirim2025wisio.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yildirim2025wisio.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yildirim2025wisio.txt",
    },
  },
  {
    authors: [
      "J. Ye",
      "J. Cernuda",
      "A. Maurya",
      "X.-H. Sun",
      "A. Kougkas",
      "B. Nicolae",
    ],
    title:
      "Characterizing the Behavior and Impact of KV Caching on Transformer Inferences under Concurrency",
    venue:
      "The 39th IEEE International Parallel & Distributed Processing Symposium (IPDPS 2025)",
    type: "Conference",
    date: "June, 2025",
    tags: ["LLM Inference", "KV Cache Profiling", "KV Cache Access Pattern Analysis"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ye2025unboxkv_io.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/ye2025unboxkv_io.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/ye2025unboxkv_io.txt",
    },
  },
  {
    authors: [
      "L. Yan",
      "X. Lu",
      "S. Xu",
      "X. Chen",
      "X. Zou",
      "Y. Han",
      "X.-H. Sun",
    ],
    title:
      "ProMiner: Enhancing Locality, Parallelism, and Offloading for Graph Mining on Processing-in-Memory Systems",
    venue:
      "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD), 2025",
    type: "Journal",
    date: "May, 2025",
    tags: ["Graph Mining", "Processing-in-Memory", "Hardware Acceleration"],
    links: {},
  },
  {
    authors: ["L. Yan", "X. Lu", "X. Chen", "Y. Han", "X.-H. Sun"],
    title:
      "Pyramid: Accelerating LLM Inference with Cross-Level Processing-in-Memory",
    venue: "IEEE Computer Architecture Letters (CAL), April 2025",
    type: "Journal",
    date: "April, 2025",
    tags: ["LLM Inference", "Processing-in-Memory", "Hardware Acceleration"],
    links: {},
  },
  {
    authors: [
      "S. Yang",
      "S. He",
      "W. Wang",
      "Y. Yin",
      "T. Wu",
      "W. Chen",
      "X. Zhang",
      "X.-H. Sun",
      "D. Feng",
    ],
    title: "GOPIM: GCN-Oriented Pipeline Optimization for PIM Accelerators",
    venue:
      "The IEEE International Symposium on High-Performance Computer Architecture (HPCA 2025)",
    type: "Conference",
    date: "March, 2025",
    tags: [],
    links: {},
  },
  {
    authors: [
      "Z. Pan",
      "X. Li",
      "S. He",
      "X. Zhang",
      "R. Wang",
      "Y. Gao",
      "G. Chen",
      "X.-H. Sun",
    ],
    title:
      "AMBEA: Aggressive Maximal Biclique Enumeration in Large Bipartite Graph Computing",
    venue: "IEEE Transactions on Computers, Vol. 73, No. 12",
    type: "Journal",
    date: "December, 2024",
    tags: [
      "Graph Computing",
      "Bipartite Graph",
      "Maximal Biclique Enumeration",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/pan2024ambea.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/pan2024ambea.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/pan2024ambea.txt",
    },
  },
  {
    authors: [
      "A. Gainaru",
      "G. Eisenhauer",
      "N. Podhorszki",
      "L. Dulac",
      "Q. Gong",
      "A. Kougkas",
      "J. Lofstead",
      "X.-H. Sun",
      "S. Klasky",
    ],
    title:
      "To Derive or Not to Derive: I/O Libraries Take Charge of Derived Quantities Computation",
    venue:
      "IEEE/SBC 36th International Symposium on Computer Architecture and High Performance Computing (SBAC-PAD 2024), Hawaii, USA",
    type: "Conference",
    date: "November, 2024",
    tags: [
      "HPC Analysis",
      "Large-Scale I/O",
      "Derived Variables",
      "Quantities of Interest",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/gainaru2024derive.pdf",
    },
  },
  {
    authors: ["J. Ye", "B. Nicolae", "A. Kougkas", "X.-H. Sun"],
    title:
      "Uncover the Overhead and Resource Usage for Handling KV Cache Overflow in LLM Inference",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'24)",
    type: "Poster",
    date: "November, 2024",
    tags: ["KV Cache", "LLM Inference"],
    links: {
      poster: "http://cs.iit.edu/~scs/assets/files/ye2024kvcache_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/ye2024kvcache_abstract.pdf",
    },
  },
  {
    authors: [
      "J. Cernuda",
      "L. Logan",
      "N. Lewis",
      "S. Byna",
      "X.-H. Sun",
      "A. Kougkas",
    ],
    title:
      "Jarvis: Towards a Shared, User-Friendly, and Reproducible, I/O Infrastructure.",
    venue: "The International Parallel Data Systems Workshop (PDSW'24)",
    type: "Workshop",
    date: "November, 2024",
    tags: [
      "Deployment",
      "HPC",
      "Hardware Abstraction",
      "I/O",
      "Python",
      "Resource Management",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cernuda2024jarvis.pdf",
    },
  },

  {
    authors: [
      "H. Devarajan",
      "L. Pottier",
      "K. Velusamy",
      "H. Zheng",
      "I. Yildirim",
      "O. Kogiou",
      "W. Yu",
      "A. Kougkas",
      "X.-H. Sun",
      "J.-S. Yeom",
      "K. Mohror",
    ],
    title:
      "DFTracer: An Analysis-Friendly Data Flow Tracer for AI-Driven Workflows",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'24)",
    type: "Conference",
    date: "November, 2024",
    tags: ["Deep Learning", "Workflows", "I/O Tracing"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/devarajan2024dftracer.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/devarajan2024dftracer.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/devarajan2024dftracer.txt",
    },
  },
  {
    authors: ["L. Logan", "X.-H. Sun", "A. Kougkas"],
    title:
      "MegaMmap: Blurring the Boundary Between Memory and Storage for Data-Intensive Workloads",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'24)",
    type: "Conference",
    date: "November, 2024",
    tags: [
      "Memory",
      "Storage",
      "Hierarchical Storage",
      "HPC",
      "Operating Systems",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/logan2024megammap.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2024megammap.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/logan2024megammap.txt",
    },
  },
  {
    authors: [
      "Z. Pan",
      "S. He",
      "X. Li",
      "X. Zhang",
      "Y. Yin",
      "R. Wang",
      "L. Shou",
      "M. Song",
      "X.-H. Sun",
      "G. Chen",
    ],
    title:
      "Enumeration of Billions of Maximal Bicliques in Bipartite Graphs without Using GPUs",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'24)",
    type: "Conference",
    date: "November, 2024",
    tags: ["Bipartite Graph", "Maximal Biclique Enumeration"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/pan2024bipartite.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/pan2024bipartite.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/pan2024bipartite.txt",
    },
  },
  {
    authors: [
      "L. Yan",
      "X. Lu",
      "X. Chen",
      "S. Xu",
      "X. Zou",
      "Y. Han",
      "X.-H. Sun",
    ],
    title:
      "AceMiner: Accelerating Graph Pattern Matching using PIM with Optimized Cache System",
    venue:
      "The 2024 IEEE 42nd International Conference on Computer Design (ICCD'24)",
    type: "Conference",
    date: "November, 2024",
    tags: ["Graph Pattern Matching", "Processing-in-Memory", "Cache System"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yan2024aceminer.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/yan2024aceminer_slides.pdf",
    },
  },
  {
    authors: [
      "M. Tang",
      "J. Cernuda",
      "J. Ye",
      "L. Guo",
      "N. Tallent",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title:
      "DaYu: Optimizing Distributed Scientific Workflows by Decoding Dataflow Semantics and Dynamics",
    venue:
      "2024 IEEE International Conference on Cluster Computing (CLUSTER'24)",
    type: "Conference",
    date: "September, 2024",
    tags: [
      "Data Analytics",
      "Modeling",
      "Performance Measurement",
      "Tools",
      "Workflow Optimization",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/tang2024dayu.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/tang2024dayu.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/tang2024dayu.txt",
    },
  },
  {
    authors: [
      "Z. Dang",
      "S. He",
      "X. Zhang",
      "P. Hong",
      "Z. Li",
      "X. Chen",
      "H. Song",
      "X.-H. Sun",
      "G. Chen",
    ],
    title:
      "PMAlloc: A Holistic Approach to Improving Persistent Memory Allocation",
    venue: "ACM Transactions on Computer Systems (TOCS'24)",
    type: "Journal",
    date: "September, 2024",
    tags: ["Persistent Memory", "Memory Management"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/dang2024pmalloc.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/dang2024pmalloc.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/dang2024pmalloc.txt",
    },
  },
  {
    authors: [
      "T. Wu",
      "S. He",
      "J. Zhu",
      "W. Chen",
      "S. Yang",
      "P. Chen",
      "Y. Yin",
      "X. Zhang",
      "X.-H. Sun",
      "G. Chen",
    ],
    title:
      "AUTOHET: An Automated Heterogeneous ReRAM-Based Accelerator for DNN Inference",
    venue: "The 53th International Conference on Parallel Processing (ICPP'24)",
    type: "Conference",
    date: "August, 2024",
    tags: ["Heterogeneous Systems", "Emerging Architectures"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/wu2024autohet.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wu2024autohet.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wu2024autohet.txt",
    },
  },
  {
    authors: ["J. Cernuda", "J. Ye", "A. Kougkas", "X.-H. Sun"],
    title:
      "HStream: A hierarchical data streaming engine for high-throughput scientific applications",
    venue: "The 53th International Conference on Parallel Processing (ICPP'24)",
    type: "Conference",
    date: "August, 2024",
    tags: [
      "Data Streaming",
      "HPC",
      "Hierarchical Storage",
      "Elastic System",
      "In-Transit Computing",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cernuda2024hstream.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/cernuda2024hstream.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/cernuda2024hstream.txt",
    },
  },
  {
    authors: [
      "J. Ye",
      "J. Cernuda",
      "N. Rajesh",
      "K. Bateman",
      "O. Yildiz",
      "T. Peterka",
      "A. Nigmetov",
      "D. Morozov",
      "A. Kougkas",
      "X.-H. Sun",
      "B. Nicolae",
    ],
    title:
      "Viper: A High-Performance I/O Framework for Transparently Updating, Storing, and Transferring Deep Neural Network Models",
    venue: "The 53th International Conference on Parallel Processing (ICPP'24)",
    type: "Conference",
    date: "August, 2024",
    tags: [
      "AI Workflows",
      "Adaptive AI Model Checkpointing",
      "Coupled Training and Inferences",
      "Inferences During Partial Training",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ye2024viper.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/ye2024viper.pptx",
      bibtex: "http://cs.iit.edu/~scs/assets/files/ye2024viper.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/ye2024viper.txt",
    },
  },
  {
    authors: [
      "M. Zou",
      "M. Zhang",
      "R. Wang",
      "X.-H. Sun",
      "X. Ye",
      "D. Fan",
      "Z. Tang",
    ],
    title:
      "Skyway: Accelerate Graph Applications with a Dual-Path Architecture and Fine-Grained Data Management",
    venue: "Journal of Computer Science and Technology (Volume 39)",
    type: "Journal",
    date: "July, 2024",
    tags: ["Graph Applications", "Computer Architecture", "Memory Hierarchy"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/zou2024skyway.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/zou2023skyway_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zou2023skyway.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zou2023skyway.txt",
    },
  },
  {
    authors: ["L. Logan", "J. Lofstead", "A. Kougkas", "X.-H. Sun"],
    title:
      "An Evaluation of DAOS for Simulation and Deep Learning HPC Workloads",
    venue: "SIGOPS Operating Systems Review (OSR'24)",
    type: "Journal",
    date: "June, 2024",
    tags: [
      "Distributed Computing",
      "Distributed Storage",
      "Flash Memory",
      "Machine Learning",
      "Parallel Computing",
      "Phase Change Memory",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/logan2023daos.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2024daos.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/logan2024daos.txt",
    },
  },
  {
    authors: [
      "J. Cernuda",
      "L. Logan",
      "A. Gainaru",
      "J. Lofstead",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title:
      "Hades: A Context-Aware Active Storage Framework for Accelerating Large-Scale Data Analysis",
    venue:
      "The 24th IEEE/ACM international Symposium on Cluster, Cloud and Internet Computing (CCGRID 2024)",
    type: "Conference",
    date: "May, 2024",
    tags: [
      "Active Storage",
      "Hierarchical Storage",
      "Context Awareness",
      "Metadata Management",
      "Data Operator",
      "In-Transit Computing",
      "Coeus",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cernuda2024hades.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/cernuda2024hades.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/cernuda2024hades.txt",
    },
  },
  {
    authors: [
      "N. Rajesh",
      "K. Bateman",
      "S. Byna",
      "J. L. Bez",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title: "TunIO: An AI-powered Framework for Optimizing HPC I/O",
    venue:
      "The 38th IEEE International Parallel & Distributed Processing Symposium (IPDPS 2024)",
    type: "Conference",
    date: "May, 2024",
    tags: ["AI for I/O", "I/O Stack Tuning"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/rajesh2024tunio.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/rajesh2024tunio.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/rajesh2024tunio.txt",
    },
  },
  {
    authors: ["X. Lu", "B. Long", "X. Chen", "Y. Han", "X.-H. Sun"],
    title:
      "ACES: Accelerating Sparse Matrix Multiplication with Adaptive Execution Flow and Concurrency-Aware Cache Optimizations",
    venue:
      "The 29th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS-29)",
    type: "Conference",
    date: "April, 2024",
    tags: [
      "SpMM",
      "Accelerator",
      "Parallelism",
      "Concurrency",
      "Synchronization",
      "Scalability",
      "UniMCC",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/lu2024aces.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/lu2024aces_slides.pdf",
      poster: "http://cs.iit.edu/~scs/assets/files/lu2024aces_poster.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lu2024aces.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lu2024aces.txt",
    },
  },
  {
    authors: ["X. Lu", "H. Najafi", "J. Liu", "X.-H. Sun"],
    title:
      "CHROME: Concurrency-Aware Holistic Cache Management Framework with Online Reinforcement Learning",
    venue:
      "The 30th IEEE International Symposium on High-Performance Computer Architecture (HPCA 2024), Edinburgh, Scotland",
    type: "Conference",
    date: "March, 2024",
    tags: [
      "Memory Architecture",
      "Cache Management",
      "Optimization of Memory Architectures",
      "UniMCC",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/lu2024chrome.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/lu2024chrome_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lu2024chrome.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lu2024chrome.txt",
    },
  },
  {
    authors: [
      "I. Yildirim",
      "H. Devarajan",
      "A. Kougkas",
      "X.-H. Sun",
      "K. Mohror",
    ],
    title:
      "IOMax: Maximizing Out-of-Core I/O Analysis Performance on HPC Systems",
    venue: "The International Parallel Data Systems Workshop (PDSW'23)",
    type: "Workshop",
    date: "November, 2023",
    tags: ["I/O Analysis", "Out-of-Core Analysis", "Data Drilling", "WisIO"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yildirim2023iomax.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yildirim2023iomax.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yildirim2023iomax.txt",
    },
  },
  {
    authors: [
      "I. Yildirim",
      "H. Devarajan",
      "A. Kougkas",
      "X.-H. Sun",
      "K. Mohror",
    ],
    title:
      "Exploring the Impacts of Multiple I/O Metrics in Identifying I/O Bottlenecks",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'23), November 12-17, 2023",
    type: "Poster",
    date: "November, 2023",
    tags: ["I/O Analysis", "I/O Metrics", "I/O Bottleneck Detection", "WisIO"],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/yildirim2023mmetrics_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/yildirim2023mmetrics_abstract.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yildirim2023mmetrics.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yildirim2023mmetrics.txt",
    },
  },

  {
    authors: [
      "H. Lee",
      "L. Guo",
      "M. Tang",
      "J. Firoz",
      "N. Tallent",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title: "Data Lifecycles: Optimizing Workflow Task & Data Coordination",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'23), November 12-17, 2023",
    type: "Conference",
    date: "November, 2023",
    tags: ["Data Analytics", "Performance Measurement", "Modeling", "Tools"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/lee2023data.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lee2023data.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lee2023data.txt",
    },
  },
  {
    authors: ["L. Logan", "J. Lofstead", "A. Kougkas", "X.-H. Sun"],
    title:
      "An Evaluation of DAOS for Simulation and Deep Learning HPC Workloads",
    venue:
      "The 3rd Workshop on Challenges and Opportunities of Efficient and Performant Storage Systems (CHEOPS'23)",
    type: "Workshop",
    date: "May, 2023",
    tags: [
      "Distributed Computing",
      "Distributed Storage",
      "Flash Memory",
      "Machine Learning",
      "Parallel Computing",
      "Phase Change Memory",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/logan2023daos.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2023daos.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/logan2023daos.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "X. Lu"],
    title: "The Memory-Bounded Speedup Model and Its Impacts in Computing",
    venue:
      "Journal of Computer Science and Technology (JCST'23), vol. 38, no. 1, February 2023",
    type: "Journal",
    date: "February, 2023",
    tags: [
      "Memory-Bounded Speedup",
      "Scalable Computing",
      "Memory-Wall",
      "Data-Centric Design",
      "Optimization of Memory Architectures",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/sun2023memory.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sun2023memory.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/sun2023memory.txt",
    },
  },
  {
    authors: [
      "W. Chen",
      "S. He",
      "Y. Xu",
      "X. Zhang",
      "S. Yang",
      "S. Hu",
      "X.-H. Sun",
      "G. Chen",
    ],
    title:
      "iCACHE: An Importance-Sampling-Informed Cache for Accelerating I/O-Bound DNN Model Training",
    venue:
      "The 29th IEEE International Symposium on High-Performance Computer Architecture (HPCA-29), Montreal, QC, Canada, February 25 - March 01, 2023",
    type: "Conference",
    date: "February, 2023",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/chen2023icache.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/chen2023icache-slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2023icache.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2023icache.txt",
    },
  },
  {
    authors: ["X. Lu", "R. Wang", "X.-H. Sun"],
    title:
      "CARE: A Concurrency-Aware Enhanced Lightweight Cache Management Framework",
    venue:
      "The 29th IEEE International Symposium on High-Performance Computer Architecture (HPCA-29), Montreal, QC, Canada, February 25 - March 01, 2023",
    type: "Conference",
    date: "February, 2023",
    tags: ["Optimization of Memory Architectures"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/lu2023care.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/lu2023care-slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lu2023care.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lu2023care.txt",
    },
  },
  {
    authors: [
      "K. Bateman",
      "N. Rajesh",
      "J. Cernuda",
      "L. Logan",
      "J. Ye",
      "S. Herbein",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title:
      "LuxIO: Intelligent Resource Provisioning and Auto-Configuration for Storage Services",
    venue:
      "The 29th edition of the IEEE International Conference on High Performance Computing, Data, and Analytics (HiPC'22)",
    type: "Conference",
    date: "December, 2022",
    tags: [
      "Resource Provisioning",
      "I/O Behavior",
      "Storage Auto-Tuning",
      "ChronoLog",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/bateman2022luxio.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/bateman2022luxio.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/bateman2022luxio.txt",
    },
  },
  {
    authors: [
      "P. Chen",
      "S. He",
      "X. Zhang",
      "S. Chen",
      "P. Hong",
      "Y. Yin",
      "X.-H. Sun",
    ],
    title: "Accelerating Tensor Swapping in GPUs with Self-Tuning Compression",
    venue: "Transactions on Parallel and Distributed Systems (TPDS'22)",
    type: "Journal",
    date: "December, 2022",
    tags: ["DNN", "GPU", "Tensor", "Swapping", "Compression"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/chen2022accelerating.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2022accelerating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2022accelerating.txt",
    },
  },
  {
    authors: ["H. Najafi", "X. Lu", "J. Liu", "X.-H. Sun"],
    title: "A Generalized Model For Modern Hierarchical Memory System",
    venue:
      "The 2022 Winter Simulation Conference (WSC), Singapore, December 11-14, 2022",
    type: "Conference",
    date: "December, 2022",
    tags: [
      "Hierarchical Memory System",
      "C-AMAT",
      "Optimization of Memory Architectures",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/najafi2022generalized.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/najafi2022generalized.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/najafi2022generalized.txt",
    },
  },
  {
    authors: [
      "L. Logan",
      "J. Cernuda",
      "J. Lofstead",
      "X.-H. Sun",
      "A. Kougkas",
    ],
    title:
      "LabStor: A Modular and Extensible Platform for Developing High-Performance, Customized I/O Stacks in Userspace",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'22)",
    type: "Conference",
    date: "November, 2022",
    tags: [
      "Clouds and Distributed Computing",
      "Programming Frameworks",
      "System Software",
      "ChronoLog",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/logan2022labstor.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/logan2022labstor_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2022labstor.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/logan2022labstor.txt",
    },
  },
  {
    authors: [
      "I. Yildirim",
      "H. Devarajan",
      "A. Kougkas",
      "X.-H. Sun",
      "K. Mohror",
    ],
    title:
      "A Multifaceted Approach to Automated I/O Bottleneck Detection for HPC Workloads",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'22)",
    type: "Poster",
    date: "November, 2022",
    tags: ["I/O Characterization", "I/O Bottleneck Detection", "WisIO"],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/yildirim2022iobottlenecks_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/yildirim2022iobottlenecks_abstract.pdf",
      bibtex:
        "http://cs.iit.edu/~scs/assets/files/yildirim2022iobottlenecks_poster.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/yildirim2022iobottlenecks_poster.txt",
    },
  },
  {
    authors: [
      "M. Zou",
      "M. Zhang",
      "R. Wang",
      "X.-H. Sun",
      "X. Ye",
      "D. Fan",
      "Z. Tang",
    ],
    title:
      "Accelerating Graph Processing with Lightweight Learning-Based Data Reordering",
    venue: "The IEEE Computer Architecture Letters (CAL'2022)",
    type: "Journal",
    date: "May, 2022",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/zou2022accelerating.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zou2022accelerating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zou2022accelerating.txt",
    },
  },
  {
    authors: [
      "H. Devarajan",
      "A. Kougkas",
      "H. Zheng",
      "V. Vishwanath",
      "X.-H. Sun",
    ],
    title:
      "Stimulus: Accelerate Data Management for Scientific AI applications in HPC",
    venue:
      "The 22nd IEEE/ACM International Symposium on Cluster, Cloud and Internet Computing (CCGRID'22), May 16-19, 2022",
    type: "Conference",
    date: "May, 2022",
    tags: ["HDF5", "TensorFlow", "Decoupled I/O", "I/O Acceleration", "Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/stimulus2022.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/stimulus2022.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/stimulus2022.txt",
    },
  },
  {
    authors: [
      "Z. Dang",
      "S. He",
      "P. Hong",
      "Z. Li",
      "X. Zhang",
      "X.-H. Sun",
      "G. Chen",
    ],
    title:
      "NVAlloc: Rethinking Heap Metadata Management in Persistent Memory Allocators",
    venue:
      "The 2022 Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS'22), Feb 28 - Mar 4, 2022",
    type: "Conference",
    date: "February, 2022",
    tags: [],
    links: {
      citation: "http://cs.iit.edu/~scs/assets/files/dang2021nvalloc.txt",
    },
  },
  {
    authors: [
      "N. Rajesh",
      "Q. Koziol",
      "S. Byna",
      "H. Tang",
      "J. L. Bez",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title:
      "Feature Reduction of Darshan Counters Using Evolutionary Algorithms",
    venue:
      "The 2021 International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'21), November 14–19, 2021",
    type: "Poster",
    date: "November, 2021",
    tags: ["Feature Reduction", "Evolutionary Algorithms", "Darshan"],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/rajesh2021features_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/rajesh2021features_abstract.pdf",
      bibtex:
        "http://cs.iit.edu/~scs/assets/files/rajesh2021features_poster.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/rajesh2021features_poster.txt",
    },
  },
  {
    authors: [
      "L. Logan",
      "J. Lofstead",
      "S. Levy",
      "P. Widener",
      "X.-H. Sun",
      "A. Kougkas",
    ],
    title: "Utilizing Persistent Memory in Parallel I/O Libraries",
    venue:
      "The 2021 International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'21), November 14–19, 2021",
    type: "Poster",
    date: "November, 2021",
    tags: [
      "Persistent Memory",
      "Libraries",
      "Memory Management",
      "Memory Mapped I/O",
    ],
    links: {
      poster: "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy_abstract.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy_poster.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy_poster.txt",
    },
  },
  {
    authors: ["I. Yildirim", "M. Tang", "A. Kougkas", "X.-H. Sun"],
    title: "Performance Analysis of Containerized OrangeFS in HPC Environment",
    venue:
      "The 2021 International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'21), November 14–19, 2021",
    type: "Poster",
    date: "November, 2021",
    tags: ["HPC", "Singularity", "Containers", "Benchmarking"],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/yildirim2021containers_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/yildirim2021containers_abstract.pdf",
      bibtex:
        "http://cs.iit.edu/~scs/assets/files/yildirim2021containers_poster.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/yildirim2021containers_poster.txt",
    },
  },
  {
    authors: ["J. Ye", "A. Kougkas", "X.-H. Sun"],
    title: "HDF5 VOL Connector to Apache Arrow",
    venue:
      "The 2021 International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'21), November 14–19, 2021",
    type: "Poster",
    date: "November, 2021",
    tags: ["HDF5", "Apache Arrow", "Column store"],
    links: {
      poster: "http://cs.iit.edu/~scs/assets/files/ye2021hdf5vol_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/ye2021hdf5vol_abstract.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/ye2021hdf5vol_poster.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/ye2021hdf5vol_poster.txt",
    },
  },
  {
    authors: ["X. Lu", "R. Wang", "X.-H. Sun"],
    title:
      "Premier: A Concurrency-Aware Pseudo-Partitioning Framework for Shared Last-Level Cache",
    venue:
      "The 2021 IEEE 39th International Conference on Computer Design (ICCD'21), October 24 - 27, 2021",
    type: "Conference",
    date: "October, 2021",
    tags: ["Optimization of Memory Architectures"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/lu2021premier.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lu2021premier.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lu2021premier.txt",
    },
  },
  {
    authors: [
      "L. Logan",
      "J. Lofstead",
      "S. Levy",
      "P. Widener",
      "X.-H. Sun",
      "A. Kougkas",
    ],
    title:
      "pMEMCPY: a simple, lightweight, and portable I/O library for storing data in persistent memory",
    venue:
      "The 1st Workshop on Re-envisioning Extreme-Scale I/O for Emerging Hybrid HPC Workloads (REX-IO'21), in conjunction with the 2021 IEEE International Conference on Cluster Computing (CLUSTER'21), September 7-10, 2021",
    type: "Workshop",
    date: "September, 2021",
    tags: [
      "Persistent Memory",
      "Libraries",
      "Memory Management",
      "Memory Mapped I/O",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/logan2021pmemcpy.txt",
    },
  },
  {
    authors: [
      "P. Chen",
      "S. He",
      "X. Zhang",
      "S. Chen",
      "P. Hong",
      "Y. Yin",
      "X.-H. Sun",
      "G. Chen",
    ],
    title:
      "CSWAP: A Self-Tuning Compression Framework for Accelerating Tensor Swapping in GPUs",
    venue:
      "The 2021 IEEE International Conference on Cluster Computing (CLUSTER'21), September 7-10, 2021",
    type: "Conference",
    date: "September, 2021",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/chen2021CSWAP.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2021CSWAP.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2021CSWAP.txt",
    },
  },
  {
    authors: [
      "J. Cernuda",
      "H. Devarajan",
      "L. Logan",
      "K. Bateman",
      "N. Rajesh",
      "J. Ye",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title: "HFlow: A Dynamic and Elastic Multi-Layered Data Forwarder",
    venue:
      "The 2021 IEEE International Conference on Cluster Computing (CLUSTER'21), September 7-10, 2021",
    type: "Conference",
    date: "September, 2021",
    tags: ["Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cernuda2021HFlow.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/cernuda2021HFlow.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/cernuda2021HFlow.txt",
    },
  },
  {
    authors: [
      "L. Yan",
      "M. Zhang",
      "R. Wang",
      "X. Chen",
      "X. Zou",
      "X. Lu",
      "Y. Han",
      "X.-H. Sun",
    ],
    title:
      "CoPIM: A Concurrency-aware PIM Workload Offloading Architecture for Graph Applications",
    venue:
      "The 2021 ACM/IEEE International Symposium on Low Power Electronics and Design (ISLPED'21), July 26, 2021",
    type: "Conference",
    date: "July, 2021",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yan2021COPIM.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yan2021COPIM.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yan2021COPIM.txt",
    },
  },
  {
    authors: ["S. Yang", "W. Chen", "X. Zhang", "S. He", "Y. Yin", "X.-H. Sun"],
    title:
      "AUTO-PRUNE: Automated DNN Pruning and Mapping for ReRAM-Based Accelerator",
    venue:
      "The ACM International Conference on Supercomputing (ICS'21), June 14-17, 2021",
    type: "Conference",
    date: "June, 2021",
    tags: ["ReRAM-based Accelerator", "Pruning", "Reinforcement Learning"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yang2021autoprune.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2021autoprune.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2021autoprune.txt",
    },
  },
  {
    authors: [
      "N. Rajesh",
      "H. Devarajan",
      "J. Cernuda",
      "K. Bateman",
      "L. Logan",
      "J. Ye",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title: "Apollo: An ML-assisted Real-Time Storage Resource Observer",
    venue:
      "The 30th ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC'21), June 21-25, 2021",
    type: "Conference",
    date: "June, 2021",
    tags: ["HPC", "Machine Learning", "Resource Monitoring", "Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/rajesh2021apollo.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/rajesh2021apollo.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/rajesh2021apollo.txt",
    },
  },
  {
    authors: [
      "H. Devarajan",
      "H. Zheng",
      "A. Kougkas",
      "X.-H. Sun",
      "V. Vishwanath",
    ],
    title:
      "DLIO: A Data-Centric Benchmark for Scientific Deep Learning Applications",
    venue:
      "The 2021 IEEE/ACM International Symposium in Cluster, Cloud, and Internet Computing (CCGrid'21), May 17 - 20, 2021 Best paper award",
    type: "Conference",
    date: "May, 2021",
    tags: [
      "Deep Learning",
      "Scientific Applications",
      "Representative",
      "Benchmark",
      "Data-Intensive",
      "I/O",
      "Characterization",
      "TensorFlow",
      "Data Pipeline",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/devarajan2021dlio.pdf",
      video: "https://youtu.be/_rRhQBaHVs8",
      bibtex: "http://cs.iit.edu/~scs/assets/files/devarajan2021dlio.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/devarajan2021dlio.txt",
    },
  },
  {
    authors: ["Y. Liu", "X.-H. Sun", "Y. Wang", "Y. Bao"],
    title:
      "HCDA: From Computational Thinking to a Generalized Thinking Paradigm",
    venue:
      "Communications of the ACM (CACM'21), Vol. 64, No. 5, pp. 66-75, May 2021",
    type: "Journal",
    date: "May, 2021",
    tags: [
      "Hardware",
      "Emerging Technologies",
      "Emerging Architectures",
      "Computing Education",
      "History of Computing",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/hcda.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/hcda.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/hcda.txt",
    },
  },
  {
    authors: ["J. Liu", "P. Espina", "X.-H. Sun"],
    title: "A Study on Modeling and Optimization of Memory Systems",
    venue:
      "Journal of Computer Science and Technology (JCST'21), vol. 35, no. 1, January 2021",
    type: "Journal",
    date: "January, 2021",
    tags: [
      "Performance Modeling",
      "Performance Optimization",
      "Memory Architecture",
      "Memory Hierarchy",
      "Concurrent Average Memory Access Time",
      "Optimization of Memory Architectures",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/liu2021study.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2021study.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2021study.txt",
    },
  },
  {
    authors: ["Z. Ye", "Y. Wang", "S. He", "C.-Z. Xu", "X.-H. Sun"],
    title:
      "Sova: A Software-Defined Autonomic Framework for Virtual Network Allocations",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS'21) Vol: 32, Issue: 1, pp: 116-130, January 1, 2021",
    type: "Journal",
    date: "January, 2021",
    tags: [
      "Resource Management",
      "Bandwidth",
      "Data Centers",
      "Servers",
      "Virtualization",
      "Time Factors",
      "Quality of Service",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ye2020sova.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sova.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/Sova.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "X.-H. Sun"],
    title:
      "HReplica: A Dynamic Data Replication Engine with Adaptive Compression for Multi-Tiered Storage",
    venue:
      "The 2020 IEEE International Conference on Big Data (Big Data'20), December 10-13, 2020",
    type: "Conference",
    date: "December, 2020",
    tags: [
      "Data Replication",
      "Dynamic",
      "Selection Algorithm",
      "Multi-Tiered",
      "Data Compression",
      "Intelligent Selection",
      "Dynamic Programming",
      "Cloud Application",
      "Scientific Applications",
      "Big Data",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/devarajan2020HReplica.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/devarajan2020HReplica.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/devarajan2020HReplica.txt",
    },
  },
  {
    authors: ["L. Logan", "A. Kougkas", "X.-H. Sun"],
    title: "Quantifying the Overheads of the Modern Linux I/O Stack",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage and Analysis (SC'20)",
    type: "Poster",
    date: "November, 2020",
    tags: ["I/O Bottleneck", "Filesystems", "Linux"],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/logan2020quantifying-poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/logan2020quantifying-abstract.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/logan2020quantifying.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/logan2020quantifying.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun"],
    title: "Bridging Storage Semantics using Data Labels and Asynchronous I/O",
    venue:
      "ACM Transactions on Storage (TOS'20), Vol 16, No 4, Article 22, Nov. 2020",
    type: "Journal",
    date: "November, 2020",
    tags: [
      "Label-Based I/O",
      "Storage Bridging",
      "Heterogeneous I/O",
      "Datalabels",
      "Task-Based I/O",
      "Exascale I/O",
      "Energy-Aware I/O",
      "Elastic Storage",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/kougkas2020bridging.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2020bridging.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2020bridging.txt",
    },
  },
  {
    authors: ["N. Rajesh", "G. Heber", "A. Kougkas", "X.-H. Sun"],
    title: "Characterizing and Approximating I/O Behavior of HDF5 Applications",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage and Analysis (SC'20)",
    type: "Poster",
    date: "November, 2020",
    tags: [],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/rajesh2020characterizing-poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/rajesh2020characterizing-abstract.pdf",
      bibtex:
        "http://cs.iit.edu/~scs/assets/files/rajesh2020characterizing.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/rajesh2020characterizing.txt",
    },
  },
  {
    authors: ["H. Devarajan", "H. Zheng", "X.-H. Sun", "V. Vishwanath"],
    title:
      "Understanding I/O behavior of Scientific Deep Learning Applications in HPC systems",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage and Analysis (SC'20)",
    type: "Poster",
    date: "November, 2020",
    tags: [],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/devarajan2020understanding-poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/devarajan2020understanding-abstract.pdf",
      bibtex:
        "http://cs.iit.edu/~scs/assets/files/devarajan2020understanding.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/devarajan2020understanding.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "X.-H. Sun"],
    title: "A Dynamic Multi-Tiered Storage System for Extreme Scale Computing",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage and Analysis (SC'20)",
    type: "Poster",
    date: "November, 2020",
    tags: ["Hermes"],
    links: {
      poster:
        "http://cs.iit.edu/~scs/assets/files/devarajan2020dynamic-poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/devarajan2020dynamic-abstract.pdf",
      slides:
        "http://cs.iit.edu/~scs/assets/files/devarajan2020dynamic-slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/devarajan2020dynamic.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/devarajan2020dynamic.txt",
    },
  },
  {
    authors: ["X. Lu", "R. Wang", "X.-H. Sun"],
    title:
      "APAC: An Accurate and Adaptive Prefetch Framework with Concurrent Memory Access Analysis",
    venue:
      "The 38th IEEE International Conference on Computer Design (ICCD'20), October 18 - 21, 2020",
    type: "Conference",
    date: "October, 2020",
    tags: [
      "Prefetch",
      "Memory Performance Model",
      "Concurrent Memory Access",
      "Optimization of Memory Architectures",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/lu2020apac.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lu2020apac.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lu2020apac.txt",
    },
  },
  {
    authors: ["N. Zhang", "B. Toonen", "X.-H. Sun", "B. Allcock"],
    title:
      "Performance Modeling and Evaluation of a Production Disaggregated Memory System",
    venue:
      "International Symposium on Memory Systems (MEMSYS'20), Sept. 28 - Oct. 2, 2020",
    type: "Conference",
    date: "October, 2020",
    tags: [
      "Performance Modeling",
      "Disaggregated Memory",
      "C-AMAT",
      "Performance Evaluation",
      "Utilization",
      "RAN",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ning2020dismemsys.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/dismemsys.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/dismemsys.txt",
    },
  },
  {
    authors: [
      "A. Kougkas",
      "H. Devarajan",
      "K. Bateman",
      "J. Cernuda",
      "N. Rajesh",
      "X.-H. Sun",
    ],
    title:
      "ChronoLog: A Distributed Shared Tiered Log Store with Time-based Data Ordering",
    venue:
      "The 36th International Conference on Massive Storage Systems and Technology (MSST'20), Oct. 29-30, 2020",
    type: "Conference",
    date: "October, 2020",
    tags: ["Distributed Log", "Shared Log", "Tiered Storage", "ChronoLog"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/kougkas2020chronolog.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chronolog_temp.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chronolog_temp.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "K. Bateman", "X.-H. Sun"],
    title: "HCL: Distributing Parallel Data Structures in Extreme Scales",
    venue:
      "IEEE International Conference on Cluster Computing (CLUSTER'20), Sept. 14-17, 2020",
    type: "Conference",
    date: "September, 2020",
    tags: [
      "Distributed Data Structure",
      "RPC over RDMA",
      "Hybrid Data Access Model",
      "HPC Data Containers",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/devarajan2020hcl.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/hcl-slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/hcl.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/hcl.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "X.-H. Sun"],
    title:
      "HFetch: Hierarchical Data Prefetching for Scientific Workflows in Multi-Tiered Storage Environments",
    venue:
      "IEEE International Parallel and Distributed Processing Symposium (IPDPS'20), May 18-22, 2020",
    type: "Conference",
    date: "May, 2020",
    tags: [
      "Hierarchical",
      "Multi-Tiered",
      "Data Prefetching",
      "Data-Fetching",
      "Dynamic Choice",
      "Data-Centric",
      "Library",
      "Middleware",
      "Engine",
      "Data-Aware",
      "Workflow-Aware",
      "Server-Push",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/hfetch_conference_proceedings.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/hfetch_ipdps.pdf",
      bibtex:
        "http://www.cs.iit.edu/~scs/http://cs.iit.edu/~scs/assets/files/HFetch.bib",
      citation:
        "http://www.cs.iit.edu/~scs/http://cs.iit.edu/~scs/assets/files/HFetch.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "L. Logan", "X.-H. Sun"],
    title:
      "HCompress: Hierarchical Data Compression for Multi-Tiered Storage Environments",
    venue:
      "IEEE International Parallel and Distributed Processing Symposium (IPDPS'20), May 18-22, 2020",
    type: "Conference",
    date: "May, 2020",
    tags: [
      "Hierarchical",
      "Multi-Tiered",
      "Data Compression",
      "Data-Reduction",
      "Dynamic Choice",
      "Workflow Priorities",
      "Library",
      "Middleware",
      "Engine",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/hcompress.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/hcompress_ipdps.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/hcompress2020.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/hcompress2020.txt",
    },
  },
  {
    authors: [
      "S. He",
      "Z. Li",
      "J. Zhou",
      "Y. Yin",
      "X. Xu",
      "Y. Chen",
      "X.-H. Sun",
    ],
    title:
      "A Holistic Heterogeneity-Aware Data Placement Scheme in Hybrid Parallel I/O Systems",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS'20), vol 31. no 4. pp 830-842",
    type: "Journal",
    date: "April, 2020",
    tags: [
      "Parallel I/O",
      "Parallel File System (PFS)",
      "Hybrid Parallel File System",
      "Data Placement",
      "Solid State Drive",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/he2019holicTPDs.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2019holicTPDS.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2019holicTPDS.txt",
    },
  },
  {
    authors: ["S. He", "Y. Yin", "X.-H. Sun", "X. Zhang", "Z. Li"],
    title:
      "Optimizing Parallel I/O Accesses through Pattern-Directed and Layout-Aware Replication",
    venue: "IEEE Transactions on Computers (TC'20), vol 69. no 2. pp 212-225",
    type: "Journal",
    date: "February, 2020",
    tags: [
      "Parallel I/O",
      "I/O Optimization",
      "Data Replication",
      "Data Reorganization",
      "Data Access Pattern",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Opti_parallel_io.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2019opmtiTC.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2019opmtiTC.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun"],
    title: "I/O Acceleration via Multi-Tiered Data Buffering and Prefetching",
    venue:
      "Journal of Computer Science and Technology (JCST'20), vol 35. no 1. pp 92-120",
    type: "Journal",
    date: "January, 2020",
    tags: [
      "I/O Buffering",
      "Heterogeneous Buffering",
      "Layered Buffering",
      "Deep Memory Hierarchy",
      "Burst Buffers",
      "Hierarchical Data Prefetching",
      "Data-Centric Architecture",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/IOaccel.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/IOaccel.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/IOaccel.txt",
    },
  },
  {
    authors: ["C. Li", "M. Zhang", "Z. Xu", "X.-H. Sun"],
    title:
      "Self-adaptive Address Mapping Mechanism for Access Pattern Awareness on DRAM",
    venue:
      "17th IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA), 2019. pp. 61-70",
    type: "Conference",
    date: "December, 2019",
    tags: [
      "DRAM",
      "Locality",
      "MLP",
      "Access Pattern",
      "Data Layout",
      "Matrix Multiplication",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ISPA2019-ChundianLi.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/chundianli-slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/li2019selfadISPA.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/li2019selfadISPA.txt",
    },
  },
  {
    authors: ["K. Feng", "H. Devarajan", "A. Kougkas", "X.-H. Sun"],
    title:
      "NIOBE: An Intelligent I/O Bridging Engine for Complex and Distributed Workflows",
    venue:
      "The 7th IEEE International Conference on Big Data, 2019. pp. 493-502",
    type: "Conference",
    date: "December, 2019",
    tags: [
      "Data Integration",
      "Integrated Workflow",
      "Data Aggregation",
      "KVS",
      "Parallel File System (PFS)",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/NIOBE_PDF_A.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kun2019NIOBE.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kun2019NIOBE.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "X.-H. Sun"],
    title:
      "HFetch: Hierarchical Data Prefetching in Multi-Tiered Storage Environments",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage and Analysis (SC'19) Best Poster Nominee, Ph.D Forum",
    type: "Poster",
    date: "November, 2019",
    tags: [
      "Hierarchical",
      "Multi-Tiered",
      "Data Prefetching",
      "Server-Centric",
      "Data-Centric",
      "File Scoring",
      "Data Scoring",
      "Workflow-Aware",
      "Lightweight",
      "Server-Side",
      "Hermes",
    ],
    links: {
      poster: "http://cs.iit.edu/~scs/assets/files/hetch_poster.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/hfetch_extended_abstract.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/hetch_ppt.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/hfetchposter2019.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/hfetchposter2019.txt",
    },
  },
  {
    authors: [
      "J. Cernuda",
      "H. Trivino",
      "H. Devarajan",
      "A. Kougkas",
      "X.-H. Sun",
    ],
    title: "Efficient Data Eviction across Multiple Tiers of Storage",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage and Analysis (SC'19)",
    type: "Poster",
    date: "November, 2019",
    tags: [],
    links: {
      poster: "http://cs.iit.edu/~scs/assets/files/cernuda2019eviction.pdf",
      "extended abstract":
        "http://cs.iit.edu/~scs/assets/files/cernuda2019eviction_abstract.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/cernuda2019eviction.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/cernuda2019eviction.txt",
    },
  },
  {
    authors: ["Y. Liu", "X.-H. Sun"],
    title:
      "LPM: A Systematic Methodology for Concurrent Data Access Pattern Optimization from a Matching Perspective",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2019. vol 30. no 11. pp.2478-2493.",
    type: "Journal",
    date: "November, 2019",
    tags: [
      "Memory-Wall",
      "Memory Stall Time",
      "Efficiency",
      "Performance Optimization",
      "Layered Performance Matching (LPM)",
      "Memory Concurrency",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/liu2019lpm.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/isc-memory.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2019lpmJ.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2019lpmJ.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "J. Lofstead", "X.-H. Sun"],
    title: "LABIOS: A Distributed Label-Based I/O System",
    venue:
      "The 28th International Symposium on High-Performance Parallel and Distributed Computing (HPDC'19), Phoenix, USA 2019. pp. 13-24. Karsten Schwan Best Paper Award",
    type: "Conference",
    date: "June, 2019",
    tags: [
      "Label-Based I/O",
      "Storage Bridging",
      "Heterogeneous I/O",
      "Datalabels",
      "Task-Based I/O",
      "Exascale I/O",
      "Energy-Aware I/O",
      "Elastic Storage",
      "Hermes",
    ],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/kougkas2019labios.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/labios_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2019labios.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2019labios.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "X.-H. Sun"],
    title: "An Intelligent, Adaptive, and Flexible Data Compression Framework",
    venue:
      "IEEE/ACM International Symposium in Cluster, Cloud, and Grid Computing (CCGrid'19), Larnaca, Cyprus2019. pp. 82-91.",
    type: "Conference",
    date: "May, 2019",
    tags: ["Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/devarajan2019intelligent.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/ares_ccgrid.pdf",
      bibtex:
        "http://cs.iit.edu/~scs/assets/files/devarajan2019intelligent.bib",
      citation:
        "http://cs.iit.edu/~scs/assets/files/devarajan2019intelligent.txt",
    },
  },
  {
    authors: ["Y. Wang", "S. He", "X. Fan", "C. Xu", "X.-H. Sun"],
    title: "On Cost-Driven Collaborative Data Caching: A New Model Approach",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), vol. 30, no. 3, pp. 662 - 676",
    type: "Journal",
    date: "March, 2019",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/wang2019cost.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2019cost.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2019cost.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "P. Challa", "X.-H. Sun"],
    title:
      "Vidya: Performing Code-Block I/O Characterization for Data Access Optimization",
    venue:
      "The IEEE International Conference on High Performance Computing, Data, and Analytics 2018 (HiPC'18), Bengaluru, India2018. pp. 255-264.",
    type: "Conference",
    date: "December, 2018",
    tags: ["Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/devarajan2018vidya_paper.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/vidya.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/devarajan2018vidya.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/devarajan2018vidya.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun"],
    title:
      "A Cost-Effective Distribution-Aware Data Replication Scheme for Parallel I/O Systems",
    venue:
      "IEEE Transactions on Computers (TC), vol. 67, no. 10, pp. 1374-1387",
    type: "Journal",
    date: "October, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/he2018cost.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2018cost.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2018cost.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun", "J. Lofstead"],
    title:
      "Harmonia: An Interference-Aware Dynamic I/O Scheduler for Shared Non-Volatile Burst Buffers",
    venue:
      "The IEEE International Conference on Cluster Computing 2018 (Cluster'18), Belfast, UK2018. pp. 290-301.",
    type: "Conference",
    date: "September, 2018",
    tags: ["Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/kougkas2018harmonia.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/Harmonia_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2018harmonia.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2018harmonia.txt",
    },
  },
  {
    authors: ["K. Feng", "X.-H. Sun", "X. Yang", "S. Zhou"],
    title:
      "SciDP: Support HPC and Big Data Applications via Integrated Scientific Data Processing",
    venue:
      "The IEEE International Conference on Cluster Computing 2018 (Cluster'18), Belfast, UK2018. pp. 114-123.",
    type: "Conference",
    date: "September, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/SciDP_Kun2018.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/feng2018scidp.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/feng2018scidp.txt",
    },
  },
  {
    authors: ["Y. Liu", "X.-H. Sun"],
    title:
      "CaL: Extending Data Locality to Consider Concurrency for Performance Optimization",
    venue: "IEEE Transactions on Big Data, vol. 5, no. 2, pp. 273-288",
    type: "Journal",
    date: "June, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Cal.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2018cal.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2018cal.txt",
      doi: "https://doi.org/10.1109/TBDATA.2017.2753825",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun"],
    title: "IRIS: I/O Redirection via Integrated Storage",
    venue:
      "The 32nd ACM International Conference on Supercomputing (ICS), Bejing, China2018. pp. 33-42.",
    type: "Conference",
    date: "June, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/IRIS.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/IRIS_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2018iris.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2018iris.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun"],
    title:
      "Hermes: A Heterogeneous-Aware Multi-Tiered Distributed I/O Buffering System",
    venue:
      "The 27th ACM International Symposium on High-Performance Parallel and Distributed Computing (HPDC), Tempe, AZ, USA, 2018. pp. 219-230",
    type: "Conference",
    date: "June, 2018",
    tags: ["Hermes"],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Hermes.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/Hermes_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2018hermes.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2018hermes.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "Y. Wang", "C. Xu"],
    title:
      "A Migratory Heterogeneity-Aware Data Layout Scheme for Parallel File Systems",
    venue:
      "The 32nd IEEE International Parallel and Distributed Processing Symposium (IPDPS'18), Vancouver, Canada2018. pp. 1133-1142.",
    type: "Conference",
    date: "May, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/shuibing_ipdps2018.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2018migratory.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2018migratory.txt",
    },
  },
  {
    authors: ["X. Wang", "X. Yang", "M. Mubarak", "R. Ross", "Z. Lan"],
    title:
      "Trade-off Study of Localizing Communication and Balancing Network Traffic on Dragonfly System",
    venue:
      "The 32nd IEEE International Parallel and Distributed Processing Symposium (IPDPS'18), Vancouver, Canada2018. pp. 1113-1122.",
    type: "Conference",
    date: "May, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/xingwang_ipdps2018.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2018trade.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2018trade.txt",
    },
  },
  {
    authors: [
      "A. Haider",
      "F. Checconi",
      "X. Que",
      "L. Schneidenbach",
      "D. Buono",
      "X.-H. Sun",
    ],
    title: "Horizon: A Multi-abstraction Framework for Graph Analytics",
    venue:
      "The ACM International Conference on Computing Frontiers 2018 (CF'18), Italy, 2018. pp. 252-255",
    type: "Workshop",
    date: "May, 2018",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/haider_2018.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/haider2018horizon.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/haider2018horizon.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun"],
    title:
      "Enosis: Bridging the Semantic Gap between File-based and Object-based Data Models",
    venue:
      "The ACM SIGHPC 8th International Workshop on Data-Intensive Computing in the Clouds (DataCloud 2017), in conjunction with SC'17, Denver, CO, USA",
    type: "Workshop",
    date: "November, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Enosis.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/Enosis_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2017enosis.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2017enosis.txt",
    },
  },
  {
    authors: ["H. Devarajan", "A. Kougkas", "X.-H. Sun", "H. Che"],
    title:
      "Open Ethernet Drive: Evolution of Energy-Efﬁcient Storage Technology",
    venue:
      "The ACM SIGHPC 8th International Workshop on Data-Intensive Computing in the Clouds (DataCloud 2017), in conjunction with SC'17, Denver, CO, USAvol. 17",
    type: "Workshop",
    date: "November, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/OED_DataCloud17.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/devarajan2014open.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/devarajan2014open.txt",
    },
  },
  {
    authors: ["N. Zhang", "C. Jiang", "X.-H. Sun", "S. Song"],
    title: "Evaluating GPGPU Memory Performance Through the C-AMAT Model",
    venue:
      "The ACM SIGHPC 1st International Workshop on Memory Centric Programming for HPC (MCHPC 2017), in conjunction with SC'17, Denver, CO. USA2017. pp. 35-39",
    type: "Workshop",
    date: "November, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/C-AMAT_GPGPU.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhang2017evaluating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhang2017evaluating.txt",
    },
  },
  {
    authors: ["Y. Yan", "R. Brightwell", "X.-H. Sun"],
    title:
      "Principles of Memory-Centric Programming for High Performance Computing",
    venue:
      "The ACM SIGHPC 1st International Workshop on Memory Centric Programming for HPC (MCHPC 2017), in conjunction with SC'17, Denver, CO. USA2017. pp. 2-6",
    type: "Workshop",
    date: "November, 2017",
    tags: [],
    links: {
      pdf: "https://dl.acm.org/citation.cfm?id=3158212",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yan2017principles.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yan2017principles.txt",
    },
  },
  {
    authors: ["A. Kougkas", "H. Devarajan", "X.-H. Sun"],
    title:
      "Syndesis: Mapping Objects to Files for a Unified Data Access System",
    venue:
      "The ACM SIGHPC 8th International Workshop on Many-Task Computing on Clouds, Grids, and Supercomputers (MTAGS 2017), in conjunction with SC'17, Denver, CO, USA",
    type: "Workshop",
    date: "November, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Syndesis.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/Syndesis_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2017syndesis.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2017syndesis.txt",
    },
  },
  {
    authors: ["Y. Fan", "P. Rich", "W. Allcock", "M. Papka", "Z. Lan"],
    title:
      "Trade-off Between Prediction Accuracy and Underestimation Rate in Job Runtime Estimates",
    venue:
      "The IEEE International Conference on Cluster Computing 2017 (Cluster'17), Hawaii, USA 2017, pp. 530-540.",
    type: "Conference",
    date: "September, 2017",
    tags: [],
    links: {
      pdf: "http://www.cs.iit.edu/~zlan/publications/cluster17_final.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/fan2017trade.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/fan2017trade.txt",
    },
  },
  {
    authors: ["N. Liu", "A. Haider", "D. Jin", "X.-H. Sun"],
    title:
      "Modeling and Simulation of Extreme-Scale Fat-Tree Networks for HPC Systems and Data Centers",
    venue:
      "ACM Transactions on Modeling and Computer Simulation (TOMACS) - Special Issue on PADS 2015, vol. 27, no. 2, pp. 13:1-13:23",
    type: "Journal",
    date: "July, 2017",
    tags: [],
    links: {
      pdf: "http://publish.illinois.edu/science-of-security-lablet/files/2014/05/A-Modeling-and-Simulation-of-Extreme-Scale-Fat-Tree-Networks-for-HPC-Systems-and-Data-Centers.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2017modeling.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2017modeling.txt",
    },
  },
  {
    authors: [
      "A. Kougkas",
      "H. Eslami",
      "R. Thakur",
      "W. D. Gropp",
      "X.-H. Sun",
    ],
    title: "Rethinking Key Value Store for Parallel I/O Optimization",
    venue:
      "International Journal of High Performance Applications,2017. vol. 31, no. 4, pp. 335-356",
    type: "Journal",
    date: "July, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Anthony_kvstore_journal.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2017rethinking.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2017rethinking.txt",
    },
  },
  {
    authors: ["S. He", "Y. Wang", "Z. Li", "X.-H. Sun", "C. Xu"],
    title:
      "Cost-Aware Region-Level Data Placement in Multi-Tiered Parallel I/O Systems",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), vol. 28, no. 7, pp. 1853-1865",
    type: "Journal",
    date: "June, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Cost-Aware%20Region-Level%20Data%20Placement%20in%20Multi-Tiered%20Parallel%20IO%20Systems.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2017cost.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2017cost.txt",
      doi: "https://doi.org/10.1109/TPDS.2016.2636837",
    },
  },
  {
    authors: ["S. He", "Y. Wang", "X.-H. Sun", "C. Huang", "C. Xu"],
    title:
      "Heterogeneity-Aware Collective I/O for Parallel I/O Systems with Hybrid HDD/SSD Servers",
    venue: "IEEE Transactions on Computers (TC), vol. 66, no. 6, pp. 1091-1098",
    type: "Journal",
    date: "June, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Heterogeneity-Aware%20Collective%20IO%20for%20Parallel%20IO%20Systems%20with%20Hybrid%20HDD_SSD%20Servers.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2017heterogeneity.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2017heterogeneity.txt",
      doi: "https://doi.org/10.1109/TC.2016.2637353",
    },
  },
  {
    authors: ["S. He", "Y. Wang", "X.-H. Sun", "C. Xu"],
    title:
      "HARL: Optimizing Parallel File Systems with Heterogeneity-Aware Region-Level Data Layout",
    venue: "IEEE Transactions on Computers (TC), vol. 66, no. 6, pp. 1048-1060",
    type: "Journal",
    date: "June, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/HARL%20Optimizing%20Parallel%20File%20Systems%20with%20Heterogeneity-Aware%20Region-Level%20Data%20Layout.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2017harl.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2017harl.txt",
      doi: "https://doi.org/10.1109/TC.2016.2637905",
    },
  },
  {
    authors: ["W. Allcock", "P. Rich", "Y. Fan", "Z. Lan"],
    title:
      "Experience and Practice of Batch Scheduling on Leadership Supercomputers at Argonne",
    venue:
      "The 21st workshop on Job Scheduling Strategies for Parallel Processing (JSSPP), Vancouver, Canada2017, pp. 1-24",
    type: "Workshop",
    date: "May, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/JSSPP_17.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/allcock2017experience.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/allcock2017experience.txt",
    },
  },
  {
    authors: ["Y.-H. Liu", "X.-H. Sun"],
    title:
      "Evaluating the Combined Effect of Memory Capacity and Concurrency for Many-core Chip Design",
    venue:
      "ACM Transactions on Modeling and Performance Evaluation of Computing Systems (TOMPECS), 2017. vol. 2, no. 2, pp. 9:1-9:25",
    type: "Journal",
    date: "April, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/TOMPECS-liu.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2017evaluating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2017evaluating.txt",
    },
  },
  {
    authors: ["S. He", "Y. Wang", "X.-H. Sun", "C. Xu"],
    title:
      "Using MinMax-Memory Claims to Improve In-Memory Workflow Computations in the Cloud",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2017. vol. 28, no. 4, pp. 1202-1204",
    type: "Journal",
    date: "April, 2017",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Sbing_MinMAX-Memory17.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2017using.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2017using.txt",
      doi: "https://doi.org/10.1109/TPDS.2016.2614294",
    },
  },
  {
    authors: ["S. Liu", "E.-S. Jun", "R. Kettimuthu", "X.-H. Sun", "M. Papka"],
    title:
      "Towards Optimizing Large-Scale Data Transfers with End-to-End Integrity Verification",
    venue:
      "4th International Workshop on Distributed Storage Systems and Coding for Big Data, in conjunction with IEEE BigData 2016. Washington, D.C., USA",
    type: "Workshop",
    date: "December, 2016",
    tags: [],
    links: {
      pdf: "https://www.mcs.anl.gov/~kettimut/publications/BigData16.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2016towards.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2016towards.txt",
    },
  },
  {
    authors: [
      "Z. Zhou",
      "X. Yang",
      "Z. Lan",
      "P. Rich",
      "W. Tang",
      "V. Morozov",
      "N. Desai",
    ],
    title:
      "Improving Batch Scheduling on Blue Gene/Q by Relaxing 5D Torus Network Allocation Constraints",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), vol. 27, no. 11, pp. 3269-3282",
    type: "Journal",
    date: "November, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/TPDS2016-shuibing-02.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhou2015improving.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhou2015improving.txt",
    },
  },
  {
    authors: ["S. He", "Y. Wang", "X.-H. Sun"],
    title:
      "Improving Performance of Parallel I/O Systems through Selective and Layout-Aware SSD Cache",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), vol. 27, no. 10, pp. 2940-2952",
    type: "Journal",
    date: "November, 2016",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/71/7563479/07390309.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2016improving.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2016improving.txt",
    },
  },
  {
    authors: ["S. He", "Y. Liu", "Y. Wang", "X.-H. Sun"],
    title:
      "Enhancing Hybrid Parallel File System through Performance and Space-Aware Data Layout",
    venue:
      "International Journal of High Performance Computing Applications (IJHPCA), vol. 30, no 4, pp. 396-410",
    type: "Journal",
    date: "November, 2016",
    tags: [],
    links: {
      pdf: "https://journals.sagepub.com/doi/pdf/10.1177/1094342016631610",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2016enhancing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2016enhancing.txt",
    },
  },
  {
    authors: ["X. Yang", "J. Jenkins", "M. Mubarak", "R. Ross", "Z. Lan"],
    title:
      "Watch Out for the Bully! Job Interference Study on Dragonfly Network",
    venue:
      "ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis 2016 (SC'16), Salt Lake City, Utah, USA2016, pp. 750-760",
    type: "Conference",
    date: "November, 2016",
    tags: [],
    links: {
      pdf: "http://mypages.iit.edu/~xyang56/papers/sc16-bully.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2016watch.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2016watch.txt",
    },
  },
  {
    authors: [
      "S. Wallace",
      "X. Yang",
      "V. Vishwanath",
      "W. Allcock",
      "S. Coghlan",
      "M. Papka",
      "Z. Lan",
    ],
    title:
      "A Data Driven Scheduling Approach for Power Management on HPC Systems",
    venue:
      "ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis 2016 (SC'16), Salt Lake City, Utah, USA2016, pp. 656-666",
    type: "Conference",
    date: "November, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Wallace_SC_16.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wallace2016data.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wallace2016data.txt",
    },
  },
  {
    authors: [
      "D. Li",
      "S. Wang",
      "S. Yao",
      "Y.-H. Liu",
      "Y. Cheng",
      "X.-H. Sun",
    ],
    title: "Efficient Design Space Exploration by Knowledge Transfer",
    venue:
      "Eleventh IEEE/ACM/IFIP International Conference on Hardware/Software Codesign and System Synthesis (CODES+ISSS'16), Pittsburgh, PA, USApp. 1-10. 2016.",
    type: "Conference",
    date: "October, 2016",
    tags: [],
    links: {
      pdf: "https://dl.acm.org/ft_gateway.cfm?id=2968457&type=pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/li2016efficient.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/li2016efficient.txt",
    },
  },
  {
    authors: ["X. Yang", "S. Liu", "K. Feng", "S. Zhou", "X.-H. Sun"],
    title:
      "Visualization and Adaptive Subsetting of Earth Science Data in HDFS - A Novel Data Analysis Strategy with Hadoop and Spark",
    venue:
      "6th IEEE International Conference on Big Data and Cloud Computing (BDCloud 2016), Atlanta, GA2016, pp. 89-96",
    type: "Conference",
    date: "October, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/bdcloud16.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2016visualization.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2016visualization.txt",
    },
  },
  {
    authors: [
      "Z. Zhou",
      "X. Yang",
      "D. Zhao",
      "P. Rich",
      "W. Tang",
      "J. Wang",
      "Z. Lan",
    ],
    title:
      "I/O Aware Job Scheduling and Bandwidth Allocation for Petascale Computing Systems",
    venue: "Journal of Parallel Computing (ParCo), vol. 58, no. C, pp. 107-116",
    type: "Journal",
    date: "October, 2016",
    tags: [],
    links: {},
  },
  {
    authors: ["A. Kougkas", "M. Dorier", "R. Latham", "R. Ross", "X.-H. Sun"],
    title: "Leveraging Burst Buffer Coordination to Prevent I/O Interference",
    venue: "The eScience'16, Baltimore, Maryland, USA2016, pp. 371-380",
    type: "Conference",
    date: "October, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/eScience16.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/eScience16_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2016leveraging.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2016leveraging.txt",
    },
  },
  {
    authors: ["S. He", "Y. Wang", "X.-H. Sun"],
    title:
      "Boosting Parallel File System Performance with Heterogeneity-Aware Selective Data Layout",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2016. vol. 27, no. 9, pp. 2492-2505",
    type: "Journal",
    date: "September, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/TPDS2016-shuibing-01.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2016boosting.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2016boosting.txt",
    },
  },
  {
    authors: ["B. Xu", "W. Zhang", "X.-H. Sun", "Y. Wang"],
    title:
      "A memory-driven scheduling scheme and optimization for concurrent execution in GPU",
    venue: "Journal of Cluster Computing, 2016. vol. 19, no. 4, pp. 2241-2250",
    type: "Journal",
    date: "September, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/baoyu.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/xu2016memory.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/xu2016memory.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "Y.-H. Liu"],
    title: "Utilizing Concurrency: A New Theory for Memory Wall",
    venue:
      "29th International Workshop on Languages and Compilers for Parallel Computing (LCPC2016) (a position paper), Sept, 2016, New York, USApp. 18-23 Springer, Cham.",
    type: "Workshop",
    date: "September, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/sluicegate-c2.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sun2016utilizing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/sun2016utilizing.txt",
    },
  },
  {
    authors: [
      "E. Berrocal",
      "L. Bautista-Gomez",
      "S. Di",
      "Z. Lan",
      "F. Cappello",
    ],
    title:
      "Exploring Partial Replication to Improve Lightweight Silent Data Corruption Detection for HPC Applications",
    venue:
      "22nd International European Conference on Parallel and Distributed Computing (Euro-Par 2016), Grenoble, France",
    type: "Conference",
    date: "August, 2016",
    tags: [],
    links: {
      pdf: "https://pdfs.semanticscholar.org/19d6/86007a37f599b850bfbca391a5d7d869def8.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/berrocal2016exploring.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/berrocal2016exploring.txt",
    },
  },
  {
    authors: [
      "Y. Chen",
      "C. Chen",
      "Y. Yin",
      "X.-H. Sun",
      "R. Thakur",
      "W. D. Gropp",
    ],
    title:
      "Rethinking High Performance Computing System Architecture for Scientific Big Data Applications",
    venue:
      "14th IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA 2016), Tianjin, China",
    type: "Conference",
    date: "August, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Yong_ISPA16.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2016rethinking.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2016rethinking.txt",
    },
  },
  {
    authors: ["W. Yang", "C. Xu", "S. He", "X.-H. Sun"],
    title:
      "On MinMax-Memory Claims for Scientific Workflows in the In-Memory Cloud Computing",
    venue:
      "36th International Conference on Distributed Computing Systems (ICDCS), Nara Hotel, Nara, Japan",
    type: "Poster",
    date: "June, 2016",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/7529829/7536347/07536575.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2016minmax.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2016minmax.txt",
    },
  },
  {
    authors: ["D. Li", "S. Yao", "Y.-H. Liu", "S. Wang", "X.-H. Sun"],
    title:
      "Efficient Design Space Exploration via Statistical Sampling and AdaBoost Learning",
    venue: "53rd Design Automation Conference (DAC'16), Texas, Austin, USA",
    type: "Conference",
    date: "June, 2016",
    tags: [],
    links: { pdf: "https://dl.acm.org/ft_gateway.cfm?id=2898012&type=pdf" },
  },
  {
    authors: [
      "D. Zhao",
      "N. Liu",
      "D. Kimpe",
      "R. Ross",
      "X.-H. Sun",
      "I. Raicu",
    ],
    title:
      "Towards Exploring Data-Intensive Scientific Applications at Extreme Scales through Systems and Simulations",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems (TPDS), 2016. vol. 27, no. 6, pp. 1824-1837",
    type: "Journal",
    date: "June, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/TPDS2016-dongfang.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhao2016towards.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhao2016towards.txt",
    },
  },
  {
    authors: ["A. Kougkas", "A. Fleck", "X.-H. Sun"],
    title:
      "Towards Energy Efficient Data Management in HPC: The Open Ethernet Drive Approach",
    venue: "PDSW-DISCS'16, in conjunction with SC'16",
    type: "Workshop",
    date: "January, 2016",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Anthony_oed_pdsw16.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/OED_PDSW16_slides.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/kougkas2016towards.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/kougkas2016towards.txt",
    },
  },
  {
    authors: ["A. Haider", "X. Yang", "N. Liu", "S. He", "X.-H. Sun"],
    title: "IC-Data: Improving Compressed Data Processing in Hadoop",
    venue:
      "22nd annual IEEE International Conference on High Performance Computing (HiPC 2015), Bengaluru, India",
    type: "Conference",
    date: "December, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/IC-Data.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/haider2015ic.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/haider2015ic.txt",
    },
  },
  {
    authors: ["X. Yang", "C. Feng", "Z. Xu", "X.-H. Sun"],
    title: "Dominoes: Speculative Repair in Erasure Coded Hadoop System",
    venue:
      "22nd annual IEEE International Conference on High Performance Computing (HiPC 2015), Bengaluru, India",
    type: "Conference",
    date: "December, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/dominoes.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2015dominoes.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2015dominoes.txt",
    },
  },
  {
    authors: ["Y.-H. Liu", "X.-H. Sun"],
    title:
      "C^2-bound: A Capacity and Concurrency driven Analytical Model for Manycore Design",
    venue:
      "ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis 2015 (SC'15). Texas, Austin, USA",
    type: "Conference",
    date: "November, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/SC%20paper-pub.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2015c.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2015c.txt",
    },
  },
  {
    authors: [
      "H. Eslami",
      "A. Kougkas",
      "M. Kotsifakou",
      "T. Kasampalis",
      "K. Feng",
      "Y. Lu",
      "W. D. Gropp",
      "X.-H. Sun",
      "Y. Chen",
      "R. Thakur",
    ],
    title:
      "Efficient Disk-to-Disk Sorting: A Case Study in Decoupled Execution Paradigm",
    venue:
      "Data Intensive Scalable Computing Systems Workshop (DISCS), in conjunction with ACM/IEEE SuperComputing 2015, Austin, TX, USA",
    type: "Workshop",
    date: "November, 2015",
    tags: [],
    links: {
      pdf: "https://dl.acm.org/ft_gateway.cfm?ftid=1643727&id=2831249",
      bibtex: "http://cs.iit.edu/~scs/assets/files/eslami2015efficient.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/eslami2015efficient.txt",
    },
  },
  {
    authors: ["A. Haider", "S. Mickelson", "J. Dennis", "X.-H. Sun"],
    title:
      "Lessons from Post-processing Climate Data on Modern Flash-based HPC Systems",
    venue:
      "ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis 2015 (SC'15). Texas, Austin, USA",
    type: "Poster",
    date: "November, 2015",
    tags: [],
    links: {},
  },
  {
    authors: ["X. Yang", "N. Liu", "B. Feng", "X.-H. Sun", "S. Zhou"],
    title: "PortHadoop: Support Direct HPC Data Processing in Hadoop",
    venue:
      "IEEE International Conference on Big Data (IEEE BigData 2015). Santa Clara, CA, USA",
    type: "Conference",
    date: "October, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/PortHadoop_ieee.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2015porthadoop.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2015porthadoop.txt",
    },
  },
  {
    authors: [
      "S. Zhou",
      "X. Yang",
      "X. Li",
      "T. Matsui",
      "S. Liu",
      "X.-H. Sun",
      "W. Tao",
    ],
    title:
      "A Hadoop-Based Visualization and Diagnosis Framework for Earth Science Data",
    venue:
      "Big Data in the Geosciences Workshop, in conjunction with IEEE International Conference on Big Data (IEEE BigData 2015). Santa Clara, CA, USA",
    type: "Workshop",
    date: "October, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/framework_zhou.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhou2015hadoop.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhou2015hadoop.txt",
    },
  },
  {
    authors: [
      "K. Wang",
      "N. Liu",
      "I. Sadooghi",
      "X. Yang",
      "X. Zhou",
      "M. Lang",
      "X.-H. Sun",
      "I. Raicu",
    ],
    title:
      "Overcoming Hadoop Scaling Limitations through Distributed Task Execution",
    venue:
      "IEEE International Conference on Cluster Computing 2015 (Cluster'15), Chicago, IL, USA",
    type: "Conference",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/7307300/7307539/07307589.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2015overcoming.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2015overcoming.txt",
    },
  },
  {
    authors: ["B. Feng", "X. Yang", "K. Feng", "Y. Yin", "X.-H. Sun"],
    title: "IOSIG+: on the Role of I/O Tracing and Analysis for Hadoop Systems",
    venue:
      "IEEE International Conference on Cluster Computing 2015 (Cluster'15), Chicago, IL, USA",
    type: "Workshop",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/bo_cluster15_IOSIG+.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/feng2015iosig+.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/feng2015iosig+.txt",
    },
  },
  {
    authors: ["K. Feng", "M. G. Venkata", "D. Li", "X.-H. Sun"],
    title:
      "Fast Fault Injection and Sensitivity Analysis for Collective Communications",
    venue:
      "IEEE International Conference on Cluster Computing 2015 (Cluster'15), Chicago, IL, USA",
    type: "Conference",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/fastfit.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/feng2015fast.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/feng2015fast.txt",
    },
  },
  {
    authors: [
      "Z. Zhou",
      "X. Yang",
      "D. Zhao",
      "P. Rich",
      "W. Tang",
      "J. Wang",
      "Z. Lan",
    ],
    title: "I/O-Aware Batch Scheduling for Petascale Computing Systems",
    venue:
      "IEEE International Conference on Cluster Computing 2015 (Cluster'15), Chicago, IL, USA",
    type: "Conference",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/7307300/7307539/07307592.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhou2015aware.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhou2015aware.txt",
    },
  },
  {
    authors: ["Y.-H. Liu", "X.-H. Sun"],
    title: "LPM: Concurrency-driven Layered Performance Matching",
    venue:
      "44th International Conference on Parallel Processing (ICPP'15), Beijing, China",
    type: "Conference",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/LPM-pub.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2015lpm.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2015lpm.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "Y. Wang", "A. Kougkas", "A. Haider"],
    title:
      "A Heterogeneity-Aware Region-Level Data Layout Scheme for Hybrid Parallel File Systems",
    venue:
      "44th International Conference on Parallel Processing (ICPP'15), Beijing, China",
    type: "Conference",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/harl-cr.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2015heterogeneity.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2015heterogeneity.txt",
    },
  },
  {
    authors: ["C. Feng", "X. Yang", "F. Liang", "X.-H. Sun", "Z. Xu"],
    title:
      "LCIndex, A Local and Clustering Index on Distributed Ordered Tables for Multi-Dimensional Range Queries",
    venue:
      "44th International Conference on Parallel Processing (ICPP'15), Beijing, China",
    type: "Conference",
    date: "September, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/LCIndex.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/feng2015lcindex.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/feng2015lcindex.txt",
    },
  },
  {
    authors: ["N. Liu", "X.-H. Sun", "D. Jin"],
    title:
      "On Massively Parallel Simulation of Large-Scale Fat-Tree Networks for HPC Systems and Data Centers",
    venue:
      "29th ACM SIGSIM Conference on Principles of Advanced Discrete Simulation (ACM SIGSIM PADS), London, UK",
    type: "Poster",
    date: "June, 2015",
    tags: [],
    links: {},
  },
  {
    authors: ["B. Wang", "W. Yu", "X.-H. Sun", "X. Wang"],
    title: "DaCache: Memory Divergence-Aware GPU Cache Management",
    venue:
      "29th International Conference on Supercomputing (ICS'15), Newport Beach, CA. USA",
    type: "Conference",
    date: "June, 2015",
    tags: [],
    links: {
      pdf: "https://www.cs.fsu.edu/~yuw/pubs/2015-ICS-Yu.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2015dacache.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2015dacache.txt",
    },
  },
  {
    authors: [
      "R. Ranjan",
      "L. Wang",
      "A. Y. Zomaya",
      "D. Georgakopoulos",
      "X.-H. Sun",
      "G. Wang",
    ],
    title:
      "Recent Advances in Autonomic Provisioning of Big Data Applications on Clouds",
    venue: "IEEE Transaction on Cloud Computing, vol. 3, no. 2, pp. 101-104",
    type: "Journal",
    date: "June, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/auto_provision_tcc15.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/ranjan2015recent.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/ranjan2015recent.txt",
    },
  },
  {
    authors: ["N. Liu", "A. Haider", "X.-H. Sun", "D. Jin"],
    title:
      "FatTreeSim: Modeling a Large-scale Fat-Tree Network for HPC Systems and Data Centers Using Parallel and Discrete Event Simulation",
    venue:
      "29th ACM SIGSIM Conference on Principles of Advanced Discrete Simulation (ACM SIGSIM PADS), London, UK",
    type: "Conference",
    date: "June, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/fattreesim.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2015fattreesim.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2015fattreesim.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "A. Haider"],
    title:
      "HAS: Heterogeneity-Aware Selective Data Layout Scheme for Parallel File Systems on Hybrid Servers",
    venue:
      "29th IEEE International Parallel and Distributed Processing Symposium (IPDPS'15), Hyderabad, India",
    type: "Conference",
    date: "May, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/has_ipdps15.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2015has.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2015has.txt",
    },
  },
  {
    authors: [
      "Z. Zhou",
      "X. Yang",
      "Z. Lan",
      "P. Rich",
      "W. Tang",
      "V. Morozov",
      "N. Desai",
    ],
    title:
      "Improving Batch Scheduling on Blue Gene/Q by Relaxing 5D Torus Network Allocation Constraints",
    venue:
      "29th IEEE International Parallel and Distributed Processing Symposium (IPDPS'15), Hyderabad, India",
    type: "Conference",
    date: "May, 2015",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/7159926/7161257/07161532.pdf",
    },
  },
  {
    authors: ["N. Liu", "X. Yang", "X.-H. Sun", "J. Jenkins", "R. Ross"],
    title: "YARNsim: Hadoop YARN Simulation System",
    venue:
      "15th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid 2015), Shenzhen, Guangdong, China",
    type: "Conference",
    date: "May, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Ning_CCGrid15.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2015yarnsim.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2015yarnsim.txt",
    },
  },
  {
    authors: ["J. Wu", "X. Xiong", "Z. Lan"],
    title:
      "Hierarchical Task Mapping for Parallel Applications on Supercomputers",
    venue: "The Journal of Supercomputing, vol. 71, no. 5, pp. 1776-1802",
    type: "Journal",
    date: "May, 2015",
    tags: [],
    links: {
      pdf: "https://link.springer.com/article/10.1007/s11227-014-1324-5",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wu2015hierarchical.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wu2015hierarchical.txt",
    },
  },
  {
    authors: ["Z. Zheng", "L. Yu", "Z. Lan"],
    title:
      "Reliability-Aware Speedup Models for Parallel Applications with Coordinated Checkpointing/Restart",
    venue: "IEEE Transactions on Computers, vol. 64, no. 5, pp. 1402-1415",
    type: "Journal",
    date: "May, 2015",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/12/7079452/06798722.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zheng2015reliability.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zheng2015reliability.txt",
    },
  },
  {
    authors: ["Y. Liu", "X.-H. Sun"],
    title:
      "Reevaluating Data Stall Time with the Consideration of Data Access Concurrency",
    venue:
      "Journal Of Computer Science And Technology, vol. 30, no. 2, pp. 227-245",
    type: "Journal",
    date: "March, 2015",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Reevaluating%20Data%20Stall%20Time%20with%20the%20Consideration%20of%20Data%20Access.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/liu2015reevaluating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/liu2015reevaluating.txt",
    },
  },
  {
    authors: ["Y. Yin", "H. Jin", "X.-H. Sun"],
    title: "I/O and File Systems for Data Intensive Applications",
    venue:
      "The Handbook on Data Centers, Springer, 2015, pp 561-582, Print ISBN: 978-1-4939-2091-4, Online ISBN: 978-1-4939-2092-1",
    type: "Journal",
    date: "January, 2015",
    tags: [],
    links: {
      pdf: "http://link.springer.com/chapter/10.1007/978-1-4939-2092-1_18",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yin2015and.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yin2015and.txt",
    },
  },
  {
    authors: ["S. He", "Y. Liu", "X.-H. Sun"],
    title:
      "PSA: A Performance and Space-Aware Data Layout Scheme for Hybrid Parallel File Systems",
    venue:
      "Data Intensive Scalable Computing Systems Workshop (DISCS), in conjunction with ACM/IEEE SuperComputing 2014, New Orleans, LA, USA",
    type: "Workshop",
    date: "November, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/psa-discs14.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2014psa.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2014psa.txt",
    },
  },
  {
    authors: ["B. Feng", "N. Liu", "S. He", "X.-H. Sun"],
    title:
      "HPIS3: Towards a High-Performance Simulator for Hybrid Parallel I/O and Storage Systems",
    venue:
      "9th Parallel Data Storage Workshop (PDSW'14), in conjunction with ACM/IEEE SuperComputing 2014, New Orleans, LA, USA",
    type: "Workshop",
    date: "November, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/HPIS3.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/feng2014hpis3.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/feng2014hpis3.txt",
    },
  },
  {
    authors: [
      "Y. Yin",
      "A. Kougkas",
      "K. Feng",
      "H. Eslami",
      "Y. Lu",
      "X.-H. Sun",
      "R. Thakur",
      "W. D. Gropp",
    ],
    title: "Rethinking Key-Value Store for Parallel I/O Optimization",
    venue:
      "Data Intensive Scalable Computing Systems Workshop (DISCS), in conjunction with ACM/IEEE SuperComputing 2014, New Orleans, LA, USA",
    type: "Workshop",
    date: "November, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/KVStore-DISCS-2014.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yin2014rethinking.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yin2014rethinking.txt",
    },
  },
  {
    authors: ["X. Yang", "Y. Yin", "H. Jin", "X.-H. Sun"],
    title: "SCALER: Scalable Parallel File Write in HDFS",
    venue:
      "International Conference on Cluster Computing 2014 (Cluster'14), Madrid, Spain",
    type: "Conference",
    date: "September, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/SCALER_xyang.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2014scaler.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2014scaler.txt",
    },
  },
  {
    authors: ["E. Berrocal", "L. Yu", "S. Wallace", "M. Papka", "Z. Lan"],
    title: "Exploring Void Search for Fault Detection on Extreme Scale Systems",
    venue:
      "IEEE International Conference on Cluster Computing 2014 (Cluster'14), Madrid, Spain",
    type: "Conference",
    date: "September, 2014",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/6957006/6968662/06968757.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/berrocal2014exploring.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/berrocal2014exploring.txt",
    },
  },
  {
    authors: ["X. Yang", "X. Zheng", "Z. Zhou", "W. Tang", "J. Wang", "Z. Lan"],
    title:
      "Balancing Job Performance with System Performance via Locality-Aware Scheduling on Torus-Connected Systems",
    venue:
      "IEEE International Conference on Cluster Computing 2014 (Cluster'14), Madrid, Spain",
    type: "Conference",
    date: "September, 2014",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/6957006/6968662/06968751.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2014balancing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2014balancing.txt",
    },
  },
  {
    authors: [
      "C. Chen",
      "Y. Chen",
      "K. Feng",
      "Y. Yin",
      "H. Eslami",
      "R. Thakur",
      "X.-H. Sun",
      "W. D. Gropp",
    ],
    title: "Decoupled I/O for Data-Intensive High Performance Computing",
    venue:
      "Seventh International Workshop on Parallel Programming Models and Systems Software for High-End Computing (P2S2), in conjunction with the International Conference on Parallel Processing (ICPP-2014), Minneapolis, MN, USA",
    type: "Workshop",
    date: "September, 2014",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel7/7101393/7103416/07103466.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2014decoupled.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2014decoupled.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "B. Feng", "K. Feng"],
    title: "Performance-Aware Data Placement in Hybrid Parallel File Systems",
    venue:
      "14th International Conference on Algorithms and Architectures for Parallel Processing (ICA3PP), Dalian, China",
    type: "Conference",
    date: "August, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/padp.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2014performance.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2014performance.txt",
    },
  },
  {
    authors: ["D. Wang", "X.-H. Sun"],
    title:
      "APC: A Novel Memory Metric and Measurement Methodology for Modern Memory System",
    venue: "IEEE Transactions on Computers, vol. 63, no. 7, pp. 1626-1639",
    type: "Journal",
    date: "July, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/APC_TC.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2014apc.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2014apc.txt",
    },
  },
  {
    authors: ["X.-H. Sun"],
    title: "C-AMAT: a data access model for the Big Data era",
    venue: "Communication of CCF, vol. 10, no. 6, pp. 19-22",
    type: "Journal",
    date: "June, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/C-AMAT_CCCF_JUNE_2014.pdf",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "B. Feng"],
    title: "S4D-Cache: Smart Selective SSD Cache for Parallel I/O Systems",
    venue:
      "International Conference on Distributed Computing Systems (ICDCS), Madrid, Spain",
    type: "Conference",
    date: "June, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/s4d-cache-CR.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2014s4d.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2014s4d.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "D. Wang"],
    title: "Concurrent Average Memory Access Time",
    venue: "IEEE Computer, vol. 47, no. 5, pp. 74-80",
    type: "Journal",
    date: "May, 2014",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/SUN-ConcurrentAMAT__IEEE_May2014.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sun2014concurrent.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/sun2014concurrent.txt",
    },
  },
  {
    authors: ["X.-H. Sun"],
    title: "Concurrent-AMAT: a mathematical model for Big Data access",
    venue: "HPC Today",
    type: "Journal",
    date: "May, 2014",
    tags: [],
    links: {
      pdf: "http://www.hpctoday.eu/state-of-the-art/c-amat-a-model-for-big-data-access/",
    },
  },
  {
    authors: [
      "X. Yang",
      "Z. Zhou",
      "S. Wallace",
      "Z. Lan",
      "W. Tang",
      "S. Coghlan",
      "M. E. Papka",
    ],
    title:
      "Integrating dynamic pricing of electricity into energy aware scheduling for HPC systems",
    venue:
      "International Conference for High Performance Computing, Networking, Storage and Analysis, Denver, CO, USA",
    type: "Conference",
    date: "November, 2013",
    tags: [],
    links: {
      pdf: "http://www.cs.iit.edu/~lan/publications/sc13_final.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yang2013integrating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yang2013integrating.txt",
    },
  },
  {
    authors: [
      "J. He",
      "J. Kowalkowski",
      "M. Paterno",
      "D. J. Holmgren",
      "J. N. Simone",
      "X.-H. Sun",
    ],
    title: "Layout-Aware Scientific Computing-A Case Study using the MILC Code",
    venue: "Journal of Computational Science, vol. 4, no. 6, pp. 496-506",
    type: "Journal",
    date: "November, 2013",
    tags: [],
    links: {
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2013layout.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2013layout.txt",
    },
  },
  {
    authors: [
      "K. Feng",
      "Y. Yin",
      "C. Chen",
      "H. Eslami",
      "X.-H. Sun",
      "Y. Chen",
      "R. Thakur",
      "W. D. Gropp",
    ],
    title:
      "Runtime System Design of Decoupled Execution Paradigm for Data-Intensive High-End Computing (Poster Presentation)",
    venue:
      "IEEE International Conference on Cluster Computing 2013 (Cluster'13), Indianapolis, IN, USA",
    type: "Conference",
    date: "September, 2013",
    tags: [],
    links: {
      pdf: "https://www.computer.org/csdl/proceedings/cluster/2013/9999/00/06702642.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/feng2013runtime.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/feng2013runtime.txt",
    },
  },
  {
    authors: [
      "J. He",
      "J. Bent",
      "A. Torres",
      "G. Grider",
      "G. Gibson",
      "C. Maltzahn",
      "X.-H. Sun",
    ],
    title: "I/O Acceleration with Pattern Detection",
    venue:
      "22th International ACM Symposium on High Performance Distributed Computing (HPDC'13), New York City, NY, USA",
    type: "Conference",
    date: "September, 2013",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/jun_hpdc13.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2013acceleration.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2013acceleration.txt",
    },
  },
  {
    authors: ["H. Jin", "X.-H. Sun"],
    title:
      "Performance Comparison under Failures of MPI and MapReduce: An Analytical Approach",
    venue:
      "Future Generation Computer Systems (FGCS), vol. 29, no. 7, pp. 1808-1815",
    type: "Journal",
    date: "September, 2013",
    tags: [],
    links: {
      pdf: "http://www.sciencedirect.com/science/article/pii/S0167739X13000290",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2013performance.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2013performance.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "B. Feng", "X. Huang", "K. Feng"],
    title:
      "A Cost-Aware Region-Level Data Placement Scheme for Hybrid Parallel I/O Systems",
    venue:
      "IEEE International Conference on Cluster Computing 2013 (Cluster'13), Indianapolis, IN, USA",
    type: "Conference",
    date: "September, 2013",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/shuibing_cluster13.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2013cost.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2013cost.txt",
    },
  },
  {
    authors: ["Y. Yin", "J. Li", "J. He", "X.-H. Sun", "R. Thakur"],
    title:
      "Pattern-Direct and Layout-Aware Replication Scheme for Parallel I/O Systems",
    venue:
      "IEEE International Parallel and Distributed Processing Symposium (IPDPS' 13), Phoenix, AZ, USA",
    type: "Conference",
    date: "May, 2013",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yanlong_ipdps13.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yin2013pattern.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yin2013pattern.txt",
    },
  },
  {
    authors: ["S. He", "X.-H. Sun", "Y. Yin"],
    title: "BPS: A Performance Metric of I/O System",
    venue:
      "2013 International Workshop on High Performance Data Intensive Computing (HPDIC 2013), in Conjunction With IEEE IPDPS 2013, Boston, Massachusetts, USA",
    type: "Workshop",
    date: "May, 2013",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/shuibing_hpdic13.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2013bps.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2013bps.txt",
    },
  },
  {
    authors: [
      "J. He",
      "J. Bent",
      "A. Torres",
      "G. Grider",
      "G. Gibson",
      "C. Maltzahn",
      "X.-H. Sun",
    ],
    title: "Discovering Structure in Unstructured I/O",
    venue:
      "The 7th Parallel Data Storage Workshop (PDSW'12), in conjunction with ACM/IEEE SuperComputing 2012, Salt Lake City, UT, USA",
    type: "Workshop",
    date: "November, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/plfs-index.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2012discovering.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2012discovering.txt",
    },
  },
  {
    authors: ["J. Wu", "Z. Lan", "X. Xiong", "N. Gnedin", "A. Kravtsov"],
    title: "Hierarchical Task Mapping of Cell-based AMR Cosmology Simulations",
    venue:
      "ACM/IEEE International Conference for High Performance Computing, Networking, Storage and Analysis 2012 (SC'12). Salt Lake City, UT, USA",
    type: "Conference",
    date: "November, 2012",
    tags: [],
    links: {
      pdf: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.713.5156&rep=rep1&type=pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wu2012hierarchical.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wu2012hierarchical.txt",
    },
  },
  {
    authors: ["Y. Chen", "H. Zhu", "H. Jin", "X.-H. Sun"],
    title:
      "Algorithm-level Feedback-controlled Adaptive Data Prefetcher: Accelerating Data Access for High-Performance Processors",
    venue: "Parallel Computing (ParCo), vol. 38, no. 10-11, pp. 533-551",
    type: "Journal",
    date: "October, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/data_prefetcher.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2012algorithm.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2012algorithm.txt",
    },
  },
  {
    authors: ["Z. Zheng", "L. Yu", "Z. Lan", "T. Jones"],
    title: "3-Dimensional Root Cause Diagnosis via Co-Analysis",
    venue:
      "International Conference on Autonomic Computing 2012 (ICAC'12), San Jose, CA, USA",
    type: "Conference",
    date: "September, 2012",
    tags: [],
    links: {
      pdf: "http://mypages.iit.edu/~lyu17/papers/icac.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zheng20123.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zheng20123.txt",
    },
  },
  {
    authors: ["W. Tang", "D. Ren", "Z. Lan", "N. Desai"],
    title: "Adaptive Metric-Aware Job Scheduling for Production Supercomputers",
    venue:
      "5th International Workshop on Parallel Programming Models and Systems Software for High-End Computing (P2S2), 2012, in conjunction with ICPP 2012, Pittsburgh, PA, USA",
    type: "Workshop",
    date: "September, 2012",
    tags: [],
    links: {
      pdf: "https://www.mcs.anl.gov/events/workshops/p2s2/2012/slides/p2s2-2012-Tang-adaptive-sched-pres.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/tang2012adaptive.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/tang2012adaptive.txt",
    },
  },
  {
    authors: ["H. Jin", "J. Ji", "X.-H. Sun", "Y. Chen", "R. Thakur"],
    title: "CHAIO: Enabling HPC Applications on Data-Intensive File Systems",
    venue:
      "41th International Conference on Parallel Processing (ICPP), Pittsburgh, PA",
    type: "Conference",
    date: "September, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/jin_icpp_12.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2012chaio.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2012chaio.txt",
    },
  },
  {
    authors: ["J. He", "X.-H. Sun", "R. Thakur"],
    title: "KNOWAC: I/O Prefetch via Accumulated Knowledge",
    venue:
      "IEEE International Conference on Cluster Computing (Cluster'12), Beijing, China",
    type: "Conference",
    date: "September, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/KNOWAC_final.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2012knowac.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2012knowac.txt",
    },
  },
  {
    authors: ["Y. Chen", "C. Chen", "X.-H. Sun", "W. D. Gropp", "R. Thakur"],
    title:
      "A Decoupled Execution Paradigm for Data-Intensive High-End Computing",
    venue:
      "IEEE International Conference on Cluster Computing 2012 (Cluster'12), Beijing, China,",
    type: "Conference",
    date: "September, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/PID2448849.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2012decoupled.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2012decoupled.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "D. Wang"],
    title: "APC: A Performance Metric of Memory Systems",
    venue:
      "ACM SIGMETRICS Performance Evaluation Review, vol. 40, no. 2, pp. 125-130",
    type: "Journal",
    date: "September, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/APC-sun-CopyRight.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sun2012apc.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/sun2012apc.txt",
    },
  },
  {
    authors: [
      "L. Yu",
      "Z. Zheng",
      "Z. Lan",
      "T. Jones",
      "J. Brandt",
      "A. Gentile",
    ],
    title: "Filtering Log Data: Finding the needles in the Haystack",
    venue:
      "International Conference on Dependable Systems and Networks 2012 (DSN'12), Boston, MA, USA",
    type: "Conference",
    date: "June, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/DSN12.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yu2012filtering.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yu2012filtering.txt",
    },
  },
  {
    authors: ["H. Jin", "X. Yang", "X.-H. Sun", "I. Raicu"],
    title:
      "ADAPT: Availability-aware MapReduce Data Placement in Non-Dedicated Distributed Computing Environment",
    venue:
      "32nd International Conference on Distributed Computing Systems (ICDCS), Macau, China",
    type: "Conference",
    date: "June, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/icdcs-12.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2012adapt.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2012adapt.txt",
    },
  },
  {
    authors: ["Y. Yin", "S. Byna", "H. Song", "X.-H. Sun", "R. Thakur"],
    title:
      "Boosting Application-Specific Parallel I/O Optimization Using IOSIG",
    venue:
      "IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid), Ottawa, Canada",
    type: "Conference",
    date: "May, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ccgrid12-yin.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yin2012boosting.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yin2012boosting.txt",
    },
  },
  {
    authors: ["H. Jin", "X.-H. Sun"],
    title:
      "Performance Comparison under Failures of MPI and MapReduce: An Analytical Approach",
    venue:
      "2nd International Workshop on Cloud Computing and Scientific Applications (CCSA), in conjunction with CCGrid 2012, Ottawa, Canada",
    type: "Workshop",
    date: "May, 2012",
    tags: [],
    links: {},
  },
  {
    authors: ["R. Ge", "X. Feng", "X.-H. Sun"],
    title:
      "SERA-IO: Integrating Energy Consciousness into Parallel I/O Middleware",
    venue:
      "IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid), Ottawa, Canada",
    type: "Conference",
    date: "May, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ccgrid12-ge.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/ge2012sera.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/ge2012sera.txt",
    },
  },
  {
    authors: ["H. Zou", "X.-H. Sun", "S. Ma", "X. Duan"],
    title:
      "A Source-Aware Interrupt Scheduling for Modern Parallel I/O Systems",
    venue:
      "IEEE International Parallel and Distributed Processing Symposium (IPDPS' 12), Shanghai, China",
    type: "Conference",
    date: "May, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ipdps12-zou.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zou2012source.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zou2012source.txt",
    },
  },
  {
    authors: ["H. Jin", "T. Ke", "Y. Chen", "X.-H. Sun"],
    title:
      "Checkpointing Orchestration: Toward a Scalable HPC Fault-Tolerant Environment",
    venue:
      "IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid), Ottawa, Canada",
    type: "Conference",
    date: "May, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ccgrid12-jin.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2012checkpointing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2012checkpointing.txt",
    },
  },
  {
    authors: ["H. Song", "H. Jin", "J. He", "X.-H. Sun", "R. Thakur"],
    title:
      "A Server-Level Adaptive Data Layout Strategy for Parallel File Systems",
    venue:
      "2012 International Workshop on High Performance Data Intensive Computing(HPDIC 2012), in Conjunction With IEEE IPDPS 2012, Shanghai, China",
    type: "Workshop",
    date: "May, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/server-level.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2012server.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2012server.txt",
    },
  },
  {
    authors: [
      "Y. Yu",
      "D. Rudd",
      "Z. Lan",
      "N. Gnedin",
      "A. Kravtsov",
      "J. Wu",
    ],
    title:
      "Improving Parallel IO Performance of Cell-based AMR Cosmology Applications",
    venue:
      "IEEE International Parallel & Distributed Processing Symposium 2012 (IPDPS'12), Shanghai, China",
    type: "Conference",
    date: "May, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/yu_ipdps_2012.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yu2012improving.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yu2012improving.txt",
    },
  },
  {
    authors: ["H. Song", "Y. Yin", "Y. Chen", "X.-H. Sun"],
    title:
      "Cost-intelligent Application-specific Data layout Optimization for Parallel File Systems",
    venue: "Cluster Computing, pp. 1-14",
    type: "Journal",
    date: "February, 2012",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cost-model-jrnl.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2013cost.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2013cost.txt",
    },
  },
  {
    authors: ["Y. Chen", "H. Zhu", "P. C. Roth", "H. Jin", "X.-H. Sun"],
    title:
      "Global-aware and Multi-order Context-based Prefetching for High-Performance Processors",
    venue:
      "Special issue on Programming Models, Software and Tools for High-End Computing of the International Journal of High Performance Computing Applications (IJHPCA), vol. 25, no. 4, pp. 355-370",
    type: "Journal",
    date: "November, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/IJHPCA-chen.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2011global.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2011global.txt",
    },
  },
  {
    authors: ["H. Song", "Y. Yin", "X.-H. Sun", "R. Thakur", "S. Lang"],
    title: "Server-Side I/O Coordination for Parallel File Systems",
    venue: "The ACM/IEEE SuperComputing Conference (SC'11), Seattle, WA, USA",
    type: "Conference",
    date: "November, 2011",
    tags: [],
    links: {
      pdf: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.461.4037&rep=rep1&type=pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2011server.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2011server.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "D. Wang"],
    title: "Memory Access Cycle and the Measurement of Memory Systems",
    venue:
      "The 2nd International Workshop on Performance Modeling, Benchmarking and Simulation of High Performance Computing Systems (PMBS'11), in conjunction with IEEE/ACM SuperComputing 2011, Seattle, WA, USA",
    type: "Workshop",
    date: "November, 2011",
    tags: [],
    links: {
      pdf: "http://www.dcs.warwick.ac.uk/pmbs/pmbs11/PMBS11/Workshop_Schedule_files/rn-1730.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sun2011memory.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/sun2011memory.txt",
    },
  },
  {
    authors: ["J. He", "H. Song", "X.-H. Sun", "Y. Yin", "R. Thakur"],
    title: "Pattern-aware File Reorganization in MPI-IO",
    venue:
      "The 6th Parallel Data Storage Workshop (PDSW'11), in conjunction with ACM/IEEE SuperComputing 2011, Seattle, WA, USA",
    type: "Workshop",
    date: "November, 2011",
    tags: [],
    links: {
      pdf: "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.363.2559&rep=rep1&type=pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2011pattern.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2011pattern.txt",
    },
  },
  {
    authors: [
      "J. He",
      "J. Kowalkowski",
      "M. Paterno",
      "D. J. Holmgren",
      "J. N. Simone",
      "X.-H. Sun",
    ],
    title: "Layout-aware Scientific Computing - A Case Study Using MILC",
    venue:
      "Workshop on Latest Advances in Scalable Algorithms for Large-Scale Systems (ScalA'11), in conjunction with ACM/IEEE SuperComputing 2011, Seattle, WA, USA",
    type: "Workshop",
    date: "November, 2011",
    tags: [],
    links: {
      pdf: "http://mypages.iit.edu/~jhe24/papers/scala03-he.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/he2011layout.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/he2011layout.txt",
    },
  },
  {
    authors: [
      "J. Wu",
      "R. Gonzalez",
      "Z. Lan",
      "N. Gnedin",
      "A. Kravtsov",
      "D. Rudd",
      "Y. Yu",
    ],
    title: "Performance Emulation of Cell-based AMR Cosmology Simulations",
    venue:
      "The IEEE International Conference on Cluster Computing (CLUSTER), Austin, Texas",
    type: "Conference",
    date: "September, 2011",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel5/6059523/6061043/06061060.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/wu2011performance.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wu2011performance.txt",
    },
  },
  {
    authors: ["W. Tang", "N. Desai", "V. Vishwanath", "D. Buettner", "Z. Lan"],
    title: "Job Coscheduling on Coupled High-End Computing Systems",
    venue:
      "The International Conference on Parallel Processing Workshops (ICPPW'11), Taipei, Taiwan",
    type: "Conference",
    date: "September, 2011",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel5/6046212/6047049/06047306.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/tang2011job.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/tang2011job.txt",
    },
  },
  {
    authors: ["D. Wang", "X.-H. Sun", "N. Hu", "N. Sun"],
    title:
      "EthSpeeder: A High-performance Scalable Fault-Tolerant Ethernet Network Architecture for Data Center",
    venue:
      "The 6th IEEE International Conference on Networking, Architecture, and Storage (NAS2011), Dalian, China",
    type: "Conference",
    date: "July, 2011",
    tags: [],
    links: {
      bibtex: "http://cs.iit.edu/~scs/assets/files/wang2011ethspeeder.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/wang2011ethspeeder.txt",
    },
  },
  {
    authors: ["L. Yu", "Z. Zheng", "Z. Lan", "S. Coghlan"],
    title:
      "Practical Online Failure Prediction for Blue Gene/P: Period-based vs Event-driven",
    venue:
      "The Proactive Failure Avoidance, Recovery, and Maintenance workshop(in conjunction with DSN'11), Hong Kong, China",
    type: "Workshop",
    date: "June, 2011",
    tags: [],
    links: {
      pdf: "https://www.researchgate.net/profile/Zhiling_Lan/publication/252020321_Practical_online_failure_prediction_for_Blue_GeneP_Period-based_vs_event-driven/links/540f00260cf2df04e759db4a/Practical-online-failure-prediction-for-Blue-Gene-P-Period-based-vs-event-driven.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/yu2011practical.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/yu2011practical.txt",
    },
  },
  {
    authors: ["H. Song", "Y. Yin", "Y. Chen", "X.-H. Sun"],
    title:
      "A Cost-intelligent Application-specific Data layout Scheme for Parallel File Systems",
    venue:
      "The 20th International ACM Symposium on High Performance Distributed Computing (HPDC'11), San Jose, CA",
    type: "Conference",
    date: "June, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/songhpdcp37.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2011cost.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2011cost.txt",
    },
  },
  {
    authors: ["Y. Chen", "X.-H. Sun", "R. Thakur", "P. C. Roth", "W. D. Gropp"],
    title: "LACIO: A New Collective I/O Strategy for Parallel I/O Systems",
    venue:
      "The IEEE International Parallel and Distributed Processing Symposium (IPDPS' 11), Anchorage, AK, USA",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/PID1656687_LACIO.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2011lacio.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2011lacio.txt",
    },
  },
  {
    authors: [
      "Z. Zheng",
      "L. Yu",
      "W. Tang",
      "Z. Lan",
      "R. Gupta",
      "N. Desai",
      "S. Coghlan",
      "D. Buettner",
    ],
    title: "Co-Analysis of RAS Log and Job Log on Blue Gene/P",
    venue:
      "The IEEE International Parallel and Distributed Processing Symposium (IPDPS' 11), Anchorage, AK, USA",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel5/6011824/6012804/06012893.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zheng2011co.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zheng2011co.txt",
    },
  },
  {
    authors: ["W. Tang", "Z. Lan", "N. Desai", "D. Buettner", "Y. Yu"],
    title: "Reducing Fragmentation on Torus-Connected Supercomputers",
    venue:
      "The IEEE International Parallel and Distributed Processing Symposium (IPDPS' 11), Anchorage, AK, USA",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/wei-ipdps-11.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/tang2011reducing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/tang2011reducing.txt",
    },
  },
  {
    authors: ["H. Song", "Y. Chen", "X.-H. Sun"],
    title:
      "A Hybrid Shared-nothing/Shared-data Storage Architecture for Large Scale Databases(Poster Presentation)",
    venue:
      "The 11th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid'11), Newport Beach, CA, USA",
    type: "Poster",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Hybrid-Poster-ccgrid.pdf",
    },
  },
  {
    authors: ["H. Song", "Y. Yin", "X.-H. Sun", "R. Thakur", "S. Lang"],
    title:
      "A Segment-Level Adaptive Data Layout Scheme for Improved Load Balance in Parallel File Systems",
    venue:
      "The 11th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid'11), Newport Beach, CA, USA",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/fine-grained_layout_ccgrid.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2011segment.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2011segment.txt",
    },
  },
  {
    authors: ["K. Zhang", "Z. Wang", "Y. Chen", "H. Zhu", "X.-H. Sun"],
    title:
      "PAC-PLRU: A Cache Replacement Policy to Salvage Discarded Predictions from Hardware Prefetchers",
    venue:
      "The 11th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid'11), Newport Beach, CA, USA",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/kzhangccgrid11.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhang2011pac.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhang2011pac.txt",
    },
  },
  {
    authors: ["H. Song", "X.-H. Sun", "Y. Che"],
    title:
      "A Hybrid Shared-nothing/Shared-data Storage Scheme for Large-scale Data Processing",
    venue:
      "The 9th IEEE International Symposium on Parallel and Distributed Processing with Applications (ISPA'11), Busan, Korea",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Hybrid-Song-ispa11.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2011hybrid.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2011hybrid.txt",
    },
  },
  {
    authors: ["H. Jin", "K. Qiao", "X.-H. Sun", "Y. Li"],
    title:
      "Performance under Failures of MapReduce Applications (Poster Presentation)",
    venue:
      "The 11th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid'11), Newport Beach, CA, USA",
    type: "Conference",
    date: "May, 2011",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/PID1705069.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2011performance.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2011performance.txt",
    },
  },
  {
    authors: ["H. Jin", "X.-H. Sun", "Y. Chen", "T. Ke"],
    title: "REMEM: REmote MEMory as Checkpointing Storage",
    venue:
      "The 2nd International Conference on Cloud Computing, Indianapolis, IN, USA",
    type: "Conference",
    date: "November, 2010",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cloudcom-Jin.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2010remem.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2010remem.txt",
    },
  },
  {
    authors: ["H. Song", "X.-H. Sun", "H. Jin", "Y. Chen"],
    title:
      "Trace-based Adaptive Data Layout Optimization for Parallel File systems (Poster Presentation)",
    venue:
      "The 5th Petascale Data Storage Workshop, in conjunction with SuperComputing 2010, New Orleans, LA, USA",
    type: "Workshop",
    date: "November, 2010",
    tags: [],
    links: {
      bibtex: "http://cs.iit.edu/~scs/assets/files/song2010trace.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/song2010trace.txt",
    },
  },
  {
    authors: ["R. Ge", "X. Feng", "J. Hu", "X.-H. Sun"],
    title: "Assessing Energy Efficiency of Parallel I/O Systems",
    venue:
      "The ACM/IEEE SuperComputing Conference (SC'10), New Orleans, LA, USA",
    type: "Conference",
    date: "November, 2010",
    tags: [],
    links: {},
  },
  {
    authors: ["Y. Chen", "X.-H. Sun", "R. Thakur", "H. Song", "H. Jin"],
    title: "Improving Parallel I/O Performance with Data Layout Awareness",
    venue:
      "The IEEE International Conference on Cluster Computing 2010 (Cluster10), Heraklion, Greece",
    type: "Conference",
    date: "September, 2010",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cluster10.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2010improving.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2010improving.txt",
    },
  },
  {
    authors: ["H. Jin", "Y. Chen", "H. Zhu", "X.-H. Sun"],
    title: "Optimizing HPC Fault-Tolerant Environment: An Analytical Approach",
    venue:
      "The 39th International Conference on Parallel Processing (ICPP'2010), San Diego, CA, USA",
    type: "Conference",
    date: "September, 2010",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/icpp-jin.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/jin2010optimizing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/jin2010optimizing.txt",
    },
  },
  {
    authors: ["Y. Chen", "H. Zhu", "H. Jin", "X.-H. Sun"],
    title:
      "Improving the Effectiveness of Context-based Prefetching with Multi-order Analysis",
    venue:
      "The 3rd International Workshop on Parallel Programming Models and Systems Software for High-End Computing (P2S2), San Diego, CA, USA",
    type: "Workshop",
    date: "September, 2010",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/p2s2-Chen.pdf" },
  },
  {
    authors: ["H. Zhu", "Y. Chen", "X.-H. Sun"],
    title: "Timing Local Streams: Improving Timeliness in Data Prefetching",
    venue:
      "The 24th International Conference on Supercomputing (ICS'10), Tsukuba, Japan",
    type: "Conference",
    date: "June, 2010",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ICS_220.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/zhu2010timing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zhu2010timing.txt",
    },
  },
  {
    authors: ["Z. Lan", "J. Gu", "Z. Zheng", "R. Thakur", "S. Coghlan"],
    title:
      "A Study of Dynamic Meta-Learning for Failure Prediction in Large-Scale Systems",
    venue:
      "Journal of Parallel and Distributed Computing, vol. 70, pp. 630-643",
    type: "Journal",
    date: "June, 2010",
    tags: [],
    links: {
      pdf: "https://www.sciencedirect.com/science/article/pii/S0743731510000377",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lan2010study.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lan2010study.txt",
    },
  },
  {
    authors: ["Z. Zheng", "Z. Lan", "R. Gupta", "S. Coghlan", "P. Beckman"],
    title:
      "A Practical Failure Prediction with Location and Lead Time for Blue Gene/P",
    venue:
      "The Fault-Tolerance at Extreme Scale workshop (in conjunction with DSN'10), Chicago, IL, USA",
    type: "Workshop",
    date: "June, 2010",
    tags: [],
    links: {
      bibtex: "http://cs.iit.edu/~scs/assets/files/zheng2010practical.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/zheng2010practical.txt",
    },
  },
  {
    authors: ["Y. Chen", "H. Song", "R. Thakur", "X.-H. Sun"],
    title: "A Layout-aware Optimization Strategy for Collective I/O",
    venue:
      "The High Performance Distributed Computing (HPDC-2010), Chicago, IL, USA",
    type: "Workshop",
    date: "June, 2010",
    tags: [],
    links: {
      pdf: "https://www.researchgate.net/profile/Huaiming_Song/publication/220717222_A_layout-aware_optimization_strategy_for_collective_IO/links/004635294810aadedb000000.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2010layout.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2010layout.txt",
    },
  },
  {
    authors: ["Y. Chen", "H. Zhu", "X.-H. Sun"],
    title: "An Adaptive Data Prefetcher for High-Performance Processors",
    venue:
      "The 10th IEEE/ACM International Symposium on Cluster, Cloud and Grid Computing (CCGrid'10), Melbourne, Australia",
    type: "Conference",
    date: "May, 2010",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/ccgrid10-adaptpf.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/chen2010adaptive.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/chen2010adaptive.txt",
    },
  },
  {
    authors: ["R. Ge", "X. Feng", "S. Subramanya", "X.-H. Sun"],
    title:
      "Characterizing the Energy Efficiency of I/O Intensive Parallel Applications on Power-Aware Clusters",
    venue:
      "The 6th workshop on high performance power-aware computing in conjunction with the 24th IEEE International Parallel and Distributed Processing Symposium, Atlanta, GA, USA",
    type: "Workshop",
    date: "April, 2010",
    tags: [],
    links: {
      pdf: "https://www.researchgate.net/profile/Xizhou_Feng/publication/220950980_Characterizing_energy_efficiency_of_IO_intensive_parallel_applications_on_power-aware_clusters/links/0fcfd511907cc29784000000.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/ge2010characterizing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/ge2010characterizing.txt",
    },
  },
  {
    authors: ["W. Tang", "N. Desai", "D. Buettner", "Z. Lan"],
    title:
      "Analyzing and Adjusting User Runtime Estimates to Improve Job Scheduling on Blue Gene/P",
    venue: "The IPDPS'10, Atlanta, GA, USA",
    type: "Conference",
    date: "April, 2010",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel5/5465899/5470342/05470474.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/tang2010analyzing.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/tang2010analyzing.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "Y. Chen"],
    title: "Reevaluating Amdahl's Law in the Multicore Era",
    venue:
      "Journal of Parallel and Distributed Computing, vol. 70, no. 2, pp. 183-188",
    type: "Journal",
    date: "February, 2010",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Reevaluating%20Amdahl's%20Law.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/Amdahl-law.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/sun2010reevaluating.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/sun2010reevaluating.txt",
    },
  },
  {
    authors: ["Z. Lan", "Z. Zheng", "Y. Li"],
    title: "Toward Automated Anomaly Identification in Large-Scale Systems",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems, vol. 21, no. 2, pp. 174 - 187",
    type: "Journal",
    date: "February, 2010",
    tags: [],
    links: {
      pdf: "https://ieeexplore.ieee.org/iel5/71/5372118/04815224.pdf",
      bibtex: "http://cs.iit.edu/~scs/assets/files/lan2010toward.bib",
      citation: "http://cs.iit.edu/~scs/assets/files/lan2010toward.txt",
    },
  },
  {
    authors: ["X.-H. Sun", "S. Byna", "D. J. Holmgren"],
    title: "Modeling Data Access Contention in Multicore Architectures",
    venue:
      "The Fifteenth International Conference on Parallel and Distributed Systems (ICPADS'09), Shenzhen, China",
    type: "Conference",
    date: "December, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["B. Xie", "Y. Chen", "X.-H. Sun", "H. Jin"],
    title: "Performance under Failure of Multi-tier Web Services",
    venue:
      "Workshop on Internet-based Virtual Computing Environment (in conjunction with ICPADS'09), Shenzhen, China",
    type: "Workshop",
    date: "December, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "Y. Chen", "Y. Yin"],
    title: "Data Layout Optimization for Petascale File Systems",
    venue:
      "The 4th Petascale Data Storage Workshop (in conjunction with ACM/IEEE SC'09), Portland, OR, USA",
    type: "Workshop",
    date: "November, 2009",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/pdsw09.pdf" },
  },
  {
    authors: ["H. Jin", "X.-H. Sun", "B. Xie", "Y. Chen"],
    title:
      "An Implementation and Evaluation of Memory-based Checkpointing (Poster Presentation)",
    venue: "The ACM/IEEE SuperComputing Conference(SC'09), Portland, OR, USA",
    type: "Conference",
    date: "November, 2009",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sc09_jin.pdf" },
  },
  {
    authors: ["X.-H. Sun", "C. Du", "H. Zou", "Y. Chen", "P. Shukla"],
    title: "V-MCS: A Configuration System for Virtual Machines",
    venue:
      "The Workshop on Web 2.0 on e-Research Infrastructure, Services and Applications (in conjunction with Cluster'09), New Orleans, LA, USA",
    type: "Workshop",
    date: "August, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["Z. Zheng", "Z. Lan"],
    title:
      "Reliability-Aware Scalability Models for High Performance Computing",
    venue: "The IEEE Cluster'09, New Orleans, LA, USA",
    type: "Conference",
    date: "August, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["W. Tang", "Z. Lan", "N. Desai", "D. Buettner"],
    title: "Fault-Aware, Utility-Based Job Scheduling on Blue Gene/P Systems",
    venue: "The IEEE Cluster'09, New Orleans, LA, USA",
    type: "Conference",
    date: "August, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["Z. Zheng", "Z. Lan", "B.-H. Park", "A. Geist"],
    title: "System Log Pre-processing to Improve Failure Prediction",
    venue:
      "The IEEE/IFIP International Conference on Dependable Systems and Networks (DSN'09), Estoril, Lisbon, Portugal",
    type: "Conference",
    date: "June, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["H. Jin", "X.-H. Sun", "Z. Zheng", "Z. Lan", "B. Xie"],
    title: "Performance under Failures of DAG-based Parallel Computing",
    venue:
      "The IEEE/ACM International Symposium on Cluster Computing and the Grid (CCGrid'09), Shanghai, China",
    type: "Conference",
    date: "May, 2009",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/3622a236.pdf" },
  },
  {
    authors: ["Z. Fang", "X.-H. Sun", "Y. Chen", "S. Byna"],
    title: "Core-Aware Memory Access Scheduling Schemes",
    venue:
      "The IEEE International Parallel & Distributed Processing Symposium (IPDPS'09), Rome, Italy",
    type: "Conference",
    date: "May, 2009",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/IPDPS-1569163069-paper-1.pdf",
      slides: "http://cs.iit.edu/~scs/assets/files/CoreAwareMemoryAccess.pdf",
    },
  },
  {
    authors: ["S. Byna", "Y. Chen", "X.-H. Sun"],
    title: "Taxonomy of data prefetching for multicore processors",
    venue:
      "Journal of Computer Science and Technology, vol. 24, no. 3, pp. 405-417",
    type: "Journal",
    date: "May, 2009",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/4192.pdf" },
  },
  {
    authors: ["Y. Li", "Z. Lan", "P. Gujrati", "X.-H. Sun"],
    title: "Fault-Aware Runtime Strategies for High Performance Computing",
    venue:
      "IEEE Transactions on Parallel and Distributed Systems, vol. 20, no. 4, pp. 460-473",
    type: "Journal",
    date: "April, 2009",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/fault_aware_runtime_strategies.pdf",
    },
  },
  {
    authors: ["M. Wu", "X.-H. Sun"],
    title: "QoS of Grid Computing",
    venue:
      "Grid Technologies and Utility Computing: Concepts for Managing Large-Scale Applications (Encyclopedia of Grid Computing Technologies and Applications), Igi Global, 2009, pp 59-74, ISBN-10: 1605661848, ISBN-13: 978-1605661841",
    type: "Journal",
    date: "January, 2009",
    tags: [],
    links: {},
  },
  {
    authors: ["C. Du", "P. Shukla", "X.-H. Sun"],
    title: "Virtual Machines in Grid Environments: Dynamic Virtual Machines",
    venue:
      "Grid Computing: Infrastructure, Service, and Application (Hardcover), CRC, 2009, pp 405-431, ISBN-10: 1420067664, ISBN-13: 978-1420067668",
    type: "Journal",
    date: "January, 2009",
    tags: [],
    links: {},
  },
  {
    authors: [
      "L. Piccoli",
      "J. B. Kowalkowski",
      "J. N. Simone",
      "X.-H. Sun",
      "H. Jin",
      "D. J. Holmgren",
      "N. Seenu",
      "A. G. Singh",
      "S. Byna",
      "D. J. Holmgren",
    ],
    title: "Lattice QCD Workflows: A Case Study",
    venue:
      "3rd International Workshop on Scientific Workflows and Business Workflow Standards in e-Science (SWBES)",
    type: "Workshop",
    date: "December, 2008",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/piccoli-LatticeWorkflow.pdf",
    },
  },
  {
    authors: ["Y. Chen", "S. Byna", "X.-H. Sun", "R. Thakur", "W. D. Gropp"],
    title:
      "Hiding I/O Latency with Pre-execution Prefetching for Parallel Applications",
    venue:
      "The ACM/IEEE SuperComputing Conference (SC'08) Best paper award finalist",
    type: "Conference",
    date: "November, 2008",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sc08_prex.pdf" },
  },
  {
    authors: ["S. Byna", "Y. Chen", "X.-H. Sun", "R. Thakur", "W. D. Gropp"],
    title: "Parallel I/O Prefetching Using MPI File Caching and I/O Signatures",
    venue: "The ACM/IEEE SuperComputing Conference (SC'08)",
    type: "Conference",
    date: "November, 2008",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/pap297s4.pdf" },
  },
  {
    authors: ["X.-H. Sun", "Y. Chen", "S. Byna"],
    title: "Scalable Computing in Multicore Era",
    venue:
      "The International Symposium on Parallel Algorithms, Architectures and Programming (PAAP'08)",
    type: "Conference",
    date: "September, 2008",
    tags: [],
    links: {},
  },
  {
    authors: ["Y. Chen", "S. Byna", "X.-H. Sun", "R. Thakur", "W. D. Gropp"],
    title: "Exploring Parallel I/O Concurrency with Speculative Prefetching",
    venue: "The 37th International Conference on Parallel Processing (ICPP'08)",
    type: "Conference",
    date: "September, 2008",
    tags: [],
    links: {},
  },
  {
    authors: [
      "J. Gu",
      "Z. Zheng",
      "Z. Lan",
      "J. White",
      "E. Hocks",
      "B.-H. Park",
    ],
    title:
      "Dynamic Meta-Learning for Failure Prediction in Large-scale Systems: A Case Study",
    venue: "The 37th International Conference on Parallel Processing (ICPP'08)",
    type: "Conference",
    date: "September, 2008",
    tags: [],
    links: {},
  },
  {
    authors: ["L. Piccoli", "J. N. Simone", "J. Kowalkowski"],
    title: "Tracking LQCD Workflows",
    venue: "Lattice 2008",
    type: "Poster",
    date: "July, 2008",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/LAT08-Poster.pdf" },
  },
  {
    authors: ["Y. Li", "Z. Lan"],
    title:
      "A Fast Recovery Mechanism for Checkpointing in Networked Environments",
    venue: "The DSN'08",
    type: "Conference",
    date: "June, 2008",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/dsn08_dccs.pdf" },
  },
  {
    authors: ["S. Byna", "Y. Chen", "X.-H. Sun"],
    title: "A Taxonomy of Data Prefetching Mechanisms",
    venue:
      "The International Symposium on Parallel Architectures, Algorithms, and Networks (I-SPAN)",
    type: "Conference",
    date: "May, 2008",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/bynas-PrefetchingSurvey.pdf",
    },
  },
  {
    authors: ["Z. Lan", "Y. Li", "Z. Zheng", "P. Gujrati"],
    title: "Enhancing Application Robustness through Adaptive Fault Tolerance",
    venue: "The NSFNGS Workshop (in conjunction with IPDPS'08)",
    type: "Workshop",
    date: "April, 2008",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "Z. Lan", "Y. Li", "H. Jin", "Z. Zheng"],
    title: "Towards a Fault-aware Computing Environment",
    venue: "The High Availability and Performance Computing Workshop (HAPCW)",
    type: "Workshop",
    date: "March, 2008",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/hapcw_2008.pdf" },
  },
  {
    authors: ["Y. Chen", "X.-H. Sun", "M. Wu"],
    title: "Algorithm-System Scalability of Heterogeneous Computing",
    venue:
      "Journal of Parallel and Distributed Computing, vol. 68, pp. 1403-1412",
    type: "Journal",
    date: "January, 2008",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/YJPDC2552.pdf" },
  },
  {
    authors: ["Z. Lan", "Y. Li"],
    title:
      "Adaptive Fault Management of Parallel Applications for High Performance Computing",
    venue: "IEEE Transactions on Computers, vol. 57, no. 12, pp. 1647-1660",
    type: "Journal",
    date: "January, 2008",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/adaptive_fault_management.pdf",
    },
  },
  {
    authors: ["L. Piccoli", "X.-H. Sun", "J. N. Simone"],
    title:
      "The LQCD Workflow Experience: What We Have Learned (Poster Presentation)",
    venue: "The ACM/IEEE SuperComputing Conf. 2007 (SC'07)",
    type: "Conference",
    date: "November, 2007",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/SC07Poster.pdf" },
  },
  {
    authors: ["M. Wu", "X.-H. Sun", "H. Jin"],
    title: "Performance under Failure of High-End Computing",
    venue: "The ACM/IEEE SuperComputing Conf. 2007 (SC'07)",
    type: "Conference",
    date: "November, 2007",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/SC07_wu.pdf" },
  },
  {
    authors: ["Y. Chen", "S. Byna", "X.-H. Sun"],
    title:
      "Data Access History Cache and Associated Data Prefetching Mechanisms",
    venue: "The ACM/IEEE SuperComputing Conf. 2007 (SC'07)",
    type: "Conference",
    date: "November, 2007",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/SC07_DAHC.pdf" },
  },
  {
    authors: ["Z. Zheng", "Y. Li", "Z. Lan"],
    title: "Anomaly Localization in Large-scale Clusters",
    venue: "The IEEE Cluster'07",
    type: "Conference",
    date: "September, 2007",
    tags: [],
    links: {},
  },
  {
    authors: ["P. Gujrati", "Y. Li", "Z. Lan", "R. Thakur", "J. White"],
    title:
      "Exploring Meta-learning to Improve Failure Prediction in Supercomputing Clusters",
    venue: "The 2007 International Conference on Parallel Processing (ICPP'07)",
    type: "Conference",
    date: "September, 2007",
    tags: [],
    links: {},
  },
  {
    authors: ["Y. Li", "P. Gujrati", "Z. Lan", "X.-H. Sun"],
    title:
      "Fault-Driven Re-Scheduling For Improving System-level Fault Resilience",
    venue: "The 2007 International Conference on Parallel Processing (ICPP'07)",
    type: "Conference",
    date: "September, 2007",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "M. Wu"],
    title: "Quality of Service of Grid Computing: Resource Sharing",
    venue:
      "The 6th International Conference on Grid and Cooperative Computing(GCC'07)",
    type: "Conference",
    date: "August, 2007",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GCC-SunWu-07.pdf" },
  },
  {
    authors: ["Y. Li", "Z. Lan"],
    title:
      "Using Adaptive Fault Tolerance to Improve Application Robustness on the TeraGrid",
    venue: "The TeraGrid'07",
    type: "Workshop",
    date: "June, 2007",
    tags: [],
    links: {},
  },
  {
    authors: [
      "Z. Lan",
      "Y. Li",
      "P. Gujrati",
      "Z. Zheng",
      "R. Thakur",
      "J. White",
    ],
    title: "A Fault Diagnosis and Prognosis Service for TeraGrid Clusters",
    venue: "The TeraGrid'07",
    type: "Workshop",
    date: "June, 2007",
    tags: [],
    links: {},
  },
  {
    authors: [
      "K. Xiao",
      "N. Chen",
      "S. Ren",
      "L. Shen",
      "X.-H. Sun",
      "K. Kwiat",
      "M. Macalik",
    ],
    title:
      "A Workflow-based Non-intrusive Approach for Enhancing the Survivability of Critical Infrastructures in Cyber Environment",
    venue:
      "The 3rd International Workshop on Software Engineering for Secure Systems (SESS'07)",
    type: "Workshop",
    date: "May, 2007",
    tags: [],
    links: {},
  },
  {
    authors: ["C. Du", "X.-H. Sun", "M. Wu"],
    title: "Dynamic Scheduling with Process Migration",
    venue:
      "The IEEE International Symposium on Cluster Computing and the Grid 2007, Rio de Janeiro, Brazil",
    type: "Conference",
    date: "May, 2007",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/du-DynamicMigration.pdf",
    },
  },
  {
    authors: ["X.-H. Sun", "S. Byna", "Y. Chen"],
    title: "Improving Data Access Performance with Server Push Architecture",
    venue:
      "The NSF Next Generation Software Program Workshop (in conjunction with IPDPS '07)",
    type: "Workshop",
    date: "March, 2007",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ngs07-sbc-.pdf" },
  },
  {
    authors: ["X.-H. Sun", "S. Byna", "Y. Chen"],
    title:
      "Server-based Data Push Architecture for Multi-processor Environments",
    venue:
      "Journal of Computer Science and Technology (JCST), vol. 22, no. 5, pp. 641-652",
    type: "Journal",
    date: "January, 2007",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/jcst-07.pdf" },
  },
  {
    authors: ["K. Cameron", "G. Ge", "X.-H. Sun"],
    title:
      "lognP and log3P: Accurate analytical models of point-to-point communication in distributed systems",
    venue: "IEEE Trans. on Computer, vol. 56, no. 3, pp. 314-327",
    type: "Journal",
    date: "January, 2007",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/04079515-IEEEComputer.pdf",
    },
  },
  {
    authors: ["S. Byna", "X.-H. Sun", "R. Nakhoul"],
    title: "Memory Servers: A Scope of SOA for High-End Computing",
    venue: "The IEEE Service Computing Conference (SCC) 2006, Chicago",
    type: "Conference",
    date: "September, 2006",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/byna_scc-06.pdf" },
  },
  {
    authors: ["S. Byna", "X.-H. Sun", "R. Thakur", "W. D. Gropp"],
    title:
      "Automatic Memory Optimizations for Improving MPI Derived Datatype Performance",
    venue:
      "13th The European PVM/MPI Conference, Bonn, Germany, Lecture Notes in Computer Science, Springer",
    type: "Conference",
    date: "September, 2006",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/suren-mpi-06.pdf" },
  },
  {
    authors: ["M. Wu", "X.-H. Sun", "Y. Chen"],
    title: "QoS Oriented Resource Reservation in Shared Environments",
    venue:
      "The 6th IEEE International Symposium on Cluster Computing and the Grid, Singapore",
    type: "Conference",
    date: "May, 2006",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/wusunchen-QoSReservation.pdf",
    },
  },
  {
    authors: ["C. Du", "X.-H. Sun"],
    title: "MPI-Mitten: Enabling Migration Technology in MPI",
    venue:
      "The 6th IEEE International Symposium on Cluster Computing and the Grid, Singapore",
    type: "Conference",
    date: "May, 2006",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sun-mitten.pdf" },
  },
  {
    authors: ["A. Eswaradass", "X.-H. Sun", "M. Wu"],
    title:
      "Network Bandwidth Predictor (NBP): A System for Online Network Performance Forecasting",
    venue:
      "The 6th IEEE International Symposium on Cluster Computing and the Grid, Singapore",
    type: "Conference",
    date: "May, 2006",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/CCGrid06NBPCameraReady.pdf",
    },
  },
  {
    authors: ["M. Wu", "X.-H. Sun"],
    title: "Grid Harvest Service: A Performance System of Grid Computing",
    venue:
      "Journal of Parallel and Distributed Computing, vol. 66, no. 10, pp. 1322-1337, 2006. (ACM Computing Review)",
    type: "Journal",
    date: "January, 2006",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GHS-JPDC2006.pdf" },
  },
  {
    authors: ["Y. Chen", "X.-H. Sun"],
    title: "STAS: A Scalability Testing and Analysis System",
    venue:
      "The IEEE International conference on Cluster Computing 2006(Cluster2006)",
    type: "Conference",
    date: "January, 2006",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/chen-STAS(final-version).pdf",
    },
  },
  {
    authors: ["Y. Li", "Z. Lan"],
    title:
      "Exploit Failure Prediction for Adaptive Fault-Tolerance in Cluster Computing",
    venue:
      "The IEEE/ACM International Symposium on Cluster Computing and the Grid (CCGrid06) , Singapore",
    type: "Conference",
    date: "January, 2006",
    tags: [],
    links: {},
  },
  {
    authors: ["Z. Lan", "Y. Li"],
    title: "Failure-Aware Resource Selection for Grid Computing",
    venue:
      "The IEEE Conference on Dependable Systems and networks (Fast Abstract)",
    type: "Conference",
    date: "January, 2006",
    tags: [],
    links: {},
  },
  {
    authors: ["M. Wu", "X.-H. Sun"],
    title:
      "The GHS Grid Scheduling System: Implementation and Performance Comparison",
    venue:
      "The NSF Next Generation Software Program Workshop (in conjunction with IPDPS06), IEEE CS press",
    type: "Workshop",
    date: "January, 2006",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GHS-ngs-Sun.pdf" },
  },
  {
    authors: ["X.-H. Sun", "Y. Chen", "M. Wu"],
    title: "Scalability of Heterogeneous Computing",
    venue:
      "The 34rd International Conference on Parallel Processing, Oslo, Norway",
    type: "Conference",
    date: "June, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sunxh_scalability.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "A. Brusilovsky", "X.-H. Sun"],
    title:
      "Ubiquitous Services in the Next Generation Network: Constraining and Facilitating Forces",
    venue:
      "The Eurescom Summit 2005: Ubiquitous Services and Applications Exploiting the Potential, Heidelberg, Germany",
    type: "Conference",
    date: "April, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/Eurescom-2005.pdf" },
  },
  {
    authors: ["A. Eswaradass", "X.-H. Sun", "M. Wu"],
    title:
      "A Neural Network Based Predictive Mechanism for Available Bandwidth",
    venue:
      "The 19th International Parallel and Distributed Processing Symposium (IPDPS05), Denver, Colorado",
    type: "Conference",
    date: "April, 2005",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/AlakSunWuIPDPS2005.pdf",
    },
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title:
      "Highly Parallel Algorithms for the Numerical Simulation of Unsteady Diffusion Processes",
    venue:
      "The 19th International Parallel and Distributed Processing Symposium (IPDPS05), Denver, Colorado",
    type: "Conference",
    date: "April, 2005",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "M. Wu"],
    title: "GHS, A Performance System of Grid Computing",
    venue:
      "The NSF Next Generation Software Program Workshop ( in conjunction with IPDPS05), Denver, Colorado",
    type: "Workshop",
    date: "April, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ngs-ipdps05.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun"],
    title:
      "A Systematic Approach for Closer Integration of Cellular and Internet Services",
    venue: "IEEE Network, pp: 26-32",
    type: "Workshop",
    date: "February, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/IEEE-Network-2005.pdf" },
  },
  {
    authors: ["S. Byna", "K. Cameron", "X.-H. Sun"],
    title: "Isolating costs in shared memory communication buffering",
    venue: "Parallel Processing Letters, vol. 15, no. 4, pp. 357-365",
    type: "Journal",
    date: "January, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ppl_mem_isolate.pdf" },
  },
  {
    authors: ["A.-A. Chien", "X.-H. Sun", "Z.-W. Xu"],
    title: "Viewpoints on Grid Standards",
    venue: "J. Comput. Sci. Technol. vol. 20, no. 1, pp. 141-143",
    type: "Journal",
    date: "January, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/caa.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun", "A. Brusilovsky"],
    title:
      "Inhibitors for the Ubiquitous Deployment of Services in the Next Generation Network",
    venue: "IEEE Communications, vol. 43, no. 9",
    type: "Journal",
    date: "January, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/IEEE-ComMag-2005.pdf" },
  },
  {
    authors: ["X. He", "X.-H. Sun"],
    title: "Incorporating Data Movement into Grid Task Scheduling",
    venue: "Lecture Notes in Computer Science, vol. 3795, pp. 394 - 405",
    type: "Conference",
    date: "January, 2005",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/gcc-05.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun"],
    title:
      "Extensions to an Internet signaling protocol to support telecommunication services",
    venue: "The IEEE Global Telecommunications Conference, Dallars, TX.",
    type: "Conference",
    date: "November, 2004",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/VijaySunGlobecome04.pdf",
    },
  },
  {
    authors: ["M. Wu", "X.-H. Sun"],
    title:
      "Memory Conscious Task Partition and Scheduling in Grid Environments",
    venue:
      "The 5th IEEE/ACM International Workshop on Grid Computing (in conjunction with SC 2004), pp. 138-145, Pittsburgh",
    type: "Workshop",
    date: "November, 2004",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/mwu-memory.pdf" },
  },
  {
    authors: ["S. Byna", "X.-H. Sun", "W. D. Gropp", "R. Thakur"],
    title: "Predicting the Memory-Access Cost Based on Data Access Patterns",
    venue: "The IEEE International Conference on Cluster Computing, San Diego",
    type: "Conference",
    date: "September, 2004",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/cluster04-camera-90.pdf",
    },
  },
  {
    authors: ["C. Du", "S. Ghosh", "S. Shankar", "X.-H. Sun"],
    title: "A Runtime System for Automatic Rescheduling of MPI Program",
    venue:
      "The 33rd International Conference on Parallel Processing, Montreal, Quebec, Canada, Aug. 15-18",
    type: "Conference",
    date: "August, 2004",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sunx_rescheduling.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "Communication State Transfer for the Mobility of Concurrent Heterogeneous Computing",
    venue: "IEEE Trans. on Computers, vol. 53, no. 10, pp. 1260-1273",
    type: "Journal",
    date: "January, 2004",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/01327577.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun"],
    title: "Terminating Telephony Services on the Internet",
    venue: "ACM/IEEE Trans. on Networking, vol. 12, no. 4, pp. 571-581",
    type: "Journal",
    date: "January, 2004",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/VijaySunNetworking04.pdf",
    },
  },
  {
    authors: ["X.-H. Sun", "A. R. Blatecky"],
    title: "Middleware: the key to next generation computing",
    venue: "J. Parallel Distrib. Comput. 64(6): 689-691",
    type: "Journal",
    date: "January, 2004",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sunmiddleware.pdf" },
  },
  {
    authors: ["X.-H. Sun", "W. Zhang"],
    title:
      "A Parallel Two-Level Hybrid Method for Tridiagonal Systems, and its Application to Fast Poisson Solvers",
    venue:
      "IEEE Trans. on Parallel and Distributed Systems, vol. 15, no. 2, pp. 97-106",
    type: "Journal",
    date: "January, 2004",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sunzhang04IPDS.pdf" },
  },
  {
    authors: ["M. Wu", "X.-H. Sun"],
    title:
      "Self-adaptive Task Allocation and Scheduling of Meta-tasks in Non-dedicated Heterogeneous Computing",
    venue:
      "International Journal of High Performance Computing and Networking , vol. 2, no. 2/3/4, pp. 186-197",
    type: "Journal",
    date: "January, 2004",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/IJHPCN-wusun-final.pdf",
    },
  },
  {
    authors: ["S. Byna", "W. D. Gropp", "X.-H. Sun", "R. Thakur"],
    title:
      "Improving the Performance of MPI Derived Datatypes by Optimizing Memory-Access Cost",
    venue:
      "The IEEE International Conference on Cluster Computing, 2003, Hong Kong",
    type: "Conference",
    date: "December, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/135_byna_s.pdf" },
  },
  {
    authors: ["C. Du", "X.-H. Sun", "K. Chanchio"],
    title:
      "HPCM: A Pre-compiler Aided Middleware for the Mobility of Legacy Code",
    venue:
      "The IEEE International Conference on Cluster Computing, 2003, Hong Kong",
    type: "Conference",
    date: "December, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/192_Du_C.pdf" },
  },
  {
    authors: ["M. Wu", "X.-H. Sun"],
    title:
      "A General Self-adaptive Task Scheduling System for Non-dedicated Heterogeneous Computing",
    venue:
      "The IEEE International Conference on Cluster Computing, 2003, Hong Kong",
    type: "Conference",
    date: "December, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/cluster03_wusun.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun"],
    title: "Accessing telephony services from the Internet",
    venue:
      "The IEEE International Conference on Computer Communications and Networks} (ICCCN03), Dallars, TX.",
    type: "Conference",
    date: "October, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GuSuICCCN03.pdf" },
  },
  {
    authors: ["A. Daftari", "N. Mehta", "S. Bakre", "X.-H. Sun"],
    title: "On Design Framework of Context Aware Embedded Systems",
    venue:
      "The 2003 DoD Monterey Workshop, Software Engineering for Embedded Systems: From Requirements to Implementation, Chicago",
    type: "Workshop",
    date: "September, 2003",
    tags: [],
    links: {},
  },
  {
    authors: [
      "S. Anand",
      "S. Yoginath",
      "G. Laszewski",
      "B. Alunkal",
      "X.-H. Sun",
    ],
    title: "Flow-based Multistage Co-allocation Service",
    venue:
      "The 2003 International Conference on Communications in Computing, Las Vegas, Nevada",
    type: "Conference",
    date: "June, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/coalloc.pdf" },
  },
  {
    authors: [
      "G. Laszewski",
      "B. Alunkal",
      "J. Gawor",
      "R. Madhuri",
      "P. Plaszezak",
      "X.-H. Sun",
    ],
    title: "A File Transfer Component for Grids",
    venue:
      "The 2003 International Conference on Parallel and Distributed Processing Techniques and Applications, Las Vegas, Nevada",
    type: "Conference",
    date: "June, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/alunbeu--gridftp.pdf" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun"],
    title: "Services spanning heterogeneous networks",
    venue:
      "The 2003 IEEE International Conference on Communications (ICC 2003), Anchorage, Alaska",
    type: "Conference",
    date: "May, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GuSuIcc03.pdf" },
  },
  {
    authors: ["K. Cameron", "X.-H. Sun"],
    title: "Quantifying Locality Effect in Data Access Delay: Memory logP",
    venue:
      "The 2003 IEEE International Parallel and Distributed Processing Symposium (IPDPS 2003), Nice, France",
    type: "Conference",
    date: "April, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/KSipdps03.PDF" },
  },
  {
    authors: ["V. K. Gurbani", "X.-H. Sun"],
    title: "Internet Service Execution for Telephony Events",
    venue:
      "The IEEE International Conference for Intelligence in Next Generation Networks (ICIN) 2003, Bordeaux, France",
    type: "Conference",
    date: "April, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GuSuIcin03.pdf" },
  },
  {
    authors: ["X.-H. Sun", "M. Wu"],
    title:
      "Grid Harvest Service: A System for Long-Term, Application-Level Task Scheduling",
    venue:
      "The 2003 IEEE International Parallel and Distributed Processing Symposium (IPDPS 2003), Nice, France",
    type: "Conference",
    date: "April, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/SWipdps03.PDF" },
  },
  {
    authors: ["X. He", "X.-H. Sun", "G. Laszewski"],
    title: "QoS Guided Min-Min Heuristic for Grid Task Scheduling",
    venue:
      "Journal of Computer Science and Technology, Special Issue on Grid Computing, 18(4)",
    type: "Journal",
    date: "January, 2003",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/jcst_XHe-5-28.pdf" },
  },
  {
    authors: ["X. He", "X.-H. Sun", "G. Laszewski"],
    title: "A QoS Guided Scheduling Algorithm for the Computational Grid",
    venue:
      "The International Workshop on Grid and Cooperative Computing (GCC02), Hainan, Chian",
    type: "Workshop",
    date: "December, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/GCC02_XHe.pdf" },
  },
  {
    authors: ["L. Gong", "X.-H. Sun", "E. Waston"],
    title:
      "Performance Modeling and Prediction of Non-Dedicated Network Computing",
    venue: "IEEE Trans. on Computers, Vol 51, No 9, pp. 1041-1055",
    type: "Journal",
    date: "September, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/perf2002.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "SNOW : Software Systems for Process Migration in High-Performance, Heterogeneous Distributed Environments",
    venue:
      "The 2002 workshops of International Conference on Parallel Processing Workshop on Compile and Runtime Techniques for Parallel Computing, IEEE CS Press, Vancouver, Canada",
    type: "Workshop",
    date: "August, 2002",
    tags: [],
    links: {},
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title:
      "Stabilized Explicit-implicit Domain Decomposition Methods for the Numerical Solution of Parabolic Equations",
    venue: "SIAM Journal on Scientific Computing , Vol. 24, No. 1, 335-358",
    type: "Journal",
    date: "July, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ZhSu02ST.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "Data collection and restoration for heterogeneous process migration",
    venue: "SOFTWARE--PRACTICE AND EXPERIENCE, 32:1-27",
    type: "Journal",
    date: "April, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/spe464.pdf" },
  },
  {
    authors: ["X.-H. Sun", "W. Zhang"],
    title:
      "A Parallel Two-level Hybrid Method for Diagonal Dominant Tridiagonal Systems",
    venue:
      "The 2002 International Parallel and Distributed Processing Symposium (IPDPS 2002), Fort Lauderdale, FL",
    type: "Conference",
    date: "April, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/sunzhang02.pdf" },
  },
  {
    authors: ["X.-H. Sun"],
    title: "Scalability Versus Execution Time in Scalable Systems",
    venue:
      "Journal of Parallel and Distributed Computing, Vol. 62, No. 2, pp. 173-192",
    type: "Journal",
    date: "February, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/scalability2002.pdf" },
  },
  {
    authors: ["X.-H. Sun", "T. Fahringer", "M. Pantano"],
    title: "SCALA: A Performance System for Scalable Computing",
    venue:
      "International Journal of High Performance Computing Applications (IJHPCA), Vol. 16, No. 4, Autumn 2002",
    type: "Journal",
    date: "January, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/HPC031071.pdf" },
  },
  {
    authors: ["X. Wu", "Q. Chen", "X.-H. Sun"],
    title:
      "Design and Development of a Scalable Distributed Debugger for Cluster Computing",
    venue: "Cluster Computing, 5, 365-375, 2002",
    type: "Conference",
    date: "January, 2002",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/5093440.pdf" },
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title:
      "Stable, Globally Non-iterative, Non-overlapping Domain Decomposition Parallel Solvers for Parabolic Problems",
    venue: "The SuperComputing 2001 (SC2001), Denver",
    type: "Conference",
    date: "November, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/seidd.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "Communication State Transfer for the Mobility of Concurrent Heterogenous Computing",
    venue:
      "The 2001 the International Conference on Parallel Processing (ICPP 2001) Best Paper Award",
    type: "Conference",
    date: "September, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/commobile.pdf" },
  },
  {
    authors: ["X.-H. Sun", "D. He", "K. Cameron", "Y. Luo"],
    title:
      "Adaptive Multivariate Regression for Advanced Memory System Evaluation: Application and Experience",
    venue:
      "Journal of Performance Evaluation, Volume 45, Issue 1, May 2001, Pages 1-18",
    type: "Journal",
    date: "May, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/adaptive.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "A Protocol Design for Communication State Transfer for Distributed Computing",
    venue:
      "The 21st International Conference on Distributed Computing Systems (ICDCS 2001)",
    type: "Conference",
    date: "April, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/icdcs01.pdf" },
  },
  {
    authors: ["X.-H. Sun"],
    title:
      "A Scalable Parallel Algorithm for Periodic Symmetric Toeplitz Tridiagonal Systems",
    venue:
      "International Journal of Computer Research, Vol. 10, No. 1, 2001, pp. 89-98.",
    type: "Journal",
    date: "January, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/scala01.pdf" },
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title: "A High Order Fast Direct Solver for Singular Poisson Equations",
    venue: "Journal of Computational Physics, Vol. 171, pp. 79-94 (2001).",
    type: "Journal",
    date: "January, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/highorder2001.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "Data Collection and Restoration for Heterogeneous Process Migration",
    venue:
      "The 2001 International Parallel and Distributed Processing Symposium (IPDPS 2001).",
    type: "Conference",
    date: "January, 2001",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ippds01.pdf" },
  },
  {
    authors: ["D. Khettry", "X.-H. Sun"],
    title: "A Windows-NT Virtual Collaboratory For Technical Computing",
    venue:
      "International Journal on Advances in Engineering Software, Vol. 31, pp. 717-722",
    type: "Journal",
    date: "September, 2000",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/dnasa.pdf" },
  },
  {
    authors: ["T. Fahringer", "B. Scholz", "X.-H. Sun"],
    title:
      "Execution-driven performance analysis for distributed and parallel systems",
    venue:
      "The Second ACM International Workshop on Software and Performance (WOSP'2000)",
    type: "Workshop",
    date: "September, 2000",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "K. Cameron"],
    title:
      "A Statistical-Empirical Hybrid Approach to Hierarchical Memory Analysis",
    venue:
      "The Euro-Par 2000, Lecture Notes in Computer Science 1900, Springer",
    type: "Conference",
    date: "September, 2000",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/europar.pdf" },
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title:
      "A High Order ADI Method For Separable Generalized Helmholtz Equations",
    venue:
      "International Journal on Advances in Engineering Software, Vol. 31, pp. 585-592",
    type: "Journal",
    date: "August, 2000",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/nasa00.ps" },
  },
  {
    authors: ["W. Cai", "X.-H. Sun"],
    title: "Adaptive Wavelet ADI Method: Application and parallelization",
    venue:
      "The Workshop on High Performance Scientific and Engineering Computing with Applications (HPSECA-00), August, 2000, IEEE Computer Press",
    type: "Workshop",
    date: "August, 2000",
    tags: [],
    links: {},
  },
  {
    authors: ["X. Wu", "X.-H. Sun"],
    title: "Performance Modeling of Interconnection Network",
    venue:
      "The IEEE Fourth International Conference/Exhibition on High Performance Computing in Asia-Pacific Region (HPC-ASIA 2000)",
    type: "Conference",
    date: "May, 2000",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "X. Wu"],
    title: "PDRS: A Performance Data Representation System",
    venue: "Lecture Notes in Computer Science, Springer",
    type: "Conference",
    date: "April, 2000",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/pdrsf.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "User-level Process Migration for Heterogeneous Distributed Parallel Computing",
    venue:
      "The Newsletter of the IEEE Technical Committee on Distributed Processing",
    type: "Journal",
    date: "January, 2000",
    tags: [],
    links: {},
  },
  {
    authors: ["K. Li", "X.-H. Sun"],
    title:
      "Average-case Analysis of Isospeed Scalability of Parallel Computations on Multiprocessors",
    venue:
      "International Journal of High Speed Computing, Vol. 11, No. 1, pp. 15-36",
    type: "Journal",
    date: "January, 2000",
    tags: [],
    links: {},
  },
  {
    authors: ["X. Wu", "Q. Chen", "X.-H. Sun"],
    title:
      "Design and Implementation of a Java-based Distributed Debugger Supporting PVM and MPI",
    venue:
      "The The 11th ISASTED Interantional Conference on Parallel and Distributed Computing and Systems, Nov. 1999, Cambridge, Massachusetts",
    type: "Conference",
    date: "November, 1999",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/pdcs99.pdf" },
  },
  {
    authors: ["D. Khettry", "X.-H. Sun"],
    title: "Virtual Collaboratory in Windows-NT Environment",
    venue:
      "The 5th NASA National Symposium on Large-Scale Analysis, Design and Intelligent Synthesis Environments",
    type: "Conference",
    date: "October, 1999",
    tags: [],
    links: {},
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title:
      "A High-Order Multilevel ADI Solver for Generalized Helmholtz Equations",
    venue:
      "The 5th NASA National Symposium on Large-Scale Analysis, Design and Intelligent Synthesis Environments",
    type: "Conference",
    date: "October, 1999",
    tags: [],
    links: {},
  },
  {
    authors: ["X. Liao", "X.-H. Sun"],
    title: "Computer Simulation of PEC Network",
    venue:
      "Journal of Simulation Practice and Theory, Vol.7, May, 1999, pp 251-278",
    type: "Journal",
    date: "May, 1999",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/simupac.pdf" },
  },
  {
    authors: ["X.-H. Sun", "M. Pantano", "T. Fahringer"],
    title: "Integrated Range Comparison for Data-Parallel Compilation Systems",
    venue: "IEEE Trans. on Parallel and Distributed Processing",
    type: "Journal",
    date: "May, 1999",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/range.pdf" },
  },
  {
    authors: ["K. Li", "X.-H. Sun"],
    title:
      "Average-Case Analysis of Isospeed Scalability of Parallel Computations on Multiprocessors",
    venue: "The IEEE Int'l Symposium on Parallel and Distributed Processing",
    type: "Conference",
    date: "April, 1999",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "M. Pantano", "T. Fahringer", "Z. Zhan"],
    title:
      "SCALA: A Framework for Performance Evaluation of Scalable Computing",
    venue:
      "The 4-th Workshop on High-Level Parallel Programming Models & Supportive Environments in Lecture Notes in Computer Science , No. 1586, Springer",
    type: "Workshop",
    date: "April, 1999",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/llncs.ps" },
  },
  {
    authors: ["X.-H. Sun", "D. He", "K. Cameron", "Y. Luo"],
    title: "A Factorial Performance Evaluation for Hierarchical Memory Systems",
    venue: "The IEEE Int'l Parallel Processing Symposium'99",
    type: "Conference",
    date: "April, 1999",
    tags: [],
    links: {},
  },
  {
    authors: ["Y. Zhuang", "X.-H. Sun"],
    title:
      "A Domain Decomposition Based Parallel Solver for Time Dependent Differential Equations",
    venue: "The SIAM Conf. on Parallel Processing for Scientific Computing",
    type: "Workshop",
    date: "March, 1999",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "V. K. Naik", "K. Chanchio"],
    title:
      "A Coordinated Approach for Process Migration in Heterogeneous Environments",
    venue: "The 1999 SIAM Parallel Processing Conference",
    type: "Conference",
    date: "March, 1999",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/siam99.ps" },
  },
  {
    authors: ["X. Wu", "Q. Chen", "X.-H. Sun"],
    title: "A Java-based distributed debugger supporting MPI and PVM",
    venue:
      "Journal of Parallel and Distributed Computing and Practice, Vol. 2, No. 4",
    type: "Journal",
    date: "January, 1999",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "M. Pantano", "T. Fahringer"],
    title: "Performance Range Comparison for Restructuring Compilation",
    venue: "The International Conference on Parallel Processing",
    type: "Conference",
    date: "August, 1998",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/icpp98.pdf" },
  },
  {
    authors: ["M. Noelle", "M. Pantano", "X.-H. Sun"],
    title:
      "Communication Overhead: Prediction and Its Influence on Scalability",
    venue:
      "The International Conference on Parallel and Distributed Processing Techniques and Applications",
    type: "Conference",
    date: "July, 1998",
    tags: [],
    links: {},
  },
  {
    authors: ["Q. Hou", "X.-H. Sun"],
    title:
      "A Three-Level Parallelization of a Spatial Direct Numerical Simulation",
    venue:
      "International Journal on Advances in Engineering Software, pp. 325-330, Vol. 29, No. 3-6",
    type: "Journal",
    date: "July, 1998",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/spacial98.pdf" },
  },
  {
    authors: ["X.-H. Sun"],
    title: "Performance Range Comparison Via Crossing Point Analysis",
    venue: "Lecture Notes in Computer Science, No. 1388, Springer-Verlag",
    type: "Conference",
    date: "March, 1998",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/mmcbs.pdf" },
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title:
      "Memory Space Representation for Heterogeneous Network Process Migration",
    venue: "The 12th International Parallel Processing Symposium",
    type: "Conference",
    date: "March, 1998",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ipps98.pdf" },
  },
  {
    authors: ["X. Liao", "X.-H. Sun"],
    title: "A Simulation Study of Packed Exponential Connection Network",
    venue: "The Int'l Conf. on Parallel and Distributed Computing Systems",
    type: "Conference",
    date: "October, 1997",
    tags: [],
    links: {},
  },
  {
    authors: ["S. T. Leutenegger", "X.-H. Sun"],
    title:
      "Limitations of Cycle Stealing of Parallel Processing on a Network of Homogeneous Workstations",
    venue:
      "Journal of Parallel and Distributed Computing, Vol.43, No. 3, pp.169-178",
    type: "Journal",
    date: "January, 1997",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/limitation.pdf" },
  },
  {
    authors: ["X.-H. Sun", "S. Moitra"],
    title:
      "Performance Comparison of a Set of Periodic and Non-Periodic Tridiagonal Solvers on SP2 and Paragon Parallel Computers",
    venue: "Concurrency: Practice and Experience, pp.1-21, Vol. 8(10)",
    type: "Journal",
    date: "January, 1997",
    tags: [],
    links: {},
  },
  {
    authors: ["K. Chanchio", "X.-H. Sun"],
    title: "MpPVM: A Software System for Non-Dedicated Heterogeneous Computing",
    venue: "The International Conference on Parallel Processing",
    type: "Conference",
    date: "August, 1996",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun"],
    title: "The Relation of Scalability and Execution Time",
    venue: "The IEEE International Parallel Processing Symposium'96",
    type: "Conference",
    date: "April, 1996",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "J. Zhu"],
    title:
      "Performance Considerations : A Case Study Using a Scalable Shared-Virtual-Memory Machines",
    venue: "IEEE Parallel and Distributed Technology, Vol 4, pp. 36-49, Winter",
    type: "Conference",
    date: "January, 1996",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/performancePre1996.pdf",
    },
  },
  {
    authors: ["X.-H. Sun", "D. Joslin"],
    title:
      "A Simple Parallel Prefix Algorithm for Almost Toeplitz Tridiagonal Systems",
    venue:
      "International Journal of High Speed Computing, Vol.7, No.4, pp. 547-576",
    type: "Journal",
    date: "December, 1995",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "J. Zhu"],
    title: "Performance Considerations of Shared Virtual Memory Machines",
    venue: "IEEE Trans. on Parallel and Distributed Systems",
    type: "Journal",
    date: "November, 1995",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/ieee95.pdf" },
  },
  {
    authors: ["X.-H. Sun"],
    title:
      "Application and Accuracy of the Parallel Diagonal Dominant Algorithm",
    venue: "Parallel Computing",
    type: "Journal",
    date: "August, 1995",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/pdd95.pdf" },
  },
  {
    authors: ["X.-H. Sun", "J. Zhu"],
    title: "Performance Prediction of Scalable Computing: A case study",
    venue: "The 28th Hawaii International Conference on System Sciences",
    type: "Conference",
    date: "January, 1995",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "D. Joslin"],
    title:
      "A Massively Parallel Algorithm for Compact Finite Difference Schemes",
    venue: "The 23rd International Conf. on Parallel Processing (ICPP'94)",
    type: "Conference",
    date: "August, 1994",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "J. Rosendale"],
    title:
      "A Green's Function Approach to Distributed Solution of Tridiagonal Systems",
    venue:
      "The 14th IMACS World Congress on Computational and Applied Mathematics, Atlanta",
    type: "Conference",
    date: "July, 1994",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "D. Rover"],
    title: "Scalability of Parallel Algorithm-Machine Combinations",
    venue: "IEEE Trans. on Parallel and Distributed Systems",
    type: "Journal",
    date: "May, 1994",
    tags: [],
    links: { pdf: "http://cs.iit.edu/~scs/assets/files/scalability94.pdf" },
  },
  {
    authors: ["X.-H. Sun", "J. Zhu"],
    title: "Shared Virtual Memory and Generalized Speedup",
    venue:
      "The IEEE International Parallel Processing Symposium'94, pp. 637-643",
    type: "Conference",
    date: "April, 1994",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun"],
    title:
      "A Scalable Parallel Algorithm for Periodic Symmetric Toeplitz Tridiagonal Systems",
    venue:
      "The Mardi Gras Conference'94: Toward Teraflop Computing and New Grand Challenge Applications",
    type: "Conference",
    date: "February, 1994",
    tags: [],
    links: {},
  },
  {
    authors: ["J. Wu", "X.-H. Sun"],
    title: "Optimal Cube-Connected Cube Multicomputers",
    venue: "Journal of Network and Computer Applications, Vol. 17, pp. 135-146",
    type: "Journal",
    date: "January, 1994",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "L. Ni"],
    title: "Scalable Problems and Memory-Bounded Speedup",
    venue: "Journal of Parallel and Distributed Computing, Vol. 19, pp.27-37",
    type: "Journal",
    date: "September, 1993",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/Sun_and_Ni_JPDC1993.pdf",
    },
  },
  {
    authors: ["X.-H. Sun", "N. Kamel"],
    title: "Preprocessing Predicates and Queries",
    venue: "Information Systems, Vol. 17, No.6, pp.465-475",
    type: "Journal",
    date: "November, 1992",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "N. Kamel"],
    title:
      "Augmenting Multikey Searching Structures for General Database Queries",
    venue:
      "International Journal of Computer Systems Science and Engineering, Vol. 7, No. 4, pp.229-235",
    type: "Journal",
    date: "October, 1992",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "H. Zhang", "L. Ni"],
    title: "Efficient Tridiagonal Solvers on Multicomputers",
    venue: "IEEE Trans. on Computers, Vol. 41, No. 3, pp.286-296",
    type: "Journal",
    date: "March, 1992",
    tags: [],
    links: {},
  },
  {
    authors: ["X.-H. Sun", "J. Gustafson"],
    title: "Toward A Better Parallel Performance Metric",
    venue: "Parallel Computing, Vol. 17, pp.1093-1109",
    type: "Journal",
    date: "December, 1991",
    tags: [],
    links: {
      pdf: "http://cs.iit.edu/~scs/assets/files/sun_perfmetric_parallelcomputing91.pdf",
    },
  },
  {
    authors: ["T. Y. Li", "H. Zhang", "X.-H. Sun"],
    title:
      "Parallel Homotopy Algorithm for Symmetric Tridiagonal Eigenvalue Problem",
    venue: "SIAM Journal of Scientific and Statistical Computing, Vol. 5",
    type: "Journal",
    date: "May, 1991",
    tags: [],
    links: {},
  },
];

export default publications;

export function getPublicationsByAuthorShortName(
  authorShortName: string
): Publication[] | undefined {
  return publications.filter((publication) =>
    publication.authors.some((author) => author.includes(authorShortName))
  );
}

export function getPublicationsByTag(
  tag: PublicationTag
): Publication[] | undefined {
  return publications.filter((publication) => publication.tags.includes(tag));
}
