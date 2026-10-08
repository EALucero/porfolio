export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Hola, soy <span className="text-blue-500">Eduardo</span>
      </h2>
      <p className="text-lg md:text-xl max-w-xl">
        Backend & Frontend Developer | Smart Contracts | Docker | Arquitecturas escalables
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Ver mis proyectos
      </a>
    </section>
  );
}