export const portfolioData = {
  personal: {
    name: "Ravi Panchal",
    title: "Fullstack & AI/ML Engineer",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    cgpa: "8.42",
    location: "India",
    email: "ravi.panchal@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeUrl: "#",
    bio: "Passionate Fullstack & AI/ML engineer focused on building high-performance scalable web applications, RAG pipelines, computer vision systems, and automated data solutions."
  },
  
  introduction: `Hi, I'm Ravi Panchal! 🚀
B.Tech in Artificial Intelligence & Data Science (CGPA: 8.42).
I build scalable web applications, deep learning computer vision systems, and RAG knowledge engines.
Currently seeking impactful Software Engineering, Fullstack, or AI/ML roles.

Type 'guide' or 'help' to see all available commands!`,

  internships: [
    {
      id: "bisag-n",
      file: "bisag-n.txt",
      company: "BISAG-N (Bhaskaracharya National Institute for Space Applications and Geo-informatics)",
      role: "Software Engineering Intern",
      period: "Jun 2023 - Aug 2023",
      location: "Gandhinagar, Gujarat",
      tech: ["Python", "React", "Django", "PostgreSQL", "RAG", "LangChain"],
      details: [
        "Architected an enterprise RAG (Retrieval-Augmented Generation) Knowledge Assistant for multi-format document querying.",
        "Integrated vector embedding search with Milvus and OpenAI/LLaMA models, reducing document search latency by 70%.",
        "Developed responsive full-stack admin dashboards with React and Django REST framework for real-time spatial data visualization."
      ]
    },
    {
      id: "aai",
      file: "aai.txt",
      company: "Airports Authority of India (AAI)",
      role: "Data Analyst Intern",
      period: "Jan 2023 - Mar 2023",
      location: "New Delhi",
      tech: ["Python", "Pandas", "Scikit-Learn", "Power BI", "SQL"],
      details: [
        "Analyzed historical flight delay records and passenger throughput datasets using Pandas and Scikit-Learn.",
        "Built predictive models for peak-hour congestion forecasting with 89% accuracy.",
        "Created executive Power BI dashboards to assist operations management."
      ]
    },
    {
      id: "drm-jhansi",
      file: "drm-jhansi.txt",
      company: "DRM Office Jhansi (Indian Railways)",
      role: "IT & Automation Intern",
      period: "Summer 2022",
      location: "Jhansi, UP",
      tech: ["C++", "Python", "OpenCV", "MySQL"],
      details: [
        "Digitized legacy track inspection logbooks into automated SQL database workflows.",
        "Prototyped initial OpenCV computer vision algorithm for automated track defect detection."
      ]
    }
  ],

  education: [
    {
      file: "btech-aids.txt",
      institution: "State Technological University",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      period: "2020 - 2024",
      score: "CGPA: 8.42 / 10.0",
      courses: ["Data Structures & Algorithms", "Deep Learning", "Natural Language Processing", "Database Systems", "Operating Systems", "Computer Networks"]
    },
    {
      file: "highschool.txt",
      institution: "Central School",
      degree: "Higher Secondary (CBSE Science)",
      period: "2018 - 2020",
      score: "Percentage: 92.4%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ],

  projects: [
    {
      file: "osteoporosis-ai.txt",
      name: "Osteoporosis Detection using AI",
      category: "Computer Vision & Healthcare",
      stack: ["Python", "TensorFlow", "React", "FastAPI", "OpenCV"],
      desc: "A deep learning model utilizing Convolutional Neural Networks (ResNet-50) to predict osteoporosis risks from digital X-ray scans with high sensitivity.",
      highlights: [
        "94.2% validation accuracy on clinical dataset.",
        "Interactive web dashboard for radiologists to upload X-rays and view heatmap highlights."
      ]
    },
    {
      file: "railway-safety.txt",
      name: "Railway Safety & Track Defect Automation",
      category: "IoT & Computer Vision",
      stack: ["C++", "OpenCV", "Python", "Raspberry Pi", "MQTT"],
      desc: "Edge-computed real-time track anomaly detector equipped with camera sensors mounted on inspection vehicles.",
      highlights: [
        "Detects track cracks and joint displacement at speeds up to 40 km/h.",
        "Instant alert notifications sent to central control room via MQTT."
      ]
    },
    {
      file: "x-automation.txt",
      name: "X (Twitter) Automated Engagement Bot",
      category: "Automation & NLP",
      stack: ["Node.js", "Puppeteer", "TypeScript", "OpenAI API"],
      desc: "Smart social media bot for content curation, automated thread summarizing, and sentiment-aware replies.",
      highlights: [
        "Handles content scheduling, auto-retweets, and sentiment analysis.",
        "Over 10,000 automated interactions processed with zero account flags."
      ]
    },
    {
      file: "gst-ai-insights.txt",
      name: "GST AI Insights & Analytics Dashboard",
      category: "Web & FinTech AI",
      stack: ["React", "Django", "Pandas", "TailwindCSS", "Recharts"],
      desc: "AI-driven tax analytics platform that parses GST invoice datasets to detect tax discrepancies and anomaly patterns.",
      highlights: [
        "Automated PDF invoice OCR parsing with Tesseract & Regex.",
        "Interactive visual charts for monthly input tax credit reconciliation."
      ]
    },
    {
      file: "rag-assistant.txt",
      name: "Enterprise RAG Document Knowledge Base",
      category: "Generative AI & LLMs",
      stack: ["Python", "LangChain", "ChromaDB", "FastAPI", "React"],
      desc: "Hybrid search RAG assistant enabling instant, citation-backed QA over thousands of technical documentation pages.",
      highlights: [
        "Combines BM25 keyword search with dense vector embeddings.",
        "Sub-second response streaming with strict source attribution."
      ]
    }
  ],

  stories: [
    {
      file: "rag-story.txt",
      title: "Building an Enterprise RAG Engine Under 100ms Latency",
      summary: "How we optimized vector indexing and caching to query 50,000+ technical manuals with source citations.",
      content: `### The Challenge
Standard vector search can be slow when processing thousands of enterprise PDFs with dense technical tables and code snippets.

### Solution & Architecture
1. **Document Chunking:** Implemented semantic chunking with overlapping 512-token windows.
2. **Hybrid Search:** Fused dense vector retrieval (ChromaDB) with sparse keyword matching (BM25) via Reciprocal Rank Fusion (RRF).
3. **Caching Layer:** Redis cache for frequent queries, dropping P95 latency to sub-100ms.`
    },
    {
      file: "computer-vision-story.txt",
      title: "Edge Computer Vision for Real-Time Railway Safety",
      summary: "Deploying lightweight OpenCV models on embedded edge hardware in high-vibration environments.",
      content: `### Objective
Perform high-speed track inspection without relying on cloud connectivity.

### Engineering Decisions
1. Model quantization to 8-bit integers for Raspberry Pi TPU acceleration.
2. Custom image stabilization filter to withstand train vibration.
3. MQTT event bus for fault messaging.`
    }
  ],

  skills: {
    programming: ["JavaScript (ES6+)", "TypeScript", "Python", "C++", "Java", "SQL", "HTML5/CSS3"],
    ai_ml: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", "LangChain", "ChromaDB", "Pandas", "NumPy"],
    web_dev: ["React.js", "Node.js", "Express.js", "Django", "FastAPI", "Tailwind CSS", "REST APIs", "GraphQL"],
    tools: ["Git & GitHub", "Docker", "AWS (EC2, S3, Lambda)", "Linux (Ubuntu/Bash)", "Postman", "Vercel"]
  },

  coding: [
    {
      platform: "LeetCode",
      file: "leetcode.txt",
      rating: "1780+ (Top 10%)",
      solved: "450+ Problems",
      profile: "https://leetcode.com"
    },
    {
      platform: "HackerRank",
      file: "hackerrank.txt",
      rating: "5 Stars in Python & Problem Solving",
      solved: "100+ Challenges",
      profile: "https://hackerrank.com"
    },
    {
      platform: "CodeChef",
      file: "codechef.txt",
      rating: "3 Star (Max Rating: 1640)",
      solved: "200+ Contest Problems",
      profile: "https://codechef.com"
    }
  ],

  achievements: [
    {
      file: "awards.txt",
      title: "1st Place Winner - Smart India Hackathon (SIH)",
      year: "2023",
      desc: "Led a 6-member team to build an AI-powered automated video surveillance system for railway station safety."
    },
    {
      file: "certifications.txt",
      title: "AWS Certified Cloud Practitioner",
      year: "2023",
      desc: "Validation of foundational cloud architecture, security, and AWS service implementation skills."
    },
    {
      file: "publication.txt",
      title: "Research Paper: AI-Assisted Medical Image Segmentation",
      year: "2024",
      desc: "Published in International Journal of Computer Vision & AI Research."
    }
  ],

  activities: [
    {
      file: "community.txt",
      title: "Lead Organizer - College Developer Student Club (GDSC)",
      desc: "Organized 12+ technical workshops on AI, Cloud, and Web Development reaching 500+ student developers."
    },
    {
      file: "open-source.txt",
      title: "Open Source Contributor",
      desc: "Active contributor to popular GitHub repositories in Python and React ecosystems."
    }
  ],

  blogs: [
    {
      file: "ai-trends.txt",
      title: "Demystifying RAG: From Naive Vector Search to Advanced Hybrid Retrieval",
      date: "May 2024",
      readTime: "6 min read",
      snippet: "Why simple cosine similarity on embeddings isn't enough for production AI, and how hybrid RRF search bridges the gap."
    },
    {
      file: "clean-code.txt",
      title: "Writing Modular React Engines with Custom Hooks",
      date: "Feb 2024",
      readTime: "4 min read",
      snippet: "Best practices for decoupling stateful terminal interpreters and UI components in modern React apps."
    }
  ]
};
