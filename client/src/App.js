import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Pantalla from "./PantallaNFT";
import Google from "./service/googleLoginLogout/googleLoginLogout"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<Project />} />
        <Route path="/nosotros" element={<Project />} />
        <Route path="/equipo" element={<Project />} />
        <Route path="/nft" element={<Pantalla />} />
        <Route path="/login" element={<Google />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
