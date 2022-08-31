import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Google from "./service/googleLoginLogout/googleLoginLogout"
import NFTView from "./pages/NFTView";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<Project />} />
        <Route path="/nosotros" element={<Project />} />
        <Route path="/equipo" element={<Project />} />
        <Route path="/login" element={<Google />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/nft" element={<NFTView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
