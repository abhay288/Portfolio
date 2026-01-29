import { Github, Linkedin, Palette, Video, MapPin, GitGraph, Camera, Trophy, Code, Users, Rocket, Brain, Award, Zap } from "lucide-react";

export const personalDetails = {
    name: "Abhay Kushwaha",
    role: "Engineering Student | AI & Full-Stack Developer",
    email: "mauryaabhay518@gmail.com",
    location: "Kanpur, Uttar Pradesh, India",
    socials: [
        { name: "GitHub", url: "https://github.com/abhay288", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/abhay-kushwaha-a2a1b21b3", icon: Linkedin },
    ],
};

// ... existing experiences ...



export const experiences = [
    {
        role: "Creative Designer & Social Media Head",
        company: "GeeksforGeeks Campus Body – Allenhouse",
        duration: "October 2025 – Present",
        location: "Kanpur, Uttar Pradesh, India",
        description: [
            "Designed creative posters, banners, and digital assets for technical events",
            "Managed and grew social media presence of the campus body",
            "Led visual branding and content strategy",
            "Collaborated with technical and core teams for event promotions"
        ],
        icon: Palette,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        role: "Media Head",
        company: "The Logic League Club of Allenhouse",
        duration: "January 2025 – Present",
        location: "Kanpur, India",
        description: [
            "Headed media and design operations for the club",
            "Created promotional content for workshops and coding events",
            "Managed event photography and social media coverage",
            "Ensured consistent visual identity across platforms"
        ],
        icon: Video,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        role: "Local Guide",
        company: "Google Maps",
        duration: "February 2023 – Present",
        location: "India",
        description: [
            "Contributed genuine reviews, photos, and location updates",
            "Improved local business visibility and accuracy",
            "Actively engaged in community-driven mapping initiatives"
        ],
        icon: MapPin,
        color: "text-red-500",
        bg: "bg-red-500/10"
    },
    {
        role: "Contributor",
        company: "Open Source Connect",
        duration: "August 2025 – November 2025",
        location: "Remote",
        description: [
            "Contributed to open-source repositories",
            "Fixed bugs and improved documentation",
            "Collaborated with global developers using Git & GitHub",
            "Followed open-source contribution best practices"
        ],
        icon: GitGraph,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        role: "Member",
        company: "Allenshot – The Photography Club",
        duration: "April 2024 – October 2025",
        location: "Kanpur, India",
        description: [
            "Participated in photography events and workshops",
            "Assisted in event coverage and creative shoots",
            "Enhanced skills in photography and visual storytelling"
        ],
        icon: Camera,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    }
];

export const heroRoles = [
    "AI Developer",
    "Full-Stack Engineer",
    "Recommendation System Builder",
    "GovTech Innovator"
];

export const about = {
    description: "I am an Engineering Student passionate about Artificial Intelligence, Machine Learning, and solving real-world problems through technology. My expertise lies in building government scheme chatbots, recommendation systems, and impactful full-stack applications.",
    experience: [
        {
            year: "2024 - Present",
            role: "AI & Full-Stack Developer",
            company: "Freelance / Projects",
            description: "Building predictive models and scalable web apps."
        },
        // Add more if needed
    ]
};

export const education = [
    {
        degree: "Bachelor of Technology in CSE (AI & ML)",
        institution: "Allenhouse Institute of Technology, Kanpur (AKTU, Lucknow)",
        year: "2023-2027"
    }
];

export const skills = {
    programming: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"],
    frameworks: ["FastAPI", "Flask", "React", "Supabase", "Firebase", "LangChain"],
    tools: ["Chroma", "FAISS", "IBM Watson", "GitHub", "Docker", "Google Antigravity"],
    ai_ml: ["NLP", "Pandas", "NumPy", "Matplotlib", "Recommendation Systems", "RAG", "Chatbots"],
    databases: ["Oracle", "PostgreSQL", "Firebase"],
    soft: ["Communication", "Problem Solving", "Team Collaboration"]
};

export const projects = [
    {
        title: "AVSAR – One-Stop Career & Education Advisor",
        description: "An AI-powered career guidance platform that helps students make data-driven decisions. Features AI recommendation engine, course & college comparison, scholarship discovery, and a secure dashboard. Built to solve real-world accessibility issues in education.",
        tags: ["React", "FastAPI", "PostgreSQL", "AI/ML", "JWT"],
        link: "https://avsar1.netlify.app/",
        github: "#",
        image: "/avsar-logo.png"
    },
    {
        title: "ShareBox – Social Impact Platform",
        description: "A Progressive Web App (PWA) connecting donors with NGOs and individuals in need. Facilitates real-time donations, transparent role-based access, and direct communication to bridge the gap between resources and those who need them.",
        tags: ["TypeScript", "PWA", "Node.js", "Firebase", "PostgreSQL"],
        link: "https://shareboxseva.netlify.app/",
        github: "#",
        image: "/sharebox.png"
    },
    {
        title: "Coming Soon...",
        description: "A new innovative project is currently in the works. Stay tuned for something exciting!",
        tags: ["In Development", "Innovation", "Tech"],
        link: "#",
        github: "#"
    }
];

export const creativePursuits = {
    intro: "Passionate about Photography and Visual Storytelling, with a strong interest in photo editing and creative composition. Photography serves as a creative outlet that complements problem-solving, attention to detail, and design thinking.",
    awards: [
        {
            title: "Silver Medal – Best Shot on the Spot",
            event: "AKTU Zonal Fest 2024–25",
            organization: "Dr. A.P.J. Abdul Kalam Technical University",
            description: "Secured Runner-Up (Silver Medal) in a zonal level university competition. Recognized for creativity, quick decision-making, and technical precision under time constraints.",
            icon: "silver-medal"
        },
        {
            title: "1st Runner-Up – Photography Event",
            event: "EXUBERANCE-24",
            organization: "Allenhouse Institute of Technology",
            description: "Won 2nd place in a competitive photography event. Acknowledged for visual storytelling and unique artistic execution.",
            icon: "award"
        },
        {
            title: "Runner-Up – Best Photo of the Month",
            event: "Monthly Photography Context",
            organization: "Allenhouse Institute of Technology",
            description: "Awarded Runner-Up for consistent creative output and high-quality composition in the monthly showcase.",
            icon: "star"
        }
    ]
};

export const certifications = [
    "Oracle Certified Foundations Associate – OCI AI 2025",
    "SOAR – AI to be Aware (Microsoft & Skill India)",
    "SQL Basics – HackerRank (2022)",
    "CSS Basics – HackerRank (2025)",
    "Java Basics – HackerRank (2025)",
    "Problem Solving – HackerRank (2025)",
    "AI Tools & ChatGPT – 2025",
    "Artificial Intelligence Fundamentals – IBM",
    "Cybersecurity Fundamentals – IBM",
    "Deloitte Technology Job Simulation",
    "Deloitte Data Analytics Job Simulation",
    "Deloitte Cyber Job Simulation",
    "Skyscanner Software Engineering Job Simulation",
    "CCC – NIELIT"
];

export const publication = {
    title: "Life In The Age Of Machines",
    subtitle: "Technology, Ethics, And The Future Of Humanity",
    quote: "“Are we using technology — or is technology using us?”",
    description: "An exploration of how AI and machines are reshaping our lives, ethics, and future. A must-read for anyone navigating the digital age.",
    image: "/book-cover.png",
    links: {
        kindle: "https://amzn.in/d/iXkEBGd",
        paperback: "https://www.amazon.com/dp/9356260222",
        hardcover: "https://a.co/d/9rP7KL1",
        authorPage: "https://www.amazon.com/author/abhaykushwaha",
        pothi: "https://store.pothi.com/book/abhay-kushwaha-life-age-machines/"
    }
};

export const achievements = [
    {
        title: "Oracle Certified Foundations Associate",
        role: "Learner",
        organization: "Oracle",
        location: "OCI 2025 AI Foundations",
        status: "Certified",
        type: "Certification",
        icon: Brain,
        color: "text-red-500",
        bg: "bg-red-500/10",
        highlights: [
            "Validates foundational expertise in OCI & AI",
            "Covers core cloud concepts & AI fundamentals",
            "Focus on real-world AI & cloud innovation"
        ]
    },
    {
        title: "SOAR – AI to be Aware",
        role: "Skill Competency",
        organization: "Microsoft & Skill India",
        location: "National",
        status: "Recognized",
        type: "Certification",
        icon: Award,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        highlights: [
            "Nationally recognized by NCVET, MSDE, Govt. of India",
            "Focus on AI awareness, ethics, sustainability",
            "Strong foundation for responsible AI adoption"
        ]
    },
    {
        title: "Prarambh IBM Hack Challenge 2025",
        role: "Team: THE INFINITE LOOPERS",
        organization: "IBM",
        location: "National",
        status: "Phase 2 Qualified",
        type: "Hackathon",
        icon: Trophy,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        highlights: [
            "Successfully qualified for Phase 2",
            "Phase 1 solution recognized for innovation",
            "Worked through intense ideation & AI prototyping",
            "Demonstrated strong teamwork & execution"
        ]
    },
    // ... rest of the achievements ...
    {
        title: "Smart India Hackathon (SIH) 2025",
        role: "Team Leader",
        organization: "Allenhouse Group of Institutions",
        location: "National Level",
        status: "Qualified",
        type: "Hackathon",
        icon: Brain,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        highlights: [
            "Cleared Internal Round & Advanced to National Level",
            "Led team planning and solution design",
            "focused on identifiable, impact-driven problems"
        ]
    },
    {
        title: "AKTU AI Premier League",
        role: "Participant",
        organization: "AKTU (with HCL & GUVI)",
        location: "Confluence 2025",
        status: "Participant",
        type: "Competition",
        icon: Award,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        highlights: [
            "Participated in AI-focused innovation league",
            "Exposure to real-world AI & ML applications",
            "Collaborated with top student innovators"
        ]
    },
    {
        title: "AKTU AI Tech Confluence 2025",
        role: "Participant",
        organization: "Dr. A.P.J. Abdul Kalam Technical University",
        location: "Lucknow",
        status: "Participant",
        type: "Hackathon",
        icon: Code,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        highlights: [
            "Built AI-based solutions under time constraints",
            "Hands-on exposure to emerging AI & ML tech",
            "Strengthened collaborative & analytical thinking"
        ]
    },
    {
        title: "Hack O’Clock – 24 Hour Hackathon",
        role: "Participant",
        organization: "GDG IILM University (Devfolio)",
        location: "Greater Noida",
        status: "Finalist",
        type: "Hackathon",
        icon: Code,
        color: "text-green-500",
        bg: "bg-green-500/10",
        highlights: [
            "Participated in a 24-hour non-stop hackathon",
            "Worked on real-world problem statements",
            "Collaborated with mentors & industry pros"
        ]
    },
    {
        title: "Adobe India Hackathon 2025",
        role: "Team: Infinite Loopers",
        organization: "Adobe (via Unstop)",
        location: "Online",
        status: "Round 1 Cleared",
        type: "Hackathon",
        icon: Zap,
        color: "text-red-500",
        bg: "bg-red-500/10",
        highlights: [
            "Cleared Round 1 (MCQs + Coding Assessment)",
            "Strengthened problem-solving & logical reasoning",
            "Learned time management under pressure"
        ]
    },
    {
        title: "ISRO Bharatiya Antariksh Hackathon",
        role: "Participant",
        organization: "Hack2skill",
        location: "National",
        status: "Participant",
        type: "Hackathon",
        icon: Rocket,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        highlights: [
            "Participated in space tech innovation challenges",
            "Applied creativity to aerospace problems",
            "Contributed to India’s space innovation ecosystem"
        ]
    },
    {
        title: "Technical Workshops & Training",
        role: "Learner",
        organization: "Google & GeeksforGeeks",
        location: "Various",
        status: "Certified",
        type: "Workshop",
        icon: Users,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        highlights: [
            "Competitive Programming (GFG): Improved algorithms",
            "Google Workspace AI: AI for productivity",
            "Gained insights into real-world AI adoption"
        ]
    }
];
