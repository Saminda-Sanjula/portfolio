/* Portfolio Structured Data for W.H. Saminda Sanjula Supunthaka */

const PORTFOLIO_DATA = {
  profile: {
    fullName: "W.H. Saminda Sanjula Supunthaka",
    displayName: "Saminda Sanjula",
    headline: "Undergraduate at Faculty of Engineering, University of Jaffna (Electrical and Electronic)",
    location: "Anuradhapura, North Central Province, Sri Lanka",
    email: "sanjulasupunthaka47@gmail.com",
    linkedin: "https://www.linkedin.com/in/saminda-sanjula-740743312/",
    github: "https://github.com/Saminda-Sanjula",
    connections: 476,
    followers: 493,
    typewriterRoles: [
      "Electrical & Electronic Engineering Undergraduate",
      "DecodeLabs AI Internship Alumnus",
      "Computer Vision & ML Developer",
      "Medical Image Analysis Enthusiast",
      "Cybersecurity & Project Management Scholar"
    ]
  },

  skills: [
    {
      id: "python",
      name: "Python Programming",
      category: "ai",
      level: 92,
      tags: ["AI/ML", "OpenCV", "Scikit-Learn", "Streamlit", "Data Science"],
      description: "Primary language for developing ML models, computer vision pipelines, recommendation systems, and data analytics scripts.",
      icon: "code"
    },
    {
      id: "ai-ml",
      name: "Artificial Intelligence & ML",
      category: "ai",
      level: 88,
      tags: ["Deep Learning", "Neural Networks", "TF-IDF", "Cosine Similarity", "Classification"],
      description: "Hands-on experience in building content-based recommendation systems, supervised learning, and explainable AI models.",
      icon: "brain"
    },
    {
      id: "computer-vision",
      name: "Computer Vision & OCR",
      category: "ai",
      level: 86,
      tags: ["OpenCV", "Object Detection", "Word OCR", "Player Tracking", "Deep Learning"],
      description: "Developing visual detection solutions including word recognition, object tracking, and sports player detection from video frames.",
      icon: "eye"
    },
    {
      id: "gen-ai-rag",
      name: "Generative AI, RAG & Agents",
      category: "ai",
      level: 82,
      tags: ["LLM Integration", "Vector DB", "RAG Pattern", "Autonomous Agents", "Prompt Design"],
      description: "Designing intelligent educational chatbots and understanding modern Generative AI, RAG workflows, and multi-agent frameworks.",
      icon: "bot"
    },
    {
      id: "medical-image",
      name: "Medical Image Processing",
      category: "ai",
      level: 84,
      tags: ["MathWorks", "MATLAB", "Image Enhancement", "Feature Extraction", "VAE Models"],
      description: "Authorized MathWorks certification in medical image analysis, enhancing clinical diagnostic images and extracting features.",
      icon: "activity"
    },
    {
      id: "matlab-eee",
      name: "MATLAB & Signal Processing",
      category: "engineering",
      level: 85,
      tags: ["Circuit Analysis", "Control Systems", "Signal Processing", "Fourier Analysis"],
      description: "Core Electrical & Electronic Engineering computational modeling, signal filtering, control systems, and algorithmic analysis.",
      icon: "zap"
    },
    {
      id: "eee-core",
      name: "Electrical & Electronic Circuits",
      category: "engineering",
      level: 88,
      tags: ["Power Systems", "Digital Electronics", "Embedded Systems", "Instrumentation"],
      description: "Strong academic foundation from University of Jaffna Faculty of Engineering in electronics, sensors, and power distribution.",
      icon: "cpu"
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity Fundamentals",
      category: "management",
      level: 80,
      tags: ["System Safety", "Threat Mitigation", "VibernetsHub", "Secure AI"],
      description: "Understanding digital protection, security best practices, and ensuring AI/ML applications are resilient against threats.",
      icon: "shield"
    },
    {
      id: "project-mgmt",
      name: "Foundations of Project Management",
      category: "management",
      level: 86,
      tags: ["CODL Moratuwa", "Agile", "Resource Allocation", "Team Leadership"],
      description: "Certified by University of Moratuwa CODL in project planning, risk management, stakeholder communication, and delivery.",
      icon: "briefcase"
    }
  ],

  projects: [
    {
      id: "ai-recommender",
      title: "AI Career Path & Tech Stack Recommender",
      subtitle: "DecodeLabs Internship - Task 03",
      category: "ai",
      banner: "assets/ai_recommender.jpg",
      github: "https://github.com/Saminda-Sanjula",
      shortDesc: "An explainable recommendation system that suggests tailored career paths and learning roadmaps based on user skills, experience, and goals using TF-IDF & Cosine Similarity.",
      tags: ["Python", "Streamlit", "Scikit-Learn", "TF-IDF", "Cosine Similarity", "Hybrid Scoring"],
      features: [
        "Content-based filtering using TF-IDF vectorization",
        "Cosine similarity matching against tech role profiles",
        "Personalized match percentage breakdown and missing skills detection",
        "Streamlit interactive web dashboard for real-time recommendations",
        "Explainable AI reasoning providing step-by-step learning roadmaps"
      ],
      interactiveType: "recommender"
    },
    {
      id: "cv-multi-detection",
      title: "Computer Vision Multi-Detection System",
      subtitle: "DecodeLabs Internship - Task 04",
      category: "vision",
      banner: "assets/computer_vision.jpg",
      github: "https://github.com/Saminda-Sanjula",
      shortDesc: "Comprehensive visual intelligence system featuring Word Identification (OCR), Object Detection, and Cricket Player Video Frame Tracking.",
      tags: ["Python", "OpenCV", "Deep Learning", "OCR", "Object Detection", "Video Analysis"],
      features: [
        "Module 1: Word Identification & Optical Character Recognition (OCR)",
        "Module 2: Real-time Multi-Object Identification from images & video feeds",
        "Module 3: Sports Analytics - Cricket player detection and position tracking from video frames",
        "Applied in automation, surveillance, and automated video telemetry"
      ],
      interactiveType: "cv-inspector"
    },
    {
      id: "ai-learning-assistant",
      title: "AI Learning Assistant Chatbot",
      subtitle: "DecodeLabs Internship Showcase Project",
      category: "chatbot",
      banner: "assets/ai_recommender.jpg",
      github: "https://github.com/Saminda-Sanjula",
      shortDesc: "Intelligent conversational chatbot engineered to assist students by clarifying concepts, answering complex questions, and facilitating technical study.",
      tags: ["Python", "LLM Integration", "Streamlit", "Prompt Engineering", "NLP"],
      features: [
        "Interactive student Q&A assistant with structured concept explanations",
        "Integrated modern LLM API workflows for accurate subject responses",
        "Context-aware conversation handling tailored for engineering curricula",
        "Open-source deployment documented on GitHub"
      ],
      interactiveType: "chatbot-demo"
    },
    {
      id: "medical-image-proc",
      title: "Medical Image Processing & AI Diagnostics",
      subtitle: "MathWorks & Coursera Certified Project",
      category: "medical",
      banner: "assets/medical_imaging.jpg",
      github: "https://github.com/Saminda-Sanjula",
      credentialUrl: "https://lnkd.in/gpDCgrpA",
      shortDesc: "Advanced imaging techniques to process, enhance, and segment medical diagnostic images (MRI/CT scans) for computer-assisted healthcare decision support.",
      tags: ["MATLAB", "MathWorks", "Image Enhancement", "Feature Vector Analysis", "Medical AI"],
      features: [
        "Noise reduction and contrast enhancement on clinical diagnostic imagery",
        "Tissue segmentation and feature vector extraction for lesion detection",
        "Integration of deep neural networks (VAE/CNN) for computer-assisted diagnostics",
        "Authorized certificate issued by MathWorks via Coursera"
      ],
      interactiveType: "medical-enhancer"
    }
  ],

  certifications: [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI (Coursera)",
      instructor: "Andrew Ng",
      issuedDate: "May 2026",
      credentialId: "TKE9UWRXGCUP",
      badgeColor: "purple",
      description: "Mastered deep learning foundations, neural network architectures, forward/backward propagation, activation functions, gradient descent, and hyperparameter optimization."
    },
    {
      title: "Medical Image Processing",
      issuer: "MathWorks (Coursera)",
      issuedDate: "2026",
      verifiedUrl: "https://lnkd.in/gpDCgrpA",
      badgeColor: "cyan",
      description: "Applied MATLAB image processing algorithms to enhance, segment, and extract feature vectors from clinical radiology images for medical AI diagnostics."
    },
    {
      title: "DecodeLabs Virtual Internship in AI",
      issuer: "DecodeLabs",
      issuedDate: "May 2026 - Jun 2026",
      badgeColor: "emerald",
      description: "Completed intensive AI internship developing production-grade machine learning recommendation systems, computer vision detectors, and LLM chatbot applications."
    },
    {
      title: "Foundations of Project Management",
      issuer: "University of Moratuwa CODL",
      issuedDate: "2026",
      badgeColor: "amber",
      description: "Completed online program covering project scope management, team communication, risk mitigation, resource scheduling, and deliverable quality assurance."
    },
    {
      title: "Learn CyberSecurity from Zero to Hero",
      issuer: "VibernetsHub",
      issuedDate: "2026",
      badgeColor: "blue",
      description: "Comprehensive cybersecurity training on network safety, digital threat vectors, encryption principles, and defending AI software infrastructure."
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Digital Safety & System Security",
      issuedDate: "2026",
      badgeColor: "slate",
      description: "Foundational certification on digital system resilience, data safety practices, and user privacy protection in interconnected systems."
    }
  ],

  timeline: [
    {
      period: "Feb 2023 – Present",
      role: "BSc. (Hons) Electrical & Electronic Engineering",
      organization: "Faculty of Engineering, University of Jaffna",
      location: "Kilinochchi / Jaffna, Sri Lanka",
      type: "Education",
      icon: "graduation-cap",
      highlights: [
        "Engaging in advanced coursework: Circuit Analysis, Signal & Systems, Power Systems, Control Systems, Microcontrollers.",
        "Synthesizing hardware principles with computational machine learning and computer vision applications.",
        "Active member of student engineering community and technological project groups."
      ]
    },
    {
      period: "May 2026 – Jun 2026",
      role: "AI & Software Development Virtual Intern",
      organization: "DecodeLabs",
      location: "Remote",
      type: "Internship",
      icon: "briefcase",
      highlights: [
        "Completed AI Task 03: Developed Explainable AI Career Path Recommender using Scikit-Learn TF-IDF and Cosine Similarity.",
        "Completed AI Task 04: Built Computer Vision Multi-Detection System (OCR Text Detection, Object Detection, Cricket Player Video Tracking).",
        "Developed AI Learning Assistant Chatbot utilizing LLM APIs and prompt engineering for student learning.",
        "Received formal internship completion certificate acknowledging top analytical and technical performance."
      ]
    }
  ],

  posts: [
    {
      title: "The Big Picture: AI, ML, Deep Learning, GenAI, RAG & Autonomous AI Agents",
      date: "2 months ago",
      tags: ["#ArtificialIntelligence", "#MachineLearning", "#DeepLearning", "#RAG"],
      snippet: "Understanding how AI sub-disciplines nest: Machine Learning as the engine, Deep Learning simulating visual neural patterns, Generative AI creating content, and RAG/Agents empowering autonomous decision-making."
    },
    {
      title: "Milestone: Successfully Completed DecodeLabs Virtual Internship Program in AI",
      date: "1 month ago",
      tags: ["#DecodeLabs", "#ArtificialIntelligence", "#Python", "#CareerGrowth"],
      snippet: "Reflecting on hands-on AI projects built during the program: practical machine learning pipelines, OpenCV computer vision tools, and LLM chatbot integrations."
    },
    {
      title: "Turning Ideas into Impact: Foundations of Project Management (Univ of Moratuwa CODL)",
      date: "1 month ago",
      tags: ["#ProjectManagement", "#UniversityOfMoratuwa", "#Leadership"],
      snippet: "Every successful engineering project begins long before the code or circuit is complete. Clear planning, structured communication, and resource management make tech innovation viable."
    },
    {
      title: "Cybersecurity from Zero to Hero: Securing Modern AI Systems",
      date: "2 months ago",
      tags: ["#CyberSecurity", "#GenerativeAI", "#VibernetsHub"],
      snippet: "As an EEE student with a strong interest in AI and Computer Vision, I believe cybersecurity is an essential pillar. Building secure and resilient AI solutions is as critical as making them intelligent."
    }
  ],

  aiBotKnowledge: {
    greetings: [
      "Hello! I am Saminda Sanjula's AI Portfolio Assistant. How can I help you today?",
      "Welcome! Ask me anything about Saminda's EEE degree at University of Jaffna, DecodeLabs internship, or AI projects!"
    ],
    responses: [
      {
        keywords: ["project", "projects", "work", "build", "built"],
        answer: "Saminda has built several key AI projects: 1) AI Career Path Recommender (TF-IDF & Cosine Similarity), 2) Computer Vision Multi-Detection System (OCR, Object & Cricket Player Tracking), 3) AI Learning Assistant Chatbot, and 4) Medical Image Processing with MATLAB!"
      },
      {
        keywords: ["education", "university", "jaffna", "degree", "undergraduate", "study"],
        answer: "Saminda is an Undergraduate student pursuing a BSc. (Hons) in Electrical & Electronic Engineering at the Faculty of Engineering, University of Jaffna (Feb 2023 - Present)."
      },
      {
        keywords: ["internship", "decodelabs", "decode", "experience"],
        answer: "Saminda completed the DecodeLabs Virtual Internship Program in AI (May 2026 - Jun 2026), where he solved real-world machine learning tasks, developed CV detection tools, and built recommendation systems."
      },
      {
        keywords: ["certification", "certifications", "coursera", "deeplearning", "mathworks", "certificate"],
        answer: "Saminda holds 6+ certifications including DeepLearning.AI's 'Neural Networks and Deep Learning' (ID: TKE9UWRXGCUP), MathWorks 'Medical Image Processing', Moratuwa CODL 'Project Management', and VibernetsHub 'CyberSecurity'."
      },
      {
        keywords: ["contact", "email", "linkedin", "github", "location", "reach"],
        answer: "You can reach Saminda directly via email at sanjulasupunthaka47@gmail.com, view his GitHub (https://github.com/Saminda-Sanjula), or connect on LinkedIn (https://www.linkedin.com/in/saminda-sanjula-740743312/). He is based in Anuradhapura, Sri Lanka."
      },
      {
        keywords: ["skill", "skills", "python", "matlab", "vision", "ai"],
        answer: "Saminda's core skills include Python, Machine Learning, OpenCV Computer Vision, Streamlit, MATLAB, Circuit Analysis, Signal Processing, Medical Image Processing, Cybersecurity, and Project Management."
      }
    ],
    default: "Saminda Sanjula is an EEE Undergraduate at University of Jaffna specializing in AI, Computer Vision, and Cybersecurity. Feel free to ask about his projects, DecodeLabs internship, or contact info!"
  }
};
