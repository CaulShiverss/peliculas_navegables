import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex gap-6">
      <Link to="/peliculas" className="hover:text-blue-200 transition">
        Películas
      </Link>
      <Link to="/interpretes" className="hover:text-blue-200 transition">
        Intérpretes
      </Link>
      <Link to="/" className="hover:text-blue-200 transition">
        Inicio
      </Link>
      <Link to="/admin" className="hover:text-blue-200 transition">
        Admin
      </Link>
    </nav>
  );
}

export default Nav;
