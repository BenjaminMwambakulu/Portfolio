const navigation = [
    { title: "Home", ref: "#home" },
    { title: "Projects", ref: "#projects" },
    { title: "About", ref: "#about" },
    { title: "Contact", ref: "#contact" }
]
export { navigation };

const heroSectionText = [
    {
        title: "Hi, Im Benjamin, a Full Stack Student Developer",
        subtitle: "Full-Stack Developer | Passionate about Web & Software Development",
    }
]
export { heroSectionText };

const aboutMe = [
    {
        title: "About Me",
        subtitle: "I am Benjamin Mwambakulu, a Student a Malawi University of Malawi(MUST). I am currently in my third year of my bachelor degree in Business Information Technology.  I specialize in PHP, CSS, HTML, JS, and React. Currently, I'm expanding my skills by learning Laravel.",
        skills: {
            Backend: [
                { name: "PHP", icon: "php.png" },
                { name: "Laravel", icon: "laravel.png" },
                { name: "MySQL", icon: "mysql.png" },
                { name: "Supabase", icon: "supabase.png" }
            ],
            Frontend: [
                { name: "HTML", icon: "html.png" },
                { name: "CSS", icon: "css.png" },
                { name: "JS", icon: "javascript.png" },
                { name: "React", icon: "react.png" },
                { name: "TailwindCC", icon: "tailwind.png" }
            ],
            Tools: [
                { name: "Git", icon: "git.png" },
                { name: "Github", icon: "github.png" },
                { name: "VS Code", icon: "vscode.png" },
                { name: "Figma", icon: "figma.png" }
            ]
        },
    }
]

export { aboutMe };

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform built with Laravel and React. Features include user authentication, product management, shopping cart, and payment integration.",
        technologies: ["Laravel", "React", "MySQL", "TailwindCSS"],
        image: "ecommerce-project.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/ecommerce",
        featured: true,
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        technologies: ["React", "Supabase", "TailwindCSS"],
        image: "task-app.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/task-app",
        featured: true,
        category: "Frontend"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my projects and skills. Built with modern web technologies and optimized for performance.",
        technologies: ["React", "TailwindCSS", "Vite"],
        image: "portfolio.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/portfolio",
        featured: false,
        category: "Frontend"
    },
    {
        id: 4,
        title: "API Dashboard",
        description: "A comprehensive dashboard for API management and monitoring. Includes analytics, user management, and real-time data visualization.",
        technologies: ["PHP", "Laravel", "MySQL", "Chart.js"],
        image: "api-dashboard.jpg",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/api-dashboard",
        featured: false,
        category: "Backend"
    }
];

export { projects };

const contactInfo = {
    title: "Let's Work Together",
    subtitle: "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!",
    email: "benjamin.mwambakulu@example.com",
    phone: "+265 123 456 789",
    location: "Blantyre, Malawi",
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/benjaminmwambakulu",
            icon: "github.png"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/benjaminmwambakulu",
            icon: "linkedin.png"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/benjaminmwamba",
            icon: "twitter.png"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/benjaminmwamba",
            icon: "instagram.png"
        }
    ],
    availability: "Available for freelance work and full-time opportunities"
};

export { contactInfo };