export default function Skills() {
  const skills = {
    Frontend: ["React", "Tailwind", "Vite"],
    Backend: ["Spring Boot", "Node.js", "MySQL"],
    Blockchain: ["Solidity", "Foundry", "Etherscan"],
    DevOps: ["Docker", "CI/CD", "Bash"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, techs], index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {techs.map((tech, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    • {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}