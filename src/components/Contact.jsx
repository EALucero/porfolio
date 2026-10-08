export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-light dark:bg-neutral-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Si querés colaborar, charlar sobre proyectos o simplemente conectar, escribime:
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:tuemail@gmail.com"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Email
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}