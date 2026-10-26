export const personalInfo = {
  name: "Rushikesh Kunde",
  role: "Software Developer | Java Backend Developer | Machine Learning Enthusiast",
  location: "Pune, Maharashtra, India",
  email: "rushikeshkunde764@gmail.com",
  github: "https://github.com/rushirk2004-ops",
  linkedin: "https://www.linkedin.com/in/rushikesh-kunde-63678a301/",
  resumeUrl: "./resume.pdf",
  bioHeadline: "Building robust backend architectures, scalable REST APIs, and data-driven machine learning solutions.",
  aboutParagraphs: [
    "Computer Science Engineering undergraduate with skills in Java, Spring Boot, Python, Machine Learning, data analysis, and backend development. Experienced in building REST APIs, database-driven applications, and data processing workflows.",
    "Developed 50+ projects and repositories including Movie Recommendation System, Attendance Tracker System, Online Shopping Cart, AI Interview Platform, and Web Scraping pipelines using Python, Scikit-learn, Java, Spring Boot, and MySQL.",
    "Completed a Web Developer Internship at Appwizer Solution, working on web scraping, workflow automation, and frontend-backend integration.",
    "Currently pursuing BE in Computer Science Engineering with a 9.16 CGPA, and continuously improving my skills in DSA, Machine Learning, Docker, and AWS."
  ],
  stats: [
    { label: "Current CGPA", value: "9.16", detail: "IIIT Pune (CSE)" },
    { label: "Projects & Repositories", value: "50+", detail: "Java, Python, ML & Web" },
    { label: "Data Records Scraped", value: "10,000+", detail: "At Appwizer Solution" },
    { label: "Workflow Efficiency", value: "+60%", detail: "Process Automation" }
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "Python", "C", "C++", "SQL"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Spring Boot", "REST APIs", "JPA", "Flask", "Thymeleaf"]
  },
  {
    category: "Machine Learning & Data Analysis",
    icon: "BrainCircuit",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Data Analysis",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib"
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Cloud",
    icon: "Cloud",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS EC2",
      "Postman",
      "VS Code",
      "Jupyter Notebook",
      "IntelliJ IDEA",
      "Eclipse"
    ]
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    category: "Testing & Automation",
    icon: "CheckCircle2",
    skills: ["API Testing", "Unit Testing", "Web Scraping", "BeautifulSoup"]
  }
];

export const projects = [
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    category: "Machine Learning",
    description:
      "Developed a content-based movie recommendation system using movie metadata, including genres, keywords, cast, director, and overview. Used Pandas, NumPy, CountVectorizer, and Scikit-learn to process metadata and identify similar movies.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    githubUrl: "https://github.com/rushirk2004-ops/movie_recommendation_system",
    highlight: "Content-based Filtering & Vectorization",
    featured: true
  },
  {
    id: "attendance-tracker-system",
    title: "Attendance Tracker System",
    category: "Backend Development",
    description:
      "Built an attendance management system to maintain and track student records. Implemented REST APIs, MySQL database integration, and validation.",
    technologies: ["Java", "Spring Boot", "MySQL", "JPA", "REST APIs"],
    githubUrl: "https://github.com/rushirk2004-ops/attendance",
    highlight: "REST API & Relational Database Architecture",
    featured: true
  },
  {
    id: "online-shopping-cart",
    title: "Online Shopping Cart",
    category: "Full-Stack & Backend",
    description:
      "Built a full-stack e-commerce application with product, cart, user, and order management. Implemented Spring Security, authentication, role-based access, password encryption, product search, filtering, and pagination.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
      "Thymeleaf",
      "Docker"
    ],
    githubUrl: "https://github.com/rushirk2004-ops/shoppingweb",
    highlight: "Role-Based Access & Secure Auth",
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
      "Automated web extraction pipeline built using Python and BeautifulSoup to extract, sanitize, and structure over 10,000+ data records into relational databases.",
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
  { name: "movie_recommendation_system", url: "https://github.com/rushirk2004-ops/movie_recommendation_system", language: "Python", desc: "Content-based movie recommendation system using Scikit-learn and Pandas." },
  { name: "shoppingweb", url: "https://github.com/rushirk2004-ops/shoppingweb", language: "Java", desc: "Full-stack e-commerce store with Spring Boot, Spring Security & MySQL." },
  { name: "attendance", url: "https://github.com/rushirk2004-ops/attendance", language: "Java", desc: "Attendance tracker system with REST APIs, JPA and MySQL integration." },
  { name: "attendance_tracker", url: "https://github.com/rushirk2004-ops/attendance_tracker", language: "Java", desc: "Attendance records management and validation architecture." },
  { name: "ai-interview-platform", url: "https://github.com/rushirk2004-ops/ai-interview-platform", language: "JavaScript", desc: "AI-driven interview testing, assessment, and candidate interaction platform." },
  { name: "ai-interview-project", url: "https://github.com/rushirk2004-ops/ai-interview-project", language: "JavaScript", desc: "Core assessment engine and UI workflows for interview management." },
  { name: "CropFlow_Project", url: "https://github.com/rushirk2004-ops/CropFlow_Project", language: "Python", desc: "Predictive agriculture analytics and machine learning crop yield modeling." },
  { name: "webscrapping_publication", url: "https://github.com/rushirk2004-ops/webscrapping_publication", language: "Python", desc: "Automated BeautifulSoup scraping pipeline processing publication records." },
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
    duration: "January 2026 – June 2026",
    location: "Pune, India (Hybrid)",
    type: "Internship",
    achievements: [
      "Developed Python web scraping pipelines using BeautifulSoup, processing over 10,000 records.",
      "Automated data extraction workflows, reducing manual effort by 60%.",
      "Contributed to frontend and backend integration for workflows supporting over 1,000 user interactions.",
      "Worked on website hosting, deployment, testing, debugging, and issue resolution."
    ],
    skillsApplied: ["Python", "BeautifulSoup", "Web Scraping", "API Integration", "Automation", "Deployment & Testing"]
  }
];

export const educationHistory = [
  {
    degree: "Bachelor of Engineering in Computer Science Engineering",
    institution: "International Institute of Information Technology, Pune",
    period: "August 2023 – May 2027",
    score: "9.16 CGPA",
    status: "Currently Pursuing",
    description: "Focusing on Core Computer Science, Advanced Java Backend Architecture, Algorithms, Database Management, and Machine Learning.",
    highlights: ["Academic Excellence (9.16 CGPA)", "Active in Backend & Machine Learning research projects"]
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "State Board of Maharashtra",
    period: "2022",
    score: "88.50%",
    status: "Completed",
    description: "Major subjects: Physics, Chemistry, Mathematics, and Computer Science.",
    highlights: ["Strong foundation in Mathematics and Computing fundamentals"]
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "State Board of Maharashtra",
    period: "2020",
    score: "85.60%",
    status: "Completed",
    description: "Graduated with distinction with high standing in Science and Mathematics.",
    highlights: ["Top quartile academic performance"]
  }
];
