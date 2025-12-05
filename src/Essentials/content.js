const navigation = [
  { title: "Home", ref: "#home" },
  { title: "Projects", ref: "#projects" },
  { title: "About", ref: "#about" },
  { title: "Resume", ref: "#resume" },
  { title: "Contact", ref: "#contact" },
];
export { navigation };

const heroSectionText = [
  {
    title: "Hi, Im Benjamin, a Full Stack Student Developer",
    subtitle:
      "Full-Stack Developer | Passionate about Web & Software Development",
  },
];
export { heroSectionText };

const aboutMe = [
  {
    title: "About Me",
    subtitle:
      "I am Benjamin Mwambakulu, a Student a Malawi University of Malawi(MUST). I am currently in my third year of my bachelor degree in Business Information Technology.  I specialize in PHP, CSS, HTML, JS, and React. Currently, I'm expanding my skills by learning Laravel.",
    skills: {
      Backend: [
        { name: "PHP", icon: "php.png" },
        { name: "PostgreSQL", icon: "postgres.png" },
        { name: "NodeJS and ExpressJS", icon: "nodejs.png" },
        { name: "Laravel", icon: "laravel.png" },
        { name: "MySQL", icon: "mysql.png" },
        { name: "Supabase", icon: "supabase.png" },
      ],
      Frontend: [
        { name: "HTML", icon: "html.png" },
        { name: "CSS", icon: "css.png" },
        { name: "JS", icon: "javascript.png" },
        { name: "React", icon: "react.png" },
        { name: "Flutter", icon: "flutter.png"},
        { name: "TailwindCC", icon: "tailwind.png" },
      ],
      Mobile: [{ name: "Flutter", icon: "flutter.png" }],
      Tools: [
        { name: "Git", icon: "git.png" },
        { name: "Github", icon: "github.png" },
        { name: "VS Code", icon: "vscode.png" },
        { name: "Figma", icon: "figma.png" },
      ],
    },
  },
];

export { aboutMe };

const projects = [
  {
    id: 1,
    title: "E-Commerce Template",
    description:
      "A e-commerce template built with React and TailwindCSS. It is a fully responsive website. Easy to use and customize by using JSON data.",
    technologies: ["React", "TailwindCSS"],
    image: "ecommerce.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce",
    gitHub: false,
    live: false,
    featured: false,
    category: "Frontend",
  },
  {
    id: 2,
    title: "Pamsika",
    description:
      "Pamsika is frontend ecommerce app that utilize ReactJS and TailwindCSS. Group assignment utilizing the knowledge from Human Computer Interaction",
    technologies: ["React", "TailwindCSS"],
    image: "pamsika.png",
    liveUrl: "https://example.com",
    live: false,
    githubUrl: "https://github.com/username/task-app",
    featured: true,
    gitHub: false,
    category: "Frontend",
  },
  {
    id: 3,
    title: "NotesQuest",
    description:
      "NotesQuest is a personal note taking app that uses Supabase, React and TailwindCSS. Authentication using Supabase",
    technologies: ["React", "TailwindCSS", "Supabase"],
    image: "notesquest.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
    live: false,
    gitHub: false,
    category: "Full Stack",
  },
];

export { projects };

const contactInfo = {
  title: "Let's Work Together",
  subtitle:
    "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!",
  email: "mwambakulubenjamin2o5@gmail.com",
  phone: "+265 885 705 304",
  location: "Lilongwe, Malawi",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/benjaminmwambakulu",
      icon: "github.png",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/benjaminmwambakulu",
      icon: "linkedin.png",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/benjaminmwamba",
      icon: "instagram.png",
    },
  ],
  availability: "Available where needed",
};

export { contactInfo };

const resumeInfo = {
  title: "Download My Documents",
  subtitle:
    "Get a copy of my resume and CV to learn more about my experience and qualifications.",
  documents: [
    {
      id: 1,
      title: "Resume",
      description:
        "A concise overview of my skills, experience, and education tailored for quick review.",
      type: "PDF",
      size: "245 KB",
      lastUpdated: "January 2025",
      available: false,
      downloadUrl: "/documents/benjamin-mwambakulu-resume.pdf",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      id: 2,
      title: "Curriculum Vitae (CV)",
      description:
        "A comprehensive document detailing my complete academic and professional background.",
      type: "PDF",
      size: "387 KB",
      lastUpdated: "January 2025",
      available: false,
      downloadUrl: "/documents/benjamin-mwambakulu-cv.pdf",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
  ],
};

export { resumeInfo };
