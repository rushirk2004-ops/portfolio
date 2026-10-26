export const personalInfo = {
  name: "Rushikesh Kunde",
  role: "Software Developer | Java Backend Developer | Machine Learning Enthusiast",
  location: "Pune, India",
  email: "rushikeshkunde764@gmail.com",
  phone: "+91 8767688450",
  github: "https://github.com/rushirk2004-ops",
  linkedin: "https://www.linkedin.com/in/rushikesh-kunde-63678a301/",
  resumeUrl: "./resume.pdf",
  bioHeadline: "Computer Science undergraduate skilled in Python, SQL, statistics, data analysis, and problem-solving with hands-on experience in predictive modeling, backend development, workflow automation, and REST API integration.",
  aboutParagraphs: [
    "Computer Science undergraduate skilled in Python, SQL, statistics, data analysis, and problem-solving with hands-on experience in predictive modeling, backend development, workflow automation, and REST API integration.",
    "Developed 50+ projects and repositories including Movie Recommendation System, Attendance Tracker System, Online Shopping Cart, AI Interview Platform, and Web Scraping pipelines using Python, Scikit-learn, Java, Spring Boot, and MySQL.",
    "Completed a Web Developer Internship at Appwizer Solution (OPC) Private Limited, extracting and processing 10K+ records into structured datasets, automating data workflows by 60%, and managing website hosting and deployment using WordPress and Hostinger.",
    "Currently pursuing BE in Computer Science Engineering at IIIT Pune with a 9.16 CGPA, continuously improving in Data Structures & Algorithms, Machine Learning, Docker, and AWS Cloud Computing."
  ],
  stats: [
    { label: "Current CGPA", value: "9.16", detail: "IIIT Pune (CSE)" },
    { label: "Projects & Repositories", value: "50+", detail: "Java, Python, ML & Web" },
    { label: "Data Records Scraped", value: "10K+", detail: "Appwizer Solution" },
    { label: "Manual Effort Reduced", value: "60%", detail: "Process Automation" }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "SQL", "Python", "C", "C++"]
  },
  {
    category: "Backend & Web Development",
    icon: "Server",
    skills: ["Spring Boot", "REST APIs", "JPA", "Flask", "Thymeleaf", "HTML", "CSS"]
  },
  {
    category: "Data Analytics & Machine Learning",
    icon: "BrainCircuit",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Data Analysis",
      "Statistics",
      "Data Processing",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib"
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS (EC2)", "Cloud Computing"]
  },
  {
    category: "Tools & Platforms",
    icon: "Cloud",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Visual Studio Code",
      "Jupyter Notebook",
      "Render",
      "Eclipse",
      "IntelliJ IDEA"
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    skills: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    category: "Automation & Testing",
    icon: "CheckCircle2",
    skills: ["Web Scraping", "BeautifulSoup", "API Testing", "Unit Testing"]
  }
];

export const projects = [
  {
    id: "attendance-tracker-system",
    title: "Attendance Tracker System",
    category: "Backend Development",
    description:
      "Developed an attendance management system to maintain and track student records. Built REST APIs and integrated MySQL database for efficient data storage and retrieval. Implemented structured database workflows and validation processes for reliable attendance tracking.",
    technologies: ["Java", "Spring Boot", "MySQL", "JPA", "REST APIs"],
    githubUrl: "https://github.com/rushirk2004-ops/attendance",
    highlight: "REST API & Relational Database Architecture",
    featured: true
  },
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description:
      "Developed a content-based movie recommendation system using movie metadata including genres, keywords, cast, director, and overview. Preprocessed metadata using Pandas and NumPy, applied CountVectorizer with 5,000 features and stop-word removal, and built a recommendation pipeline using scikit-learn.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/rushirk2004-ops/movie_recommendation_system",
    highlight: "CountVectorizer & Feature Similarity Pipeline",
    featured: true
  },
  {
    id: "online-shopping-cart",
    title: "Online Shopping Cart",
    category: "Full-Stack & Backend",
    description:
      "Developed a full-stack e-commerce application using Java, Spring Boot, Thymeleaf, MySQL, and JPA. Implemented Spring Security for authentication, role-based access, password encryption, account locking, product search, filtering, order-status tracking, and Docker-based containerization.",
    technologies: [
      "Java",
      "OOP",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
      "Thymeleaf",
      "Docker"
    ],
    githubUrl: "https://github.com/rushirk2004-ops/shoppingweb",
    highlight: "Role-Based Access & Docker Containerization",
    featured: true
  },
  {
    id: "ai-interview-platform",
    title: "AI Interview Platform",
    category: "Machine Learning",
    description:
      "Interactive AI-assisted interview platform simulating candidate evaluations, questionnaire workflows, and intelligent scoring feedback.",
    technologies: ["JavaScript", "Python", "REST APIs", "Machine Learning"],
    githubUrl: "https://github.com/rushirk2004-ops/ai-interview-platform",
    highlight: "Intelligent Candidate Assessment Engine",
    featured: false
  },
  {
    id: "cropflow-project",
    title: "CropFlow Project",
    category: "Machine Learning",
    description:
      "Agricultural data analysis and predictive modeling pipeline to forecast crop yields and recommend optimal crop selections based on soil and climate variables.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/rushirk2004-ops/CropFlow_Project",
    highlight: "Agri-Tech Data & Predictive Analytics",
    featured: false
  },
  {
    id: "web-scraping-pipeline",
    title: "Web Scraping & Data Pipeline",
    category: "Backend Development",
    description:
      "Automated web extraction pipeline built using Python and BeautifulSoup to extract, sanitize, and structure over 10,000+ data records into structured datasets.",
    technologies: ["Python", "BeautifulSoup", "Data Analysis", "SQL"],
    githubUrl: "https://github.com/rushirk2004-ops/webscrapping_publication",
    highlight: "10,000+ Records Automated Pipeline",
    featured: false
  },
  {
    id: "forecasting-system",
    title: "Predictive Forecasting System",
    category: "Machine Learning",
    description:
      "Time-series and statistical modeling system designed to analyze cyclical trends, historical distributions, and forecast upcoming metrics.",
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/rushirk2004-ops/forcasting_system",
    highlight: "Time-Series Modeling & Analysis",
    featured: false
  },
  {
    id: "sensor-monitoring-system",
    title: "Sensor Data Processing System",
    category: "Backend Development",
    description:
      "Real-time sensor event processor built with Java, handling data ingestion, threshold monitoring, and state alerts for telemetry systems.",
    technologies: ["Java", "OOP", "DBMS", "Data Processing"],
    githubUrl: "https://github.com/rushirk2004-ops/sensorproject",
    highlight: "Telemetry Processing & Alerting",
    featured: false
  }
];

export const allGithubRepositories = [
  { name: "attendance", url: "https://github.com/rushirk2004-ops/attendance", language: "Java", desc: "Attendance tracker system with REST APIs, JPA and MySQL integration." },
  { name: "movie_recommendation_system", url: "https://github.com/rushirk2004-ops/movie_recommendation_system", language: "Python", desc: "Content-based movie recommendation system using Scikit-learn and Pandas." },
  { name: "shoppingweb", url: "https://github.com/rushirk2004-ops/shoppingweb", language: "Java", desc: "Full-stack e-commerce store with Spring Boot, Spring Security, MySQL & Docker." },
  { name: "webscrapping_publication", url: "https://github.com/rushirk2004-ops/webscrapping_publication", language: "Python", desc: "Automated BeautifulSoup scraping pipeline processing 10,000+ publication records." },
  { name: "attendance_tracker", url: "https://github.com/rushirk2004-ops/attendance_tracker", language: "Java", desc: "Attendance records management and validation architecture." },
  { name: "ai-interview-platform", url: "https://github.com/rushirk2004-ops/ai-interview-platform", language: "JavaScript", desc: "AI-driven interview testing, assessment, and candidate interaction platform." },
  { name: "CropFlow_Project", url: "https://github.com/rushirk2004-ops/CropFlow_Project", language: "Python", desc: "Predictive agriculture analytics and machine learning crop yield modeling." },
  { name: "forcasting_system", url: "https://github.com/rushirk2004-ops/forcasting_system", language: "Python", desc: "Statistical trend analysis and machine learning forecasting model." },
  { name: "sensorproject", url: "https://github.com/rushirk2004-ops/sensorproject", language: "Java", desc: "Telemetry monitoring and event notification backend in Java." },
  { name: "airline_project", url: "https://github.com/rushirk2004-ops/airline_project", language: "Python", desc: "Flight ticket reservation, passenger scheduling and management workflow." },
  { name: "employee_management", url: "https://github.com/rushirk2004-ops/employee_management", language: "Java", desc: "Employee lifecycle and departmental records database system." },
  { name: "product_management", url: "https://github.com/rushirk2004-ops/product_management", language: "Java", desc: "Catalog inventory, pricing tiers, and stock status management." },
  { name: "grocery_management", url: "https://github.com/rushirk2004-ops/grocery_management", language: "CSS / JS", desc: "Retail grocery storefront and cart calculation application." },
  { name: "interview_task_manager", url: "https://github.com/rushirk2004-ops/interview_task_manager", language: "JavaScript", desc: "Task tracking dashboard for technical interview problem pipelines." },
  { name: "ai_blogs", url: "https://github.com/rushirk2004-ops/ai_blogs", language: "JavaScript", desc: "AI tech publishing platform and content distribution web application." },
  { name: "AeroEdge-X-Sync", url: "https://github.com/rushirk2004-ops/AeroEdge-X-Sync", language: "TypeScript", desc: "Real-time synchronization and edge state management utility." },
  { name: "cloud-project", url: "https://github.com/rushirk2004-ops/cloud-project", language: "Cloud / AWS", desc: "Cloud computing deployments, EC2 infrastructure and hosting workflows." },
  { name: "addi-app", url: "https://github.com/rushirk2004-ops/addi-app", language: "Docker", desc: "Containerized application packaging and Docker deployment configurations." },
  { name: "pythoncal", url: "https://github.com/rushirk2004-ops/pythoncal", language: "Python", desc: "Scientific and mathematical computation utilities in Python." },
  { name: "portfolio", url: "https://github.com/rushirk2004-ops/portfolio", language: "React", desc: "Modern developer portfolio built with React, Vite & GitHub Actions." }
];

export const internshipExperience = [
  {
    role: "Web Developer Intern",
    company: "Appwizer Solution (OPC) Private Limited",
    duration: "Jan 2026 – June 2026",
    location: "Pune, India",
    type: "Internship",
    achievements: [
      "Developed web scraping pipelines using Python and BeautifulSoup, extracting and processing 10K+ records into structured datasets.",
      "Automated data extraction workflows, reducing manual effort by 60% and improving operational efficiency.",
      "Contributed to frontend and backend integration for web workflows supporting 1K+ user interactions.",
      "Managed website hosting and deployment using WordPress and Hostinger.",
      "Collaborated with development team members during workflow implementation, testing, and issue resolution."
    ],
    projectLinks: [
      { label: "GitHub Repository", url: "https://github.com/rushirk2004-ops/webscrapping_publication" }
    ],
    skillsApplied: ["Python", "BeautifulSoup", "Web Scraping", "WordPress", "Hostinger", "Data Automation", "API Integration", "Deployment & Testing"]
  }
];

export const educationHistory = [
  {
    degree: "Bachelor of Engineering in Computer Science Engineering",
    institution: "International Institute of Information Technology, Pune",
    period: "Aug 2023 – May 2027",
    score: "9.16 CGPA",
    status: "Currently Pursuing",
    description: "Focusing on Core Computer Science, Advanced Java Backend Architecture, Algorithms, Database Management, and Machine Learning.",
    highlights: ["Academic Excellence (9.16 CGPA)", "Active in Backend & Machine Learning research projects"]
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Nutan Vidya Prasarak Mandal’s Arts, Commerce & Science College, Lasalgaon",
    period: "2022",
    score: "88.50%",
    status: "Completed",
    description: "Major subjects: Physics, Chemistry, Mathematics, and Computer Science.",
    highlights: ["Strong foundation in Mathematics and Computing fundamentals"]
  },
  {
    degree: "Secondary Education (10th)",
    institution: "Savitribai Phule Madhyamik Vidyalay, Somthandesh",
    period: "2020",
    score: "85.60%",
    status: "Completed",
    description: "Graduated with distinction with high standing in Science and Mathematics.",
    highlights: ["Top quartile academic performance"]
  }
];
