import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";
import ServiceItem from "./ServiceItem.jsx";

const Porque = () => {
  return (
    <section id='por-que' className='flex flex-col justify-center '>
      <SectionTitle text={"¿Por qué el Servicio?"} />
      <div className='relative -mx-[60px]'>
        <img
          className='w-full'
          src='./vectores/SeccionPorqué.png'
          alt='Imagen con líneas que conectan rectángulos'
        />

        <img
          className='w-60 h-60 absolute left-5 top-48 2xl:top-60 2xl:left-16'
          src='./vectores/Personas.png'
          alt='Tres personas dandose la mano'
        />

        <img
          className='w-60 h-60 absolute top-[780px] right-[180px] 2xl:bottom-10 2xl:right-[670px]'
          src='./vectores/CarpetaConPersonas.png'
          alt='Personas en capacitación'
        />

        <ServiceItem
          title='Cumplimiento normativo y Estándares'
          description='Poseemos conocimiento en normativas como ISO 27001 y 9001, así
                como leyes locales, garantizando documentos alineados con
                requisitos legales y de cumplimiento.'
          position='bottom-[320px] left-[180px] 2xl:bottom-[160px] 2xl:left-[160px]'
        />

        <ServiceItem
          title='Ahorro de tiempo'
          description='Delega estos procesos complejos a profesionales certificados en la norma.'
          position='bottom-[390px] right-[250px] 2xl:bottom-[350px] 2xl:right-[320px]'
        />
        <ServiceItem
          title='Personalización y Adaptabilidad'
          description='Personalizar la documentación según las necesidades específicas de tu organización.'
          position='top-[360px] left-[580px] 2xl:top-[470px] 2xl:left-[380px]'
        />
        <ServiceItem
          title='Acompañamiento'
          description='Asesoramos y orientamos durante el proceso a cómo implementar el contenido de la documentación eficazmente en el SGSI.'
          position='top-[150px] right-[220px] 2xl:top-[240px] 2xl:right-[210px]'
        />
        <ServiceItem
          title='Experiencia Especializada'
          description='Disponemos de la certificación ISO 27001:2022 para asegurar una implementación eficaz de un SGSI.'
          position='top-[60px] left-[240px] 2xl:top-[65px] 2xl:left-[300px]'
        />
        <ServiceItem
          title='Capacitación y Soporte'
          description='Proporcionamos capacitación y apoyo continuo para facilitar la comprensión y aplicación efectiva del SGSI en la organización.'
          position='bottom-[20px] right-[640px] 2xl:bottom-[15px] 2xl:right-[265px]'
        />
      </div>
    </section>
  );
};

export default Porque;
