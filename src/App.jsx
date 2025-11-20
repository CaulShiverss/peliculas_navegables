import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetails";
import InterpretesPage from "./pages/InterpretesPage";
import InterpreteDetails from "./pages/InterpreteDetails";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/peliculas" element={<MoviesPage />} />
          <Route path="/peliculas/:id" element={<MovieDetails />} />
          <Route path="/interpretes" element={<InterpretesPage />} />
          <Route path="/interpretes/:id" element={<InterpreteDetails />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
