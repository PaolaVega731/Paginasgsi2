import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";

const Inicio = () => {
  return (
    <section id='inicio'>
      <div className='flex flex-col md:flex-row justify-center gap-8 pt-40'>
        <div className='w-full md:w-[800px] flex flex-col justify-evenly'>
          <SectionTitle
            text={"Sistema de Gestión de Seguridad de la Información"}
          />
          <div style={{ maxWidth: "700px" }}>
            <p className='text-base md:text-lg lg:text-xl leading-normal text-justify textInfo tracking-wide opacity-95'>
              Hoy en día, la seguridad de la información no es solo una
              necesidad, es una inversión clave para proteger y hacer prosperar
              tu negocio. En KGC, con nuestra experiencia en sistemas de gestión
              de seguridad de la información, estamos aquí para ayudarte en cada
              paso hacia un entorno digital seguro y confiable.
            </p>
          </div>
        </div>
        <div className='md:w-[557px] md:h-[534px]'>
          <img
            src='/Vectores/Computadora.png'
            alt='Laptop abierta con logo de seguridad'
            className='w-full h-auto md:w-full md:h-full object-cover rounded'
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
