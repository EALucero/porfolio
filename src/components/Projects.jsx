export default function Projects() {
  const projects = [
    {
      title: "KipuBankV3",
      description: "Smart contract bancario desplegado en Sepolia con setup reproducible y verificación en Etherscan.",
      stack: ["Solidity", "Foundry", "Docker"],
      github: "https://github.com/tuusuario/KipuBankV3",
      demo: "https://sepolia.etherscan.io/address/0x123456..."
    },
    {
      title: "Portfolio React + Tailwind",
      description: "Portfolio personal modular y escalable, con dark mode y animaciones.",
      stack: ["React", "Tailwind", "Vite"],
      github: "https://github.com/tuusuario/portfolio",
      demo: "https://tuportfolio.vercel.app"
    },
    {
      title: "Automation Scripts",
      description: "Scripts en Bash y Docker para despliegues reproducibles y limpieza de entornos.",
      stack: ["Bash", "Docker", "CI/CD"],
      github: "https://github.com/tuusuario/automation-scripts",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-light dark:bg-neutral-dark">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}