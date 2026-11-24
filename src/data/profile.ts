export const PROFILE = {
  name: "SUBHAM KUMAR SINGH",
  roles: [
    "SOFTWARE ENGINEER",
    "BACKEND DEVELOPER",
    "AI / ML ENGINEER"
  ],
  headline: "Python backend development, scalable REST APIs, AI/LLM integration, and asynchronous distributed systems.",
  email: "subhamks2114@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/subham-kumar-singh-7864702a3/",
    github: "https://github.com/SubhamKumarSingh2114",
    email: "mailto:subhamks2114@gmail.com",
    resume: "/resume.pdf"
  },
  skills: {
    programming: ["Python", "SQL", "C++", "JavaScript"],
    backend: ["FastAPI", "Flask", "REST APIs", "AsyncIO", "Background Workers", "API Integration"],
    generative_ai: ["OpenAI API", "LLM Integration", "AI Agent Integration", "MCP-Compatible Tools", "Prompt Testing", "LLM Evaluation"],
    ai_retrieval: ["Text Embeddings", "FAISS", "Vector Search", "Structured Data Retrieval"],
    machine_learning: ["Scikit-learn", "TensorFlow", "Keras", "Random Forest", "Model Evaluation"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "SQLAlchemy"],
    cloud_tools: ["Docker", "AWS", "Git", "GitHub", "Linux", "Jupyter Notebook"],
    core_concepts: ["DBMS", "Data Structures", "Computer Networks", "Problem Solving"]
  },
  experience: [
    {
      id: "vaidsys",
      title: "MACHINE LEARNING INTERN",
      company: "VAIDSYS TECHNOLOGIES",
      date: "Jun 2026 — Jul 2026",
      location: "Remote, Bangalore",
      project: "LOAN APPROVAL PREDICTION SYSTEM",
      metrics: [
        { label: "ACCURACY", value: "90%" },
        { label: "AUC-ROC", value: "0.9677" },
        { label: "APPLICATIONS", value: "2,000" }
      ],
      description: "Developed a Python and Scikit-learn loan approval prediction model using 2,000 applications. Performed data preprocessing, feature engineering, and integrated the model with a Flask REST API and interactive dashboard.",
      technologies: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy", "REST API", "Git"],
      github: "https://github.com/SubhamKumarSingh2114/Loan-Approval-Prediction",
      isPrimary: true
    }
  ],
  projects: [
    {
      id: "customer-360",
      title: "CUSTOMER 360 – AI-READY MASTER DATA MANAGEMENT PLATFORM",
      category: "BACKEND / AGENTIC AI / FULL STACK",
      highlights: ["Python", "FastAPI", "React", "PostgreSQL", "SQLAlchemy", "MCP", "OAuth2"],
      features: [
        "FastAPI REST APIs with OAuth2 authentication and role-based access control (RBAC)",
        "MCP-compatible tools enabling AI agents to search and retrieve customer data via structured interfaces",
        "Webhooks for real-time customer updates and multi-tenant architecture with organization-level data isolation"
      ],
      architecture: [
        "REACT FRONTEND",
        "OAUTH2 AUTH",
        "FASTAPI BACKEND",
        "MCP AI AGENT TOOLS",
        "POSTGRESQL + SQLALCHEMY",
        "REAL-TIME WEBHOOKS"
      ],
      github: "https://github.com/SubhamKumarSingh2114"
    },
    {
      id: "dispatch-routing",
      title: "HIGH-PERFORMANCE DELIVERY DISPATCH & ROUTING SYSTEM",
      category: "BACKEND / DISTRIBUTED SYSTEMS / ASYNCIO",
      highlights: ["Python", "FastAPI", "MongoDB", "AsyncIO", "Dijkstra", "Priority Queues", "Background Workers"],
      features: [
        "Asynchronous dispatch engine assigning orders based on agent location, workload, priority, and ETA",
        "FastAPI REST APIs, background workers, and Dijkstra shortest-path routing with AsyncIO",
        "Load simulation supporting 3,000 agents and 10,000 orders to stress-test throughput and latency"
      ],
      metrics: [
        { label: "AGENTS", value: "3,000" },
        { label: "ORDERS", value: "10,000" }
      ],
      architecture: [
        "ORDER INGESTION",
        "ASYNCIO PRIORITY QUEUES",
        "LOCATION & ETA ENGINE",
        "DIJKSTRA ROUTING",
        "BACKGROUND WORKERS",
        "MONGODB PERSISTENCE"
      ],
      github: "https://github.com/SubhamKumarSingh2114"
    },
    {
      id: "network-threat",
      title: "AI NETWORK THREAT INTELLIGENCE PLATFORM",
      category: "SECURITY / MACHINE LEARNING / BACKEND",
      highlights: ["Python", "FastAPI", "Random Forest", "SQLite", "BFS / DFS / Dijkstra"],
      features: [
        "Machine learning threat detection engine identifying DDoS, port scanning, and brute-force attacks",
        "FastAPI services for real-time network traffic logging, attacker tracking, and alert prioritization",
        "Graph-based network analysis and threat investigation using BFS, DFS, and Dijkstra algorithms"
      ],
      architecture: [
        "TRAFFIC CAPTURE",
        "RANDOM FOREST ML",
        "GRAPH ANALYSIS (BFS/DFS/DIJKSTRA)",
        "FASTAPI SERVICES",
        "ATTACKER TRACKING",
        "RISK-BASED ALERTS"
      ],
      github: "https://github.com/SubhamKumarSingh2114"
    }
  ],
  achievements: [
    "Oracle Cloud Infrastructure Data Science Professional Certification",
    "NPTEL Cloud Computing, IIT Kharagpur",
    "Solved 80+ problems on LeetCode and GeeksforGeeks"
  ],
  certifications: [
    "Oracle Cloud Infrastructure Data Science Professional Certification",
    "NPTEL Cloud Computing — IIT Kharagpur"
  ],
  education: [
    {
      institution: "M.S. Ramaiah Institute of Technology",
      degree: "B.E. Electronics and Instrumentation Engineering | GPA: 7.0",
      date: "Oct 2023 — Present",
      location: "Bengaluru, India"
    },
    {
      institution: "Kendriya Vidyalaya Bihta",
      degree: "Class XII – Science | 70%",
      date: "2021 — 2022",
      location: "Patna, India"
    },
    {
      institution: "Kendriya Vidyalaya Jaisalmer",
      degree: "Class X – CBSE | 60%",
      date: "2019 — 2020",
      location: "Jaisalmer, India"
    }
  ]
};
