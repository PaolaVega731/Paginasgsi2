import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";
import HoverComponent from "../HoverInfo.jsx";

const Implementacion = () => {
  return (
    <section id='implementacion' className='my-4'>
      <SectionTitle text={"Implementación"} />
      <div className='mt-20 flex justify-center items-center relative h-[500px] '>
        <img
          src='/ImagenInicio/Implementación.png'
          alt='Vector de implementación'
          className='w-[940px] h-[427px] object-contain p-4 '
        />
        <HoverComponent
          titulo={"Análisis y Evaluación Inicial"}
          children={
            "Al iniciar la evaluación, analizamos las necesidades, identificamos activos críticos, evaluamos riesgos y cumplimos requisitos legales"
          }
          positions='left-[90px] -top-8 2xl:-top-10 2xl:left-[180px]'
          positionP='mb-10'
          sizeP={false}
        ></HoverComponent>
        <HoverComponent
          titulo={"Registro de Activos y Evaluación de Riesgos"}
          children={
            "Establecemos un registro de activos, evaluamos riesgos para identificar y abordar posibles amenazas y vulnerabilidades"
          }
          positions='2xl:right-32 -top-6 sm:right-16'
          sizeP={false}
        ></HoverComponent>
        <HoverComponent
          titulo={"Desarrollo de Políticas de Seguridad"}
          children={
            "Establecemos normas y recomendaciones esenciales para proteger la información dentro de la organización."
          }
          positions='top-96 ml-14'
        ></HoverComponent>
        <HoverComponent
          titulo={"Documentación de Procesos"}
          children={
            "Elaboración de documentación que detalla los procesos de seguridad informática, incluyendo la evaluación de riesgos, gestión de cambios, auditorías internas, etc."
          }
          positions='-top-10 ml-[120px]'
          positionP='mb-10'
          sizeP={true}
        ></HoverComponent>

        <HoverComponent
          titulo={"Desarrollo de Procedimientos"}
          children={
            "Desarrollamos procedimientos detallados para poner en práctica controles de seguridad específicos, como control de acceso, manejo de contraseñas, gestión de incidentes, etc."
          }
          positions='top-[364px] right-[80px] 2xl:right-[170px]'
          positionP='mt-20'
          sizeP={true}
        ></HoverComponent>
        <HoverComponent
          titulo={"Soporte de Implementación"}
          children={
            "Proporcionamos asistencia en la implementación de los documentos y recomendaciones suministrados, ofreciendo formación y soporte continuo a lo largo del proceso de implementación."
          }
          positions='top-[360px] left-[80px] 2xl:left-[170px] '
          positionP='mt-20'
          sizeP={true}
        ></HoverComponent>
      </div>
    </section>
  );
};

export default Implementacion;
