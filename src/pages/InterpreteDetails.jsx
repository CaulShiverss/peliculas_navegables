import GridLayout from "../components/GridLayout";
import peliculas from "../data/peliculas";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function InterpreteDetails() {
  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id.split("-")[1]));
  const actor = pelicula.actores[parseInt(id.split("-")[0])];

  return (
    <GridLayout titulo={actor ? actor.nombre : "Intérprete no encontrado"}>
      <nav className="w-full flex justify-start" aria-label="Navegación secundaria">
        <Link to="/peliculas" className="text-sm text-gray-900 hover:underline">
          Volver a la lista de intérpretes
        </Link>
      </nav>
      <article aria-label="Interprete details">
        {actor ? (
          <section>
            <section className="mt-4 flex flex-col items-center lg:flex-row lg:items-start gap-6">
              <figure className="w-full max-w-md">
                <img
                  src={actor.imagen}
                  alt={`Foto del intérprete ${actor.nombre}`}
                  className="w-full rounded-lg mb-4"
                />
                <figcaption className="sr-only">
                  Foto de {actor.nombre}
                </figcaption>
              </figure>
              <section className="flex flex-col gap-4 lg:items-start text-left">
                <p className="body-text mt-2">{actor.biografia}</p>
              </section>
            </section>
            <section className="mt-6" aria-labelledby="peliculas-heading">
              <h2 id="peliculas-heading" className="font-heading-h5 mb-3">
                Películas destacadas
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 items-stretch">
                    {pelicula ? (
                        <li key={pelicula.id} className="h-full">
                            <Link to={`/peliculas/${pelicula.id}`} className="no-underline h-full block">
                                <Card nombre={pelicula.nombre} foto={pelicula.cartelera}>
                                    {pelicula.resumen}
                                </Card>
                            </Link>
                        </li>
                    ) : null}
                </ul>
            </section>
          </section>
        ) : (
          <p className="body-text">
            Lo sentimos, no se encontró el intérprete solicitado.
          </p>
        )}
      </article>
    </GridLayout>
  );
}

export default InterpreteDetails;
