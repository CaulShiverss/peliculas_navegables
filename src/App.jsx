import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import HomePage from "./pages/HomePage";
import InterpretesPage from "./pages/InterpretesPage";  
import MoviesPage from "./pages/MoviesPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/peliculas" element={<MoviesPage />} />
          <Route path="/interpretes" element={<InterpretesPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
