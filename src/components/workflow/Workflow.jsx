import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";
import HoverServicio from "../HoverServicio.jsx";
import WorkflowMobile from "./WorkflowMobile.jsx";

const Workflow = () => {
  const isMobile = window.innerWidth <= 480;
  return (
    <section id="workflow" className="mb-80 mt-20">
      <SectionTitle text={"Workflow"} />
      <div className="flex justify-center relative max-w-[1000px] mx-auto ">
        <img className="w-96" src="/Candado.png" alt="" />
        <HoverServicio
          img={"/ProcesosCriticos.png"}
          titulo={"Identificación de Procesos Críticos"}
          positions="-left-[4%] 2xl:-left-[24%] "
          positionP="w-60"
          style={{ cursor: "pointer" }}
        >
          Se realiza un análisis detallado para descubrir para identificar los
          procesos más importantes de tu negocio, desde las finanzas, recursos
          humanos, operaciones y desarrollo de software.
        </HoverServicio>
        <HoverServicio
          img={"/DefinicionControlesSeguridad.png"}
          titulo={"Definición de Controles de Seguridad"}
          positions="left-[4%] -bottom-[50%] 2xl:-bottom-[70%] 2xl:-left-[12%] "
          titulop="bottom-[80px]"
          positionP="w-60"
          style={{ cursor: "pointer" }}
        >
          Establecemos medidas de seguridad específicas para cada proceso
          crítico identificado. Incluye medidas de control de acceso, cifrado de
          datos, segregación de funciones, etc.
        </HoverServicio>
        <HoverServicio
          img={"/DesarrolloProceResp.png"}
          titulo={"Desarrollo de Procedimientos de Respuesta a Incidentes"}
          positions="-bottom-[90%] 2xl:-bottom-[110%] "
          titulop="lg:bottom-[70px]"
          positionP="w-60"
          style={{ cursor: "pointer" }}
        >
          Nos enfocamos en optimizar procedimientos para enfrentar retos de
          seguridad informática, buscando reacciones más eficaces y eficientes.
        </HoverServicio>
        <HoverServicio
          img={"/CapacitacionConcienciación.png"}
          titulo={"Capacitación y Concienciación del Personal "}
          positions="right-[4%] -bottom-[50%] 2xl:-bottom-[70%] 2xl:-right-[12%] "
          titulop="lg:bottom-[60px]"
          positionP="w-60"
          imgSize="w-72 h-72"
          style={{ cursor: "pointer" }}
        >
          Ofrecemos entrenamiento a tu equipo sobre lo curcial que es la
          seguridad de la información. Cubrimos temas como las políticas de
          seguridad, como detectar intentos de phishing etc.
        </HoverServicio>
        <HoverServicio
          img={"/EvolucionMejoraContinua.png"}
          titulo={"Evaluación y Mejora Continua"}
          positions="-right-[4%] 2xl:-right-[24%] "
          positionP="w-60"
          style={{ cursor: "pointer" }}
        >
          Realizamos evaluaciones periódicas para asegurar que los controles de
          seguridad sean efectivos y estén actualizados con las últimas
          amenazas.
        </HoverServicio>
        {isMobile && <WorkflowMobile />}
      </div>
    </section>
  );
};

export default Workflow;