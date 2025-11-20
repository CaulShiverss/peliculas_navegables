import GridLayout from "../components/GridLayout";
import peliculas from "../data/peliculas";
import { useParams } from "react-router-dom";


function MovieDetails() {

  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  return (
    <GridLayout titulo={pelicula ? pelicula.nombre : "Película no encontrada"}>
      <article aria-label="Movie details">
        {pelicula ? (
          <section className="mt-4 flex flex-col items-center lg:flex-row lg:items-start gap-6">
            <figure className="w-full max-w-md">
              <img
                src={pelicula.cartelera}
                alt={`Cartelera de la película ${pelicula.nombre}`}
                className="w-full rounded-lg mb-4"
              />
              <figcaption className="sr-only">Cartel de {pelicula.nombre}</figcaption>
            </figure>
            <section className="flex flex-col gap-4 lg:items-start text-left">
              <dl className="space-y-3">
                <dt className="font-heading-h5 font-semibold">Director</dt>
                <dd className="text-base mb-2">{pelicula.director}</dd>

                <dt className="font-heading-h5 font-semibold">Género</dt>
                <dd className="text-base mb-2">{pelicula.clasificacion}</dd>

                <dt className="font-heading-h5 font-semibold">Nota</dt>
                <dd className="text-base">{pelicula.nota}/10</dd>

                <dt className="font-heading-h5 font-semibold">Recaudacion</dt>
                <dd className="text-base">{pelicula.recaudacion}</dd>
              </dl>
              <p className="body-text mt-2">{pelicula.resumen}</p>
            </section>
          </section>
        ) : (
          <p className="body-text">Lo sentimos, no se encontró la película solicitada.</p>
        )}
      </article>
    </GridLayout>
  );
}

export default MovieDetails;
