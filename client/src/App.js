import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Google from "./service/googleLoginLogout/googleLoginLogout"
import NFTView from "./pages/NFTView";
import Search from "./pages/Search";
import Collection from "./pages/Collection";

function App() {
  return (
    <div className="min-h-screen bg-main-blue">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de" element={<Project />} />
        <Route path="/nosotros" element={<Project />} />
        <Route path="/equipo" element={<Project />} />
        <Route path="/descubrir" element={<Search />} />
        <Route path="/nft" element={<NFTView />} />
        <Route path="/coleccion" element={<Collection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
