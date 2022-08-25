<<<<<<< HEAD
// import ModalChildren from './components/Modal/modalChildren';
import Pantalla from './PantallaNFT';
// import ModalMensaje from "./components/Modal/modalMensaje";

function App() {
  return (
    <div className="App">
      {/* <ModalChildren /> */}
      <Pantalla/>
      {/* <ModalMensaje/> */}
    </div>
=======
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
>>>>>>> bd776c74b4161b3b4241db498131e19f8efa1e53
  );
}

export default App;