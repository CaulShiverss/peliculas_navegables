import GridLayout from "../components/GridLayout";
import peliculas from "../data/peliculas";
import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

function MovieDetails() {
  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  return (
    <GridLayout titulo={pelicula ? pelicula.nombre : "Película no encontrada"}>
      
      {/* Navegación secundaria */}
      <nav 
        className="w-full flex justify-start mb-4" 
        aria-label="Navegación secundaria"
      >
        <BackButton />
      </nav>

      {/* Contenido principal */}
      <article 
        aria-labelledby="movie-heading"
        className="w-full"
      >
        {pelicula ? (
          <section className="mt-4">

            {/* Título accesible para lectores de pantalla */}
            <header className="sr-only">
              <h1 id="movie-heading">{pelicula.nombre}</h1>
            </header>

            {/* Información de la película */}
            <section
              className="flex flex-col lg:flex-row items-start gap-6"
              role="group"
              aria-label={`Información de ${pelicula.nombre}`}
            >
              <figure className="w-full lg:w-1/3 max-w-md">
                <img
                  src={pelicula.cartelera}
                  alt={`Cartelera de la película ${pelicula.nombre}`}
                  className="w-full rounded-lg"
                />
                <figcaption className="sr-only">
                  Cartel de {pelicula.nombre}
                </figcaption>
              </figure>

              <section className="w-full lg:w-2/3 text-left">
                <dl className="space-y-3">
                  <dt className="font-heading-h5 font-semibold">Director</dt>
                  <dd className="text-base mb-2">{pelicula.director}</dd>

                  <dt className="font-heading-h5 font-semibold">Género</dt>
                  <dd className="text-base mb-2">{pelicula.clasificacion}</dd>

                  <dt className="font-heading-h5 font-semibold">Nota</dt>
                  <dd className="text-base">{pelicula.nota}/10</dd>

                  <dt className="font-heading-h5 font-semibold">Recaudación</dt>
                  <dd className="text-base">{pelicula.recaudacion}</dd>
                </dl>

                <p className="body-text mt-4">
                  {pelicula.resumen}
                </p>
              </section>
            </section>

            {/* Actores */}
            <section className="mt-6" aria-labelledby="actores-heading">
              <h2 id="actores-heading" className="font-heading-h5 mb-3">
                Actores
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 items-stretch">
                {pelicula.actores.map((actor, index) => (
                  <li key={`${pelicula.id}-${index}`} className="h-full">
                    <Link
                      to={`/interpretes/${index}-${pelicula.id}`}
                      className="no-underline h-full block"
                      aria-label={`Ver detalles del intérprete ${actor.nombre}`}
                    >
                      <Card nombre={actor.nombre} foto={actor.imagen}>
                        {actor.biografia}
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

          </section>
        ) : (
          <p className="body-text">
            Lo sentimos, no se encontró la película solicitada.
          </p>
        )}
      </article>
    </GridLayout>
  );
}

export default MovieDetails;
