export const portfolioData = {
  personal: {
    name: "Ravi Panchal",
    title: "AI/ML Engineer",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    cgpa: "8.42",
    location: "Vadodara, Gujarat",
    email: "ravi.panchal.kaithi@gmail.com",
    github: "https://github.com/ravixpanchal",
    linkedin: "https://www.linkedin.com/in/ravixpanchal/",
    resumeUrl: "https://drive.google.com/file/d/1VZQqdnq1grzLs0UuJbkqyAxQ4TjemkjR/view?usp=sharing",
    status: "🟢 Available for Full-time Roles & Internships",
    bio: "Passionate AI/ML engineer focused on building high-performance scalable web applications, RAG pipelines, and automated data solutions."
  },

  introduction: `Hi, I'm Ravi Panchal! 🚀
B.Tech in Artificial Intelligence & Data Science (CGPA: 8.42).
I build scalable web applications, deep learning based systems, and RAG knowledge engines.
Currently seeking impactful Software Engineering or AI/ML roles.

Type 'guide' or 'help' to see all available commands!`,

  internships: [
    {
      id: "bisag-n",
      file: "bisag-n.txt",
      company: "BISAG-N (Bhaskaracharya National Institute for Space Applications and Geo-informatics)",
      role: "GEN-AI Intern",
      period: "May 2026 - Jul 2026",
      location: "Gandhinagar, Gujarat",
      tech: ["Python", "FastAPI", "HuggingFace", "Docker", "RAG", "LangChain"],
      details: [
        "Developed a RAG-based Financial Services Knowledge Assistant using the FinanceParam model for intelligent financial query processing.",
        "Experimented with QLoRA-based quantization and integrated a Query Optimizer using Qwen2.5-7B via Ollama.",
        "Built a GST AI Insight platform using the Sarvam API to analyze GST-related financial data and generate AI-driven insights for users."
      ]
    },
    {
      id: "aai",
      file: "aai.txt",
      company: "Airports Authority of India (AAI)",
      role: "ML Intern",
      period: "May 2025 - Jun 2025",
      location: "Varanasi, UP",
      tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "SQL"],
      details: [
        "Developed and deployed a real-time Server Tracking Website with frontend and backend components, hosted on Render.",
        "Gained hands-on experience with Linux/Ubuntu system administration and ngrok for secure tunneling and local application exposure.",
        "Studied the working architecture and implementation concepts behind the DigiYatra facial-recognition system"
      ]
    },
    {
      id: "drm-jhansi",
      file: "drm-jhansi.txt",
      company: "DRM Office Jhansi (Indian Railways)",
      role: "Web Developer Intern",
      period: "Summer 2024",
      location: "Jhansi, UP",
      tech: ["MySQL", "HTML", "CSS", "JavaScript", "Github"],
      details: [
        "Gained hands-on experience in SQL-based data handling, Excel reporting, and HTML web development during industrial training at DRM Jhansi.",
        "Developed exposure to Indian Railways data systems, operational workflows, and coach maintenance processes."
      ]
    }
  ],

  education: [
    {
      file: "btech-aids.txt",
      institution: "Gati Shakti Vishwavidyalaya, Vadodara",
      degree: "B.Tech in Artificial Intelligence & Data Science",
      period: "2023 - 2027",
      score: "CGPA: 8.42 / 10.0",
      courses: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning", "Natural Language Processing", "Database Systems", "Operating Systems", "Computer Networks"]
    },
    {
      file: "highschool.txt",
      institution: "S. R. Inter College, Orai",
      degree: "Higher Secondary (UP Board)",
      period: "2019 - 2020",
      score: "Percentage: 88.0%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ],

  projects: [
    {
      file: "osteoporosis-ai.txt",
      name: "Osteoporosis Detection using AI",
      category: "Computer Vision & Healthcare",
      stack: ["Python", "PyTorch", "Streamlit", "X-AI", "TorchCAM"],
      desc: "An advanced AI-driven medical image classification system for osteoporosis detection using female panoramic jaw radiograph. ",
      githubUrl: "https://github.com/ravixpanchal/OsteoNet-XAI",
      liveDemoUrl: "https://osteonet-xai-web.streamlit.app/",
      highlights: [
        "94.2% validation accuracy on clinical dataset.",
        "Interactive web dashboard for radiologists to upload X-rays and view heatmap highlights."
      ]
    },
    {
      file: "railway-safety.txt",
      name: "Railway Accident Analysis",
      category: "Data Science",
      stack: ["ML", "EDA", "Colab", "Streamlit"],
      desc: "Edge-computed real-time track anomaly detector equipped with camera sensors mounted on inspection vehicles.",
      githubUrl: "https://github.com/ravixpanchal/railway-accident-and-safety-improvements",
      liveDemoUrl: "https://railway-accident-analysis-eda.streamlit.app/",
      highlights: [
        "Detects track cracks and joint displacement at speeds up to 40 km/h.",
        "Instant alert notifications sent to central control room via MQTT."
      ]
    },
    {
      file: "x-automation.txt",
      name: "X (Twitter) Post Automation",
      category: "Automation",
      stack: ["NGROK", "Slack", "TypeScript", "CRON"],
      desc: "Smart social media bot for content curation, automated thread summarizing, and sentiment-aware replies.",
      githubUrl: "https://github.com/ravixpanchal/x-post-automation",
      liveDemoUrl: "https://github.com/ravixpanchal/x-post-automation",
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
      githubUrl: "https://github.com/ravixpanchal",
      liveDemoUrl: "https://github.com/ravixpanchal",
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
      githubUrl: "https://github.com/ravixpanchal",
      liveDemoUrl: "https://github.com/ravixpanchal",
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
    programming: ["Python", "C", "C++", "Java", "SQL", "R", "HTML5/CSS3"],
    ai_ml: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-Learn", "LangChain", "ChromaDB", "Pandas", "NumPy"],
    web_dev: ["React.js", "Node.js", "Django", "FastAPI", "Next.js"],
    tools: ["Git & GitHub", "Docker", "Linux (Ubuntu/Bash)", "Vercel", "Render"]
  },

  coding: [
    {
      platform: "LeetCode",
      file: "leetcode.txt",
      rating: "1780+ (Top 10%)",
      solved: "400+ Problems",
      profile: "https://leetcode.com/u/ravixpanchal/"
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
