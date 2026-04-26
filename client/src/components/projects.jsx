const projects = [
    {
        id: 1,
        title: "A Deep Learning Approach for Real Time Face Detection And Automated Notification",
        description: "This Python Django-based system employs deep learning models like CNNs or MTCNN for real-time face detection via webcam or camera feeds. Upon detecting faces, it automates notifications (e.g., SMS or alerts) for applications like security or attendance tracking",
        image: "/images/Project1.png",
        techStack: ["Python", "Django", "YOLO", "Facenet"],
        viewCode: "https://github.com/Shohaab/Student-Face-Recognition-In-Django-Project",
    },
    {
        id: 2,
        title: "Thaassaemia Centre Website",
        description: "This React frontend and Python Django backend website serves as a digital platform for a thalassemia care center, enabling patient registration, and treatment tracking. It provides specialized features like blood transfusion scheduling, donor management, and medical record access tailored to thalassemia patients.",
        image: "/images/project2.png",
        techStack: ["React", "Django", "Tailwind"],
        viewCode: "https://github.com/Shohaab/Thalassemia-Centre-Website",
    },
    {
        id: 3,
        title: "Jamia Software",
        description: "A comprehensive software solution for the Jamia institution, designed to streamline administrative processes and enhance the overall user experience for students and staff.",
        image: "/images/project3.png",
        techStack: ["Python", "Django"],
        viewCode: "https://github.com/Shohaab/Jamia-Software",
    },
    {
        id: 4,
        title: "AI Based Car Guidance RAG Agent",
        description: "Developed an RAG-based AI agent to guide users on car maintenance using OpenAI Agents SDK, GEMINI API, vector databases, and Streamlit",
        image: "/images/project4.png",
        techStack: ["Python", "Streamlit", "OpenAI Agents SDK", "GEMINI API", "Vector Databases"],
        viewCode: "https://github.com/Shohaab/AI-Car-Maintanance-RAG",
    },
    {
        id: 5,
        title: "E-Commerce Website",
        description: "A full-stack e-commerce website built with Html css javascripts Mysql PHP, featuring user authentication, product listings, shopping cart functionality, and secure payment integration for a seamless online shopping experience.",
        image: "/images/project5.png",
        techStack: ["HTML", "CSS", "JavaScript", "Mysql", "PHP"],
        viewCode: "https://github.com/Shohaab/Ecommerce-Website",
    },

    {
        id: 6,
        title: "Restruant  Website",
        description: "A full-stack restaurant website built with Html css javascripts Mysql PHP, Landing Page for a Restruant .",
        image: "/images/project6.png",
        techStack: ["HTML", "CSS", "JavaScript", "Mysql", "PHP"],
        viewCode: "https://github.com/Shohaab/Restruant-Website",
    },

    {
        id: 7,
        title: "Portfolio  Website",
        description: "Built a Portfolio Website With MERN Technology Stack.",
        image: "/images/project7.png",
        techStack: ["MongoDB", "Express", "React", "NodeJS", "TailwindCSS"],
        viewCode: "https://github.com/Shohaab/shohaab_portfolio",
    },

    {
        id: 8,
        title: "Inventory Management System",
        description: "Built an inventory management system with HTML ,CSS(Tailwind) JavaScript PHP .",
        image: "/images/project8.png",
        techStack: ["HTML", "CSS" , "JavaScript", "PHP"],
        viewCode: "https://github.com/Shohaab/Inventory-Management-System",
    },









];

function GitHubIcon() {
    return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function ProjectCard({ project }) {
    return (
        <div className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#1e293b] hover:border-blue-400/40 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group w-full max-w-sm mx-auto">

            {/* Image */}
            <div className="overflow-hidden h-40">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 p-4 flex-1">

                {/* Title */}
                <h3 className="text-white text-base font-bold leading-snug">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <p className="text-xs text-gray-400">
                    <span className="font-bold text-gray-300">Tech stack : </span>
                    {project.techStack.join(" , ")}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 pt-1">
<a
                    href={project.viewCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-300 hover:text-purple-400 transition-colors duration-200 text-xs font-medium underline underline-offset-2" >
          
                    <GitHubIcon />
                    View Code
                </a>
            </div>

        </div>
    </div >
  );
}

function Projects() {
    return (
        <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-20">

            <div className="max-w-7xl w-full flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-6xl font-bold bg-linear-to-r text-gray-300 leading-tight bg-clip-text">
                        Projects
                    </h2>

                    <p className="m- text-gray-400 text-xl mt-4">
                        Things I've built so far
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;