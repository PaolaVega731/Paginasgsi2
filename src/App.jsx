import Inicio from "./components/inicio/Inicio.jsx";
import NavBar from "./components/navbar/Navbar.jsx";
import Implementacion from "./components/implementacion/Implementacion.jsx";
import Porque from "./components/porque/Porque.jsx";
import PorqueMobile from "./components/porque/PorqueMobile.jsx";
import Workflow from "./components/workflow/Workflow.jsx";
import Footer from "./components/footer/footer.jsx";
import Contacto from "./components/contacto/Contacto.jsx";
import SectionMobileWorkflow from "./components/workflow/SectionWorkflowMobile.jsx";
import CarouselMobile from "./components/implementacion/CarouselMobile.jsx";
import ContactoMobile from "./components/contacto/ContactoMobile.jsx";
import FooterMobile from "./components/footer/FooterMobile.jsx";

function App() {
  return (
    <div className='App '>
      <NavBar />
      <div className='mx-[20px] sm:mx-[60px] flex flex-col justify-center '>
        <Inicio />
        <div className='hidden sm:block'>
          <Workflow />
          <Porque />
          <Implementacion />
          <Contacto />
        </div>
      </div>
      <div className='mx-0 h-auto mb-20 sm:hidden'>
        <SectionMobileWorkflow />
        <PorqueMobile />
        <CarouselMobile />
      </div>
      <div className='  sm:hidden'>
        <ContactoMobile />
        <FooterMobile />
      </div>
      <div className='hidden sm:block'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
