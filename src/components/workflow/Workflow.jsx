import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";
import HoverServicio from "../HoverServicio.jsx";

const Workflow = () => {
  return (
    <section id='workflow' className='mb-80 mt-20'>
      <SectionTitle text={"Workflow"} />
      <div className='flex justify-center relative'>
        <img className='w-96' src='./vectores/candado.png' alt='' />
        <HoverServicio
          img={"./vectores/ProcesosCriticos.png"}
          titulo={"Identificación de Procesos Críticos"}
          positions='left-20 2xl:left-24'
          positionP='w-60'
        >
          Se realiza un análisis destallado para descubrir para identificar los
          procesos más importantes de tu negocio, desde las finanzas, recursos
          humanos, operaciones y desarrollo de software.
        </HoverServicio>
        <HoverServicio
          img={"./vectores/DefinicionControlesSeguridad.png"}
          titulo={"Definición de Controles de Seguridad"}
          positions='-bottom-48 left-40 2xl:-bottom-36 2xl:left-56'
          titulop='bottom-[80px]'
          positionP='w-60'
        >
          Establecemos medidas de seguridad específicas para cada proceso
          crítico identificado. Incluye medidas de control de acceso, cifrado de
          datos, segregación de funciones, etc.
        </HoverServicio>
        <HoverServicio
          img={"./vectores/DesarrolloProceResp.png"}
          titulo={"Desarrollo de Procedimientos de Respuesta a Incidentes"}
          positions='-bottom-80 2xl:-bottom-72 '
          titulop='bottom-[70px]'
          positionP='w-60'
        >
          Nos enfocamos en optimizar procedimientos para enfrentar retos de
          seguridad informática, buscando reacciones más eficaces y eficientes.
        </HoverServicio>
        <HoverServicio
          img={"./vectores/CapacitacionConcienciación.png"}
          titulo={"Capacitación y Concienciación del Personal "}
          positions=' -bottom-48 right-40 2xl:-bottom-40 2xl:right-56'
          titulop='bottom-[60px]'
          positionP='w-60'
          imgSize='w-72 h-72'
        >
          Ofrecemos entrenamiento a tu equipo sobre lo curcial que es la
          seguridad de la información. Cubrimos temas como las políticas de
          seguridad, como detectar intentos de phishing etc.
        </HoverServicio>
        <HoverServicio
          img={"./vectores/EvolucionMejoraContinua.png"}
          titulo={"Evaluación y Mejora Continua"}
          positions='right-20 2xl:right-24'
          positionP='w-60'
        >
          Realizamos evaluaciones periódicas para asegurar que los controles de
          seguridad sean efectivos y estén actualizados con las últimas
          amenazas.
        </HoverServicio>
      </div>
    </section>
  );
};

export default Workflow;
