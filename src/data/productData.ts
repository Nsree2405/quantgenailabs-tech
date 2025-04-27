type ProductType = {
  id: string;
  title: string;
  description: string;
  types: string[];
  applications: string[];
  papers: { title: string; url: string; }[];
  imagePath: string;
}

export const productData: Record<string, ProductType> = {
  ml: {
    id: "ml",
    title: "Machine Learning",
    description: "Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn for themselves.",
    types: [
      "Supervised Learning - Training using labeled data",
      "Unsupervised Learning - Finding patterns in unlabeled data",
      "Semi-supervised Learning - Combination of labeled and unlabeled data",
      "Reinforcement Learning - Learning through actions and rewards"
    ],
    applications: [
      "Predictive analytics and forecasting",
      "Natural language processing",
      "Computer vision and image recognition",
      "Fraud detection and risk assessment",
      "Recommendation systems"
    ],
    papers: [
      { title: "A Few Useful Things to Know About Machine Learning", url: "https://courses.cs.duke.edu/spring20/compsci527/papers/Domingos.pdf" },
      { title: "Machine Learning: Trends, Perspectives, and Prospects", url: "https://www.cs.cmu.edu/~tom/pubs/Science-ML-2015.pdf" },
      // { title: "Machine Learning for Healthcare", url: "#" }
    ],
    imagePath: "ml0.jpg"
  },
  dl: {
    id: "dl",
    title: "Deep Learning",
    description: "Deep Learning is a subset of machine learning that uses artificial neural networks with multiple layers (hence 'deep') to progressively extract higher-level features from raw input. It has revolutionized fields like computer vision and natural language processing.",
    types: [
      "Convolutional Neural Networks (CNNs) - Specialized for visual data",
      "Recurrent Neural Networks (RNNs) - For sequential data",
      "Generative Adversarial Networks (GANs) - Generate new data",
      "Transformers - Self-attention mechanisms for language processing"
    ],
    applications: [
      "Image and speech recognition",
      "Machine translation",
      "Drug discovery and development",
      "Autonomous vehicles",
      "Game playing and strategy"
    ],
    papers: [
      { title: "Deep Learning: A Critical Appraisal", url: "https://arxiv.org/pdf/1801.00631" },
      { title: "Attention Is All You Need", url: "https://arxiv.org/pdf/1706.03762" },
      // { title: "Deep Residual Learning for Image Recognition", url: "#" }
    ],
    imagePath: "dl0.jpg"
  },
  nlp: {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language in a valuable way. It bridges the gap between human communication and computer understanding.",
    types: [
      "Syntactic analysis - Understanding grammar and structure",
      "Semantic analysis - Understanding meaning and context",
      "Sentiment analysis - Analyzing emotions and opinions",
      "Machine translation - Converting between languages"
    ],
    applications: [
      "Virtual assistants like Siri and Alexa",
      "Email filters and spam detection",
      "Language translation services",
      "Content summarization",
      "Customer service chatbots"
    ],
    papers: [
      { title: "Nature of NLP", url: "https://arxiv.org/pdf/2409.19505" },
      { title: "Exploring the Landscape of Natural Language Processing Research", url: "https://arxiv.org/pdf/2307.10652" },

    ],
    imagePath: "nlp0.jpg"
  },
  robotics: {
    id: "robotics",
    title: "Robotics",
    description: "Robotics is the interdisciplinary field that integrates computer science and engineering to design, construct, operate, and use robots. Robots are programmable machines capable of carrying out complex series of actions automatically or semi-automatically.",
    types: [
      "Industrial robots - Used in manufacturing",
      "Service robots - Assist humans in various tasks",
      "Exploratory robots - Used in space or ocean exploration",
      "Medical robots - Assist in surgeries and healthcare"
    ],
    applications: [
      "Manufacturing and production",
      "Healthcare and surgery",
      "Exploration of hazardous environments",
      "Elder care and assistance",
      "Agricultural automation"
    ],
    papers: [
      { title: "A Roadmap for US Robotics: From Internet to Robotics", url: "https://www.hichristensen.com/pdf/roadmap-2016.pdf" },
      { title: "ROS: an open-source Robot Operating System", url: "https://robotics.stanford.edu/~ang/papers/icraoss09-ROS.pdf" },
    ],
    imagePath: "robo0.jpg"
  },
  drones: {
    id: "drones",
    title: "Drone Technology",
    description: "Drone technology encompasses unmanned aerial vehicles (UAVs) and the systems that support them. These aircraft operate without a human pilot on board, controlled either autonomously by computers or by remote control from an operator on the ground.",
    types: [
      "Multi-rotor drones - For stability and maneuverability",
      "Fixed-wing drones - For longer flights",
      "Single-rotor helicopters - For heavy lifting",
      "Hybrid VTOL - Vertical takeoff with fixed-wing efficiency"
    ],
    applications: [
      "Aerial photography and videography",
      "Package delivery and logistics",
      "Agriculture and crop monitoring",
      "Search and rescue operations",
      "Environmental monitoring"
    ],
    papers: [
      { title: "Unmanned Aerial Vehicles", url: "https://arxiv.org/pdf/1805.00881" },
      { title: "Autonomous Drone Racing", url: "https://arxiv.org/pdf/2301.01755" },
    ],
    imagePath: "drone0.jpg"
  },
  "quantum-computing": {
    id: "quantum-computing",
    title: "Quantum Computing",
    description: "Quantum computing harnesses quantum mechanical phenomena such as superposition and entanglement to perform computations. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously.",
    types: [
      "Gate-based quantum computers - Using quantum logic gates",
      "Quantum annealing - For optimization problems",
      "Topological quantum computing - Using anyons for stability",
      "One-way quantum computing - Measurement-based approach"
    ],
    applications: [
      "Cryptography and security",
      "Drug discovery and materials science",
      "Optimization problems in finance and logistics",
      "Machine learning enhancement",
      "Climate modeling and simulation"
    ],
    papers: [
      { title: "Evolution of Quantum Computing", url: "https://arxiv.org/pdf/2204.01856" },
      { title: "Quantum Computing: Principles and Applications", url: "https://arxiv.org/pdf/2310.09386" },
    ],
    imagePath: "qc0.jpg"
  },
  genai: {
    id: "genai",
    title: "Generative AI",
    description: "Generative AI refers to artificial intelligence systems capable of generating new content such as text, images, audio, or video that resembles human-created content. These systems learn patterns from existing data to create novel outputs with similar characteristics.",
    types: [
      "Generative Adversarial Networks (GANs) - For image generation",
      "Variational Autoencoders (VAEs) - For probabilistic generative models",
      "Diffusion Models - For high-quality image generation",
      "Transformer-based models - For text generation"
    ],
    applications: [
      "Content creation and design",
      "Text-to-image generation",
      "Music composition",
      "Synthetic data generation for training other AI models",
      "Virtual world creation"
    ],
    papers: [
      { title: "Generative Adversarial Nets", url: "https://arxiv.org/pdf/1406.2661" },
      { title: "Auto-Encoding Variational Bayes", url: "https://arxiv.org/pdf/1312.6114" },
      { title: "Diffusion Models Beat GANs on Image Synthesis", url: "https://arxiv.org/pdf/2105.05233" }
    ],
    imagePath: "gen0.jpg"
  },
  llms: {
    id: "llms",
    title: "Large Language Models",
    description: "Large Language Models (LLMs) are advanced artificial intelligence systems trained on vast amounts of text data to understand and generate human-like text. They can interpret context, answer questions, create content, and even reason about complex topics.",
    types: [
      "Encoder-only models - Like BERT, for understanding",
      "Decoder-only models - Like GPT, for generation",
      "Encoder-decoder models - Like T5, for translation tasks",
      "Sparse models - With attention mechanisms focused on specific parts"
    ],
    applications: [
      "Conversational AI and chatbots",
      "Content creation and summarization",
      "Code generation and assistance",
      "Translation and localization",
      "Educational tools and tutoring"
    ],
    papers: [
      { title: "Language Models are Few-Shot Learners", url: "https://arxiv.org/pdf/2005.14165" },
      { title: "Training Language Models to Follow Instructions", url: "https://arxiv.org/pdf/2203.02155" },
      { title: "Constitutional AI: Harmlessness from AI Feedback", url: "https://arxiv.org/pdf/2212.08073" }
    ],
    imagePath: "llm0.jpg"
  }
};
