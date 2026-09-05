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
    linktree: "https://linktr.ee/ravi.panchal",
    resumeUrl: "https://drive.google.com/file/d/1AHDVBgfkWsYFV7-XVrv1GK4BgdhAxERD/view?usp=sharing",
    status: "🟢 Available for Full-time Roles & Internships",
    bio: "Passionate AI/ML engineer focused on building high-performance scalable web applications, RAG pipelines, and automated data solutions."
  },

  about: `Hi, I'm Ravi Panchal.

I am a B.Tech Final year student in Artificial Intelligence & Data Science, specializing in Transportation and Logistics at Gati Shakti Vishwavidyalaya, Vadodara.

My interests lie in Artificial Intelligence, Machine Learning Generative AI, Retrieval Augmented Generation (RAG), Deep Learning and automation. I enjoy building practical AI systems that transform complex data into useful insights and real-world applications.

During my internship at BISAG-N, Gandhinagar, I worked on a RAG-based Chatbot for Financial Services using the FinanceParam model. I also experimented with QLoRA-based quantization and integrated a Query Optimizer layer using Qwen2.5-7B through Ollama. Additionally, I developed a GST AI Insight platform using the Sarvam API.

My projects include osteoporosis image classification system, a railway accident analysis and safety improvement system, an end-to-end X post automation and File Sharing system .

I am particularly interested in building scalable AI applications, working with Large Language Models, RAG pipelines, deep learning models, and automation systems. I also have experience with Python, C++, Java, SQL, Docker, Hugging Face, Ollama, Git, GitHub, and Linux.

Beyond academics, I had led technical teams, conducted DSA sessions, organized programming events, and participated in hackathons and competitions.

Currently, I am focused on expanding my expertise in AI, Generative AI, Machine Learning, and software development while building impactful projects that solve real-world problems.

Let's build something intelligent.`,

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
      file: "school.txt",
      institution: "S. R. Inter College, Orai",
      degree: "Higher Secondary (UP Board)",
      period: "2021 - 2022",
      score: "Percentage: 84.5%",
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "Hindi"]
    }
  ],

  projects: [
    {
      file: "burn-drop.txt",
      name: "Burn-Drop",
      category: "Web Development",
      stack: ["Next.js", "Python", "PostgreSQL", "Redis", "Google Drive API", "Resend", "Render", "Vercel", "Docker"],
      desc: "Open-source, passwordless file sharing with secure one-time PINs and auto-deletion. Share files up to 1 GB with ZIP bundling.",
      githubUrl: "https://github.com/ravixpanchal/BurnDrop",
      liveDemoUrl: "https://burn-drop.vercel.app/",
      highlights: [
        "BurnDrop is an open-source, passwordless, one-time temporary file sharing platform.",
        "Upload single or multiple files up to 1 GB total, receive a secure one-time PIN code, share it anywhere — no account required."
      ]
    },
    {
      file: "x-automation.txt",
      name: "X (Twitter) Post Automation",
      category: "Automation",
      stack: ["NGROK", "Slack", "TypeScript", "CRON"],
      desc: "Developed an automated AI-powered X (Twitter) posting pipeline with interactive Slack approval, using Playwright and systemd without requiring a paid X API.",
      githubUrl: "https://github.com/ravixpanchal/x-post-automation",
      liveDemoUrl: "https://github.com/ravixpanchal/x-post-automation",
      highlights: [
        "Eliminated the need for a paid X (Twitter) API by using browser automation with Playwright.",
        "Published posts automatically only after receiving user approval through Slack."
      ]
    },
    {
      file: "osteoporosis-ai.txt",
      name: "Osteoporosis Detection using AI",
      category: "Computer Vision & Healthcare",
      stack: ["Python", "PyTorch", "Streamlit", "X-AI", "TorchCAM"],
      desc: "An advanced AI-driven medical image classification system for osteoporosis detection using female panoramic jaw radiograph. ",
      githubUrl: "https://github.com/ravixpanchal/OsteoNet-XAI",
      liveDemoUrl: "https://osteonet-xai-web.streamlit.app/",
      highlights: [
        "We created augmented data during training.",
        "Interactive web dashboard for radiologists to upload X-rays and view heatmap highlights."
      ]
    },
    {
      file: "gst-ai-insights.txt",
      name: "GST AI Insights & Analytics Dashboard",
      category: "Web & FinTech AI",
      stack: ["Pandas", "Streamlit", "Python", "Sarvam API"],
      desc: "Developed an AI-powered GST analytics platform that transforms uploaded GSTR-3B Excel data into interactive dashboards, insights, and downloadable Word reports.",
      githubUrl: "https://github.com/ravixpanchal/GST-Insight-AI",
      liveDemoUrl: "https://gst-insight-ai-web.streamlit.app/",
      highlights: [
        "Calculates GSTR-3B return penalties and applicable fines based on the uploaded return details.",
        "Generates a detailed report covering all key financial parameters, insights, and trends."
      ]
    },
    {
      file: "railway-safety.txt",
      name: "Railway Accident Analysis",
      category: "Data Science",
      stack: ["ML", "EDA", "Colab", "Streamlit"],
      desc: "Built an interactive Streamlit dashboard to analyze 3,859 European railway accidents across 31 countries , identifying safety patterns, causes, and risk factors.",
      githubUrl: "https://github.com/ravixpanchal/railway-accident-and-safety-improvements",
      liveDemoUrl: "https://railway-accident-analysis-eda.streamlit.app/",
      highlights: [
        "Identified the exact causes of railway accidents to help prevent similar incidents and improve safety.",
        "Published a research paper based on the project and its findings."
      ]
    },
    {
      file: "rag-assistant.txt",
      name: "RAG Chatbot for Financial Services",
      category: "Generative AI & LLMs",
      stack: ["Python", "LangChain", "ChromaDB", "FastAPI", "React"],
      desc: "Developed an AI-powered RAG chatbot for financial services using FinanceParam, QLoRA-based model adaptation, and a Qwen2.5-7B query optimizer to improve retrieval quality.",
      githubUrl: "https://github.com/ravixpanchal",
      liveDemoUrl: "https://github.com/ravixpanchal",
      highlights: [
        "Published a technical blog analyzing the drawbacks and limitations of the quantized FinanceParam model.",
        "Integrated Anthropic’s financial repository plugins with the Qwen model to enhance financial query processing."
      ]
    }
  ],

  stories: [
    {
      file: "file-sharing-story.txt",
      title: "BurnDrop: Fast & Temporary File-Sharing Platform",
      summary: "How internship constraints at BISAG-N inspired building a zero-account 3-hour self-destructing file sharing tool.",
      content: `I got the idea for BurnDrop during my internship at BISAG-N, Gandhinagar.

During the internship, I had to submit weekly reports through the BISAG server portal. However, services like WhatsApp, Google Drive, Telegram, and personal Google accounts were not available for sharing files. We sometimes used GitHub as an alternative for transferring files.

This made me think: What if I don't have a pen drive or access to file-sharing platforms, but I need to quickly send a file from one system to another without creating an account?

That problem inspired me to build BurnDrop.

BurnDrop is a temporary file-sharing system where users can upload files up to 1 GB and access them for 3 hours. Users enter their email address and receive a PIN, which can be used to access the uploaded files from another system.

After 3 hours, the files are automatically deleted.

The main goal of BurnDrop is to provide a fast, simple, and temporary way to share files without requiring users to create an account or go through unnecessary steps.`
    },
    {
      file: "x-automation-story.txt",
      title: "X (Twitter) Post Automation Pipeline",
      summary: "Zero-cost AI post generation with Slack human-in-the-loop approval and Playwright automation without paid X API.",
      content: `The idea for this project came from my frequent use of X for content creation and monetization.

I realized that consistently writing content and manually publishing posts required time and effort. This made me think: What if an AI model could generate posts automatically, send them to me for approval, and publish them on my X account only after I approve them?

Initially, I planned to use the X API for posting. However, I wanted to explore whether I could build the complete automation pipeline without relying on a paid X API.

That is how the X Post Automation project started.

The system uses Cron and systemd to run the automation workflow on an hourly basis. An AI model generates a post, which is sent to Slack for approval or rejection.

If I reject the post, nothing is published. If I approve it, Playwright automatically opens the X workflow and publishes the approved post to my account.

The complete workflow is:

Scheduler → AI Post Generation → Slack Approval → Playwright → X Account

The main goal of this project was to automate the repetitive process of content generation and posting while keeping the final decision in the hands of the user.

The result is a fully automated, zero-cost X posting pipeline that combines AI-generated content, human approval, Slack integration, scheduling, and browser automation without requiring a paid X API.`
    },
    {
      file: "rag-chatbot-story.txt",
      title: "RAG Chatbot for Financial Services & Architecture Adaptation",
      summary: "Overcoming 4GB VRAM limits during FinanceParam model quantization via cloud-local hybrid deployment.",
      content: `The idea for this project started when our mentor assigned us the task of building a RAG Chatbot for Financial Services.

One of the main requirements was to use an Indian financial language model called FinanceParam, available on Hugging Face. FinanceParam is based on the Param-1-2.9B-Instruct model, and the complete model size is approximately 5.76 GB.

The biggest challenge was our system configuration. We were working with an NVIDIA RTX 2050 GPU with only 4 GB of VRAM, which was not sufficient to run the original model efficiently.

To solve this problem, we experimented with quantization using the QLoRA technique. The goal was to reduce the memory requirements and make the model compatible with our available hardware.

Although the quantized model could run more efficiently, we faced another challenge. The model started producing hallucinated and less reliable responses, which affected the overall quality of the RAG chatbot. We realized that reducing the model requirements was solving the hardware problem, but it was also impacting the quality of the results.

Instead of compromising on the original model, we changed our approach.

We stored the original FinanceParam model in Google Drive and used Google Colab to run the backend, where better GPU resources and higher VRAM were available. At the same time, we continued developing and running the frontend locally using VS Code.

Our architecture became:

Frontend on Local System → Backend on Google Colab → Original FinanceParam Model

By separating the frontend and backend, we were able to overcome our local hardware limitations and use the original model without depending entirely on our RTX 2050 GPU.

This project taught us that when a system does not have enough hardware resources to run a large AI model, the solution is not always to reduce the model size. Sometimes, changing the deployment architecture can be a better solution.

What started as a RAG chatbot project eventually became a learning experience involving model quantization, QLoRA, hallucination challenges, hardware limitations, and hybrid cloud-local deployment.`
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
      rating: "max (1540)",
      solved: "400+ Problems",
      profile: "https://leetcode.com/u/ravixpanchal/"
    },
    {
      platform: "GeeksforGeeks",
      file: "geeksforgeeks.txt",
      rating: "Institute Rank #1 (GSV)",
      solved: "350+ Problems",
      profile: "https://www.geeksforgeeks.org/profile/ravipanchal"
    }
  ],

  achievements: [
    {
      file: "rank.txt",
      title: "Institute Rank 1 (GSV) on GeeksforGeeks",
      year: "2026",
      desc: "Achieved Institute Rank 1 (GSV) on GeeksforGeeks by solving over 350+ coding problems on the platform."
    },
    {
      file: "hackathon.txt",
      title: "Runner-up - NLDS ULIP Logistics Hackathon 2.0",
      year: "2024",
      desc: "Achieved Runner-up position in the NLDS ULIP Logistics Hackathon 2.0, conducted by DPIIT."
    },
    {
      file: "publication.txt",
      title: "Research Paper: Accident Analysis and Safety Improvements in Indian Railways",
      year: "2026",
      desc: "Accident Analysis and Safety Improvements in Indian Railways accepted at ICICST 2026, to appear in SSRN Proceedings (Elsevier)"
    }
  ],

  activities: [
    {
      file: "community.txt",
      title: "Lead Organizer - CodeStorm Hackathon (Epitome'26 @GSV)",
      desc: "Organized a three-round hackathon featuring a technical Menti quiz, a HackerRank coding challenge conducted using SEB Browser, and a final vibe-coding round to develop solutions for real-world problem statements."
    },
    {
      file: "participation.txt",
      title: "Club & Event Participation",
      desc: "Conducted DSA sessions as the Programming Domain Head at Technocrats Club, participated in an Indian Air Force workshop, and built an interactive Power BI dashboard."
    }
  ],

  blogs: [
    {
      file: "hashnode.txt",
      title: "BharatGen's FinanceParam (Quantized): 5 Real Drawbacks We Found After Using It",
      date: "Jun 2026 ",
      readTime: "13 min read",
      snippet: "An in-depth analysis of five key drawbacks and performance limitations we encountered while experimenting with the quantized version of BharatGen's FinanceParam model.",
      url: "https://codeandmodels.hashnode.dev/bharatgen-s-financeparam-quantized-5-real-drawbacks-we-found-after-using-it"
    },
    {
      file: "pattern.txt",
      title: "From Basic to Complex: A Deep Dive into C++ Pattern Printing",
      date: "Jul 2025",
      readTime: "3 min read",
      snippet: "Level Up Your Loop Logic with These Pattern Problems.",
      url: "https://medium.com/@ravixpanchal/from-basic-to-complex-a-deep-dive-into-c-pattern-printing-4878827fd786?sharedUserId=ravixpanchal"
    }
  ]
};
