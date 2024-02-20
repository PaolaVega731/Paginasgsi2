import React from "react";
// eslint-disable-next-line
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
          positions=' lg:left-[150px] lg:-top-6 2xl:-top-10 2xl:left-44'
          positionP='mb-10'
          sizeP={false}
          className='cursor-pointer'
        ></HoverComponent>
        <HoverComponent
          titulo={"Registro de Activos y Evaluación de Riesgos"}
          children={
            "Establecemos un registro de activos, evaluamos riesgos para identificar y abordar posibles amenazas y vulnerabilidades"
          }
          positions='lg:right-[120px] lg:-top-8 2xl:right-32 2x1:top-10 sm:right-16'
          sizeP={false}
          className='cursor-pointer'
        ></HoverComponent>
        <HoverComponent
          titulo={"Desarrollo de Políticas de Seguridad"}
          children={
            "Establecemos normas y recomendaciones esenciales para proteger la información dentro de la organización."
          }
          positions='top-96 ml-14'
          className='cursor-pointer'
        ></HoverComponent>
        <HoverComponent
          titulo={"Documentación de Procesos"}
          children={
            "Elaboración de documentación que detalla los procesos de seguridad informática, incluyendo la evaluación de riesgos, gestión de cambios, auditorías internas, etc."
          }
          positions='lg:-top-10 2x1:top-10 lg:ml-[120px]'
          positionP='mb-10'
          sizeP={true}
          className='cursor-pointer'
        ></HoverComponent>

        <HoverComponent
          titulo={"Desarrollo de Procedimientos"}
          children={
            "Desarrollamos procedimientos detallados para poner en práctica controles de seguridad específicos, como control de acceso, manejo de contraseñas, gestión de incidentes, etc."
          }
          positions='lg:top-[364px] lg:right-[80px] 2xl:right-40'
          positionP='mt-20'
          sizeP={true}
          className='cursor-pointer'
        ></HoverComponent>
        <HoverComponent
          titulo={"Soporte de Implementación"}
          children={
            "Proporcionamos asistencia en la implementación de los documentos y recomendaciones suministrados, ofreciendo formación y soporte continuo a lo largo del proceso de implementación."
          }
          positions='lg:top-[370px] lg:left-[140px] 2xl:left-40 '
          positionP='mt-20'
          sizeP={true}
          className='cursor-pointer'
        ></HoverComponent>
      </div>
    </section>
  );
};

export default Implementacion;
