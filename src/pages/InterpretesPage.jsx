import GridLayout from "../components/GridLayout";
import Card from "../components/Card";
import peliculas from "../data/peliculas";

function InterpretesPage() {
  return (
    
    <GridLayout titulo="Intérpretes de películas destacadas">

      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (
              <Card
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
              >
                {actor.biografia}
              </Card>
            ))
          )}
        </div>
    </GridLayout>
  )
}

export default InterpretesPage