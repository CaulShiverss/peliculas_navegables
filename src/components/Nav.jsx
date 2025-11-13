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
    </nav>
  );
}

export default Nav;
