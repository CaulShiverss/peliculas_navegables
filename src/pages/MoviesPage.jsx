import GridLayout from "../components/GridLayout";
import Card from "../components/Card";
import peliculas from "../data/peliculas";

function MoviesPage() {
  return (
    
    <GridLayout titulo="Peliculas">
  
      <p className="body-text">
        Listado de peliculas disponibles:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
            .map((pelicula, index) => (
              <Card
                key={pelicula.id ?? index}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
              >
                {pelicula.resumen}
              </Card>
            ))}
        </div>
    </GridLayout>
  )
}

export default MoviesPage