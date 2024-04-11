import React from "react";
// eslint-disable-next-line
import SectionTitle from "../Title.jsx";
import HoverComponent from "../HoverInfo.jsx";

const Implementacion = () => {
  return (
    <>
      <SectionTitle text={"Implementación"} />
      <section id="implementacion" className="my-4 flex justify-center ">
        <div className="mt-20 flex justify-center items-center relative h-[500px] lg:max-w-[800px] xl:max-w-[1200px]   ">
          <img
            src="/Implementación.png"
            alt="Vector de implementación"
            className="w-[940px] h-[427px] object-contain p-4 "
          />
          <HoverComponent
            titulo={"Análisis y Evaluación Inicial"}
            children={
              "Al iniciar la evaluación, analizamos las necesidades, identificamos activos críticos, evaluamos riesgos y cumplimos requisitos legales"
            }
            positions="-top-[5%] -left-[6%]"
            positionP="mb-10"
            sizeOfDiv={false}
            className="cursor-pointer"
          ></HoverComponent>
          <HoverComponent
            titulo={"Registro de Activos y Evaluación de Riesgos"}
            children={
              "Establecemos un registro de activos, evaluamos riesgos para identificar y abordar posibles amenazas y vulnerabilidades"
            }
            positions="lg:-right-[13%] lg:-top-[3%] xl:-right-[10%]  xl:-top-[7%]"
            sizeOfDiv={false}
            className="cursor-pointer"
          ></HoverComponent>
          <HoverComponent
            titulo={"Desarrollo de Políticas de Seguridad"}
            children={
              "Establecemos normas y recomendaciones esenciales para proteger la información dentro de la organización."
            }
            positions=" lg:-bottom-[10%] lg:right-[34%] xl:-bottom-[10%] xl:right-[36%]"
            className="cursor-pointer"
          ></HoverComponent>
          <HoverComponent
            titulo={"Documentación de Procesos"}
            children={
              "Elaboración de documentación que detalla los procesos de seguridad informática, incluyendo la evaluación de riesgos, gestión de cambios, auditorías internas, etc."
            }
            positions="lg:right-[31%] lg:-top-[8%] xl:-top-[12%] xl:right-[33%] "
            positionP="mb-10"
            className="cursor-pointer"
          ></HoverComponent>

          <HoverComponent
            titulo={"Desarrollo de Procedimientos"}
            children={
              "Desarrollamos procedimientos detallados para poner en práctica controles de seguridad específicos, como control de acceso, manejo de contraseñas, gestión de incidentes, etc."
            }
            positions="lg:-right-[10.5%]  -bottom-[10%] xl:-right-[6.5%]"
            positionP="-bottom-[35%]"
            className="cursor-pointer"
          ></HoverComponent>
          <HoverComponent
            titulo={"Soporte de Implementación"}
            children={
              "Proporcionamos asistencia en la implementación de los documentos y recomendaciones suministrados, ofreciendo formación y soporte continuo a lo largo del proceso de implementación."
            }
            positions="lg:-left-[10%] lg:-bottom-[8%] xl:-left-[6%] xl:-bottom-[10%]"
            sizeOfDiv={true}
            positionP={"-bottom-[35%]"}
            className="cursor-pointer"
          ></HoverComponent>
        </div>
      </section>
    </>
  );
};

export default Implementacion;