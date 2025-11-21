import GridLayout from "../components/GridLayout";
import Card from "../components/Card";
import peliculas from "../data/peliculas";
import { Link } from "react-router-dom";

function InterpretesPage() {
  return (
    
    <GridLayout titulo="Intérpretes de películas destacadas">

      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>

      <section className="w-full mt-8" aria-labelledby="interpretes-lista">
        <ul id="interpretes-lista" aria-label="Listado de intérpretes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 list-none p-0 items-stretch">
          {peliculas.flatMap((pelicula) =>
            pelicula.actores.map((actor, index) => (
              <li key={`${pelicula.id}-${index}`} className="h-full">
                <Link to={`/interpretes/${index}-${pelicula.id}`} className="no-underline h-full block">
                <Card nombre={actor.nombre} foto={actor.imagen}>
                  {actor.biografia}
                </Card>
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </GridLayout>
  )
}

export default InterpretesPage