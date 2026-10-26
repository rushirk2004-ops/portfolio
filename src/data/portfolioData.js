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
    "Developed projects including a Movie Recommendation System, Attendance Tracker System, and Online Shopping Cart using Python, Scikit-learn, Java, Spring Boot, and MySQL.",
    "Completed a Web Developer Internship at Appwizer Solution, working on web scraping, workflow automation, and frontend-backend integration.",
    "Currently pursuing BE in Computer Science Engineering with a 9.16 CGPA, and continuously improving my skills in DSA, Machine Learning, Docker, and AWS."
  ],
  stats: [
    { label: "Current CGPA", value: "9.16", detail: "IIIT Pune (CSE)" },
    { label: "Data Records Scraped", value: "10,000+", detail: "At Appwizer Solution" },
    { label: "Workflow Efficiency", value: "+60%", detail: "Process Automation" },
    { label: "Key Projects", value: "3+", detail: "Java, ML & Full-Stack" }
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
    githubUrl: "https://github.com/rushirk2004-ops?tab=repositories",
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
    githubUrl: "https://github.com/rushirk2004-ops?tab=repositories",
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
    githubUrl: "https://github.com/rushirk2004-ops?tab=repositories",
    highlight: "Role-Based Access & Secure Auth",
    featured: true
  }
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
