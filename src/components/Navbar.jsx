export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Nombre */}
        <h1 className="text-xl font-bold">EALucero</h1>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}