import React from "react";
import SectionTitle from "../Title.jsx";
import ServiceItem from "./ServiceItem.jsx";
import MobileServiceItem from "./MobileServiceItem.jsx";

const Porque = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section id='por-que' className='flex flex-col justify-center'>
      <SectionTitle text={"¿Por qué el Servicio?"} className='-mb-20' />
      <div className='relative -mx-[5%]'>
        <img
          className={isMobile ? "w-[60%] h-auto right-150" : "w-full"}
          src={
            isMobile
              ? "./vectores/PorqueMobile.png"
              : "./vectores/SeccionPorqué.png"
          }
          alt='Imagen con líneas que conectan rectángulos'
        />
        {isMobile ? (
          <>
            <MobileServiceItem
              title='Cumplimiento normativo y Estándares'
              description='Poseemos conocimiento en normativas como ISO 27001 y 9001, así como leyes locales, garantizando documentos alineados con requisitos legales y de cumplimiento.'
              position='top-[40px]'
            />
            <MobileServiceItem
              title='Ahorro de tiempo'
              description='Delega estos procesos complejos a profesionales certificados en la norma.'
            />
            <MobileServiceItem
              title='Personalización y Adaptabilidad'
              description='Personalizar la documentación según las necesidades específicas de tu organización.'
            />
            <MobileServiceItem
              title='Acompañamiento'
              description='Asesoramos y orientamos durante el proceso a cómo implementar el contenido de la documentación eficazmente en el SGSI.'
            />
            <MobileServiceItem
              title='Experiencia Especializada'
              description='Disponemos de la certificación ISO 27001:2022 para asegurar una implementación eficaz de un SGSI.'
            />
            <MobileServiceItem
              title='Capacitación y Soporte'
              description='Proporcionamos capacitación y apoyo continuo para facilitar la comprensión y aplicación efectiva del SGSI en la organización.'
            />
          </>
        ) : (
          <>
            <ServiceItem
              title='Cumplimiento normativo y Estándares'
              description='Poseemos conocimiento en normativas como ISO 27001 y 9001, así como leyes locales, garantizando documentos alineados con requisitos legales y de cumplimiento.'
              position='lg:bottom-[28%] lg:left-[16%] 2xl:bottom-70 2xl:left-70'
            />
            <ServiceItem
              title='Ahorro de tiempo'
              description='Delega estos procesos complejos a profesionales certificados en la norma.'
              position='lg:bottom-[33%] lg:right-[18%] 2xl:bottom-120 2xl:right-65'
            />
            <ServiceItem
              title='Personalización y Adaptabilidad'
              description='Personalizar la documentación según las necesidades específicas de tu organización.'
              position='lg:top-[36%] lg:left-[41%] 2xl:top-50 2xl:left-35'
            />
            <ServiceItem
              title='Acompañamiento'
              description='Asesoramos y orientamos durante el proceso a cómo implementar el contenido de la documentación eficazmente en el SGSI.'
              position='lg:top-[22%] lg:right-[17%] 2xl:top-72 2xl:right-34'
            />
            <ServiceItem
              title='Experiencia Especializada'
              description='Disponemos de la certificación ISO 27001:2022 para asegurar una implementación eficaz de un SGSI.'
              position='lg:top-[16%] lg:left-[20%] 2xl:top-45 2xl:left-75'
            />
            <ServiceItem
              title='Capacitación y Soporte'
              description='Proporcionamos capacitación y apoyo continuo para facilitar la comprensión y aplicación efectiva del SGSI en la organización.'
              position='lg:bottom-[7%] lg:right-[42%] 2xl:bottom-18 2xl:right-30'
            />
          </>
        )}

        <img
          className={
            isMobile
              ? "w-32 h-auto absolute left-12 top-60"
              : "w-60 h-60 absolute lg:left-20 lg:top-80 2xl:top-80 2xl:left-16"
          }
          src='./vectores/Personas.png'
          alt='Tres personas dandose la mano'
        />
        <img
          className={
            isMobile
              ? "w-40 h-auto absolute top-[870px] right-[60px]"
              : "w-60 h-60 absolute lg:top-[820px] lg:right-[80px] 2xl:top-120 2xl:right-100"
          }
          src='./vectores/CarpetaConPersonas.png'
          alt='Personas en capacitación'
        />
      </div>
    </section>
  );
};

export default Porque;
