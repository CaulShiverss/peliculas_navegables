import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import HomePage from "./pages/HomePage";
import InterpretesPage from "./pages/InterpretesPage";  
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/peliculas" element={<MoviesPage />} />
          <Route path="/interpretes" element={<InterpretesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
