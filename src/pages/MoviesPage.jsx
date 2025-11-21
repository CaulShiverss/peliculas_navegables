import GridLayout from "../components/GridLayout";
import Card from "../components/Card";
import peliculas from "../data/peliculas";
import { Link } from "react-router-dom";

function MoviesPage() {
  return (
    
    <GridLayout titulo="Peliculas">
  
      <p className="body-text">
        Listado de peliculas disponibles:
      </p>

      <section className="w-full mt-8" aria-labelledby="peliculas-lista">
        <ul id="peliculas-lista" aria-label="Listado de películas" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 list-none p-0 items-stretch">
          {peliculas.map((pelicula) => (
            <li key={pelicula.id} className="h-full">
              <Link to={`/peliculas/${pelicula.id}`} className="no-underline h-full block">
                <Card nombre={pelicula.nombre} foto={pelicula.cartelera}>
                  {pelicula.resumen}
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </GridLayout>
  )
}

export default MoviesPage