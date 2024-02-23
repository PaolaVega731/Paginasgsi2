import React from "react";
import SectionTitle from "../Title.jsx";
import ServiceItem from "./ServiceItem.jsx";

const Porque = () => {
  return (
    <>
      <SectionTitle text={"¿Por qué el Servicio?"} className="-mb-20 pt-10" />
      <section
        id="por-que"
        className="flex flex-col justify-center items-center overflow-hidden lg:py-10 "
      >
        <div className="relative -mx-[5%] max-w-[1600px]">
          <img
            className="w-full lg:scale-125 lg:mt-20"
            src={"./vectores/SeccionPorqué.png"}
            alt="Imagen con líneas que conectan rectángulos"
          />
          <>
            <ServiceItem
              title="Cumplimiento normativo y Estándares"
              description="Poseemos conocimiento en normativas como ISO 27001 y 9001, así como leyes locales, garantizando documentos alineados con requisitos legales y de cumplimiento."
              position="lg:bottom-[21.5%] lg:left-[7.5%] xl:bottom-[24.5%] 2xl:bottom-[26.5%]"
            />
            <ServiceItem
              title="Ahorro de tiempo"
              description="Delega estos procesos complejos a profesionales certificados en la norma."
              position="lg:top-[60%] lg:right-[10%]"
            />
            <ServiceItem
              title="Personalización y Adaptabilidad"
              description="Personalizar la documentación según las necesidades específicas de tu organización."
              position="lg:top-[38%] lg:left-[38%]   min-[1433px]:top-[39%] min-[1535px]:top-[37%]"
            />
            <ServiceItem
              title="Acompañamiento"
              description="Asesoramos y orientamos durante el proceso a cómo implementar el contenido de la documentación eficazmente en el SGSI."
              position="lg:top-[21%] lg:right-[7.5%] xl:top-[20%] 2xl:top-[19%]"
            />
            <ServiceItem
              title="Experiencia Especializada"
              description="Disponemos de la certificación ISO 27001:2022 para asegurar una implementación eficaz de un SGSI."
              position="lg:top-[15%] lg:left-[12%] xl:top-[13%] 2xl:top-[12.5%]"
            />
            <ServiceItem
              title="Capacitación y Soporte"
              description="Proporcionamos capacitación y apoyo continuo para facilitar la comprensión y aplicación efectiva del SGSI en la organización."
              position="lg:-bottom-[2%] lg:right-[39.5%] xl:bottom-[0%] 2xl:bottom-[2%]"
            />
          </>

          <img
            className={
              "lg:w-40 lg:h-40  absolute top-[30%] left-[5%] 2xl:h-60 2xl:w-60"
            }
            src="./vectores/Personas.png"
            alt="Tres personas dandose la mano"
          />
          <img
            className={
              " lg:w-40 lg:h-40 absolute lg:bottom-[10.5%] right-[6%] 2xl:h-60 2xl:w-60"
            }
            src="./vectores/CarpetaConPersonas.png"
            alt="Personas en capacitación"
          />
        </div>
      </section>
    </>
  );
};

export default Porque;