import GridLayout from "../components/GridLayout";
import peliculas from "../data/peliculas";
import { useParams } from "react-router-dom";

function InterpreteDetails() {

  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id.split("-")[1]));
  const actor = pelicula.actores[parseInt(id.split("-")[0])];

    return (
        <GridLayout titulo={actor ? actor.nombre : "Intérprete no encontrado"}>
        <article aria-label="Interprete details">
            {actor ? (
            <section className="mt-4 flex flex-col items-center lg:flex-row lg:items-start gap-6">
                <figure className="w-full max-w-md">
                <img
                    src={actor.imagen}
                    alt={`Foto del intérprete ${actor.nombre}`}
                    className="w-full rounded-lg mb-4"
                />
                <figcaption className="sr-only">Foto de {actor.nombre}</figcaption>
                </figure>
                <section className="flex flex-col gap-4 lg:items-start text-left">
                <p className="body-text mt-2">{actor.biografia}</p>
                </section>
            </section>
            ) : (
            <p className="body-text">Lo sentimos, no se encontró el intérprete solicitado.</p>
            )}
        </article>
        </GridLayout>
    );
}

export default InterpreteDetails;