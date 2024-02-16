import "./App.css";
import Inicio from "./components/inicio/Inicio.jsx";
import NavBar from "./components/navbar/Navbar.jsx";
import Implementacion from "./components/implementacion/Implementacion.jsx";
import Porque from "./components/porque/Porque.jsx";
import Workflow from "./components/workflow/Workflow.jsx";
import Footer from "./components/footer/footer.jsx";
import Contacto from "./components/contacto/Contacto.jsx";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='mx-[60px] flex flex-col justify-center'>
        <Inicio />
        <Workflow />
        <Porque />
        <Implementacion />
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}

export default App;
