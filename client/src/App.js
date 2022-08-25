import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/Home"
import Project from "./pages/Project";

function App() {
  return (
  <>
  <NavBar />

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/acerca-de' element={<Project />} />
    <Route path='/nosotros' element={<Project />} />
    <Route path='/equipo' element={<Project />} />
    <Route path='*' element={<h1>Page Not Found</h1>} />
  </Routes>
  </>
  );
}

export default App;