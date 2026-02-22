export const experienceData = [
  {
    id: 1,
    date: "DEC 2023 - PRESENT",
    role: "Software Engineer",
    company: "Stepping Edge, Coimbatore",
    description: "Building scalable frontend architectures and component systems.",
    projects: [
      {
        tabName: "Stepping Edge",
        title: "Stepping Edge Service Site",
        subtitle: "Corporate Web Platform",
        description: "A high-performance corporate website rebuilt with Vue.js, focusing on modular architecture and advanced SEO optimization to drive organic traffic growth.",
        tech: ["Vue.js", "SEO", "Responsive Design"],
        achievements: [
          "Boosted page load performance by 35%",
          "Implemented dynamic routing for services"
        ],
        linkText: "VIEW PROJECT DETAILS"
      },
      {
        tabName: "SST",
        title: "SST Dashboard",
        subtitle: "Internal Analytics Tool",
        description: "Developed a robust internal serverless dashboard using modern frontend tools to monitor traffic and manage administrative routing across the corporate network.",
        tech: ["React", "Tailwind CSS", "AWS SST"],
        achievements: [
          "Reduced data fetch times by 20%",
          "Streamlined internal data monitoring"
        ],
        linkText: "VIEW INTERNAL TOOL"
      }
    ]
  },
  {
    id: 2,
    date: "2024 - PRESENT",
    role: "Personal Projects",
    company: "Independent Development",
    description: "Exploring innovative solutions and building practical applications.",
    projects: [
      {
        tabName: "Email Automation",
        title: "Email Automation Platform",
        subtitle: "Full-stack Marketing Tool",
        description: "A comprehensive SaaS full-stack MVP designed to automate marketing workflows. Handled list management, campaign scheduling, and real-time analytics for email delivery.",
        tech: ["React", "Node.js", "MongoDB", "Express.js"],
        achievements: [
          "Automated delivery system",
          "Campaign analytics dashboard"
        ],
        linkText: "EXPLORE PROJECT"
      },
      {
        tabName: "Career Guidance",
        title: "Career Path Finder",
        subtitle: "Student Mentorship Platform",
        description: "An interactive platform helping students map out their educational journey based on current skills and market trends.",
        tech: ["React", "Firebase", "Tailwind"],
        achievements: [
          "100+ active student users",
          "Integrated real-time chat"
        ],
        linkText: "VIEW DEMO"
      },
      {
        tabName: "Scholarship Platform",
        title: "Scholarship Finder",
        subtitle: "Educational Resource App",
        description: "A centralized hub for students to discover and apply for verified national and international scholarships based on their profile.",
        tech: ["Next.js", "PostgreSQL", "Prisma"],
        achievements: [
          "Scraped 500+ active scholarships",
          "Custom user matching algorithm"
        ],
        linkText: "VIEW PROJECT"
      }
    ]
  },
  {
    id: 3,
    date: "NOV 2024 - DEC 2025",
    role: "Junior Software Engineer",
    company: "BrewsZilla Technologies, Bengaluru",
    roleHighlight: "Flutter Developer",
    description: "Focused on cross-platform mobile application development and API integration.",
    projects: [
      {
        tabName: "CMIS",
        title: "BrewsZilla CMIS",
        subtitle: "Internal Management",
        description: "Internal management information system for tracking employee metrics and project deliverables across the organization.",
        tech: ["React.js", "Redux", "Material UI"],
        achievements: [
          "Streamlined reporting by 30%",
          "Built custom data grid components"
        ],
        linkText: "VIEW DETAILS"
      },
      {
        tabName: "BrewsZilla App",
        title: "BrewsZilla Mobile App",
        subtitle: "Cross-platform Mobile Application",
        description: "Developed the core mobile experience using Flutter, focusing on smooth animations, offline support, and seamless API communication.",
        tech: ["Flutter", "Dart", "Firebase"],
        achievements: [
          "Published to iOS and Android",
          "Implemented complex state management"
        ],
        linkText: "VIEW APP STORE"
      },
      {
        tabName: "BrewsZilla CMS",
        title: "BrewsZilla CMS",
        subtitle: "Enterprise Content Management System",
        description: "A robust CMS engineered to streamline content delivery across BrewsZilla's multi-platform ecosystem. Features real-time editing, role-based access control, and seamless API integration for instant updates.",
        tech: ["React.js", "Node.js", "GraphQL", "MongoDB"],
        achievements: [
          "Reduced content deployment time by 40%",
          "Implemented custom rich text editor"
        ],
        linkText: "VIEW FULL PROJECT"
      },
      {
        tabName: "BrewsZilla Website",
        title: "BrewsZilla Public Facing Site",
        subtitle: "Marketing & Landing Pages",
        description: "The main marketing website for the BrewsZilla brand, optimized for lightning-fast load times and high conversion rates.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        achievements: [
          "Achieved 99/100 Lighthouse score",
          "Integrated headless CMS content"
        ],
        linkText: "VIEW LIVE SITE"
      }
    ]
  },
  {
    id: 4,
    date: "2020 - 2024",
    role: "B.E. Computer Science",
    company: "K S R Institute for Engineering and Technology",
    description: "",
    isSimpleCard: true, 
    cardData: {
      description: "Graduated with a focus on core computer science principles and software engineering methodologies.",
      score: "78% Score"
    }
  }
];


// ... Keep your existing experienceData array above ...

// --- NEW DATA FOR ABOUT & SKILLS ---

export const aboutData = {
  role: "Software Engineer",
  location: "Tamil Nadu, India",
  description: "Passionate about crafting scalable digital experiences. With over 2 years of engineering excellence, I specialize in building intuitive user interfaces and robust backend architectures. I bridge the gap between design and technology.",
  tags: ["Problem Solver", "UI Enthusiast", "Clean Code"]
};

export const arsenalData = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Building interactive UIs",
    // Cyan glow theme
    glowColor: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    skills: [
      { name: "React.js", desc: "Component Architecture", iconColor: "text-cyan-400" },
      { name: "Vue.js", desc: "Progressive Framework", iconColor: "text-emerald-400" },
      { name: "Flutter", desc: "Cross-platform mobile", iconColor: "text-blue-400" }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server-side logic & APIs",
    // Purple glow theme
    glowColor: "bg-fuchsia-500/20",
    iconColor: "text-fuchsia-400",
    skills: [
      { name: "Node.js", desc: "Runtime", iconColor: "text-green-400" },
      { name: "REST APIs", desc: "Architecture", iconColor: "text-orange-400" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    subtitle: "Version control & testing",
    // Gray/subtle glow theme
    glowColor: "bg-white/5",
    iconColor: "text-gray-400",
    skills: [
      { name: "Git", desc: "Version Control", iconColor: "text-orange-500" },
      { name: "Postman", desc: "API Testing", iconColor: "text-orange-400" },
      { name: "Keycloak", desc: "Identity & Access", iconColor: "text-blue-500" }
    ]
  }
];


// ... Keep your existing experienceData, aboutData, and arsenalData above ...

// --- NEW DATA FOR EDUCATION ---

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    major: "Computer Science and Engineering",
    school: "K S R Institute",
    date: "2020 - 2024",
    score: "78%",
    theme: "cyan" // Drives the icon color, left border, and date pill
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    major: "Maths-computer",
    school: "Sun Stars Higher Secondary",
    date: "2019 - 2020",
    score: "67%",
    theme: "purple"
  },
  {
    id: 3,
    degree: "Secondary School (SSLC)",
    major: "Stateboard",
    school: "Sri Raja Vinayaga",
    date: "2017 - 2018",
    score: "84%",
    theme: "blue"
  }
];