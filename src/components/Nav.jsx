import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <section
      role="navigation"
      aria-label="Navegación principal"
      className="p-4 flex justify-between items-center text-white"
    >
      {/* Menú normal (solo en pantallas grandes) */}
      <nav className="hidden md:flex gap-6" aria-label="Enlaces principales">
        <Link to="/" className="hover:text-blue-300 transition">
          Inicio
        </Link>
        <Link to="/peliculas" className="hover:text-blue-300 transition">
          Películas
        </Link>
        <Link to="/interpretes" className="hover:text-blue-300 transition">
          Intérpretes
        </Link>
        <Link to="/admin" className="hover:text-blue-300 transition">
          Admin
        </Link>
      </nav>

      {/* Botón hamburguesa (solo móvil) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-haspopup="true"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        ☰
      </button>

      {/* Menú móvil */}
      <nav
        id="mobile-menu"
        className={`absolute top-16 right-4 primary-bg p-4 rounded-lg flex flex-col gap-3 md:hidden transition ${
          open ? "block" : "hidden"
        }`}
        aria-hidden={!open}
        aria-label="Menú móvil"
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="hover:text-blue-300"
        >
          Inicio
        </NavLink>
        <NavLink
          to="/peliculas"
          onClick={() => setOpen(false)}
          className="hover:text-blue-300"
        >
          Películas
        </NavLink>
        <NavLink
          to="/interpretes"
          onClick={() => setOpen(false)}
          className="hover:text-blue-300"
        >
          Intérpretes
        </NavLink>
        <NavLink
          to="/admin"
          onClick={() => setOpen(false)}
          className="hover:text-blue-300"
        >
          Admin
        </NavLink>
      </nav>
    </section>
  );
}

export default Nav;
