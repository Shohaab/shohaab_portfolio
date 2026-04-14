const techStack = [
    {
        category: "Frontend",
        techs: [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        ],
    },
    {
        category: "Backend",
        techs: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", invert: true },
            { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        ],
    },
    {
        category: "Database",
        techs: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", invert: true },
        ],
    },
    {
        category: "AI & Cloud & Tools",
        techs: [
            { name: "OpenAI Agents SDK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg", invert: true },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
        ],
    },
];

function TechCard({ tech }) {
    return (
        <div className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
            <img
                src={tech.icon}
                alt={tech.name}
                className={`w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 ${tech.invert ? "invert opacity-70 group-hover:opacity-100" : ""}`}
                onError={(e) => { e.target.style.display = "none"; }}
            />
            <span className="text-xs font-semibold text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center">
                {tech.name}
            </span>
        </div>
    );
}


function TechStack() {
    return (
        <section className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 py-20">

            <div className="max-w-7xl w-full flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold bg-linear-to-r text-gray-300 leading-tight bg-clip-text">
                        My Tech Stack
                    </h2>
                    <p className="text-gray-400 text-xl mt-4">
                        Technologies I've been working with recently
                    </p>
                </div>

                {/* Categories */}
                <div className="w-full flex flex-col gap-12">
                    {techStack.map((category) => (
                        <div key={category.category}>

                            {/* Category Label */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-6 rounded-full bg-linear-to-b from-blue-400 to-purple-500" />
                                <h3 className="text-gray-300 font-semibold text-sm tracking-widest uppercase">
                                    {category.category}
                                </h3>
                                <div className="flex-1 h-px bg-linear-to-r from-blue-400/20 to-transparent" />
                            </div>

                            {/* Cards */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                {category.techs.map((tech) => (
                                    <TechCard key={tech.name} tech={tech} />
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default TechStack;