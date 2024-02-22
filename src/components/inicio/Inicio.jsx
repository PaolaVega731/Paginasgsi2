import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";

const Inicio = () => {
  return (
    <section id="inicio">
      <div className="flex pt-32 sm:pt-40 ">
        <div className="gap-10 lg:gap-0 xl:gap-5 w-[95%] lg:w-2/3  flex flex-col  sm:mt-20 ">
          <div className="2xl:w-[90%]">
            <SectionTitle
              text={"Sistema de Gestión de Seguridad de la Información"}
            />
          </div>
          <div className="w-[75%] lg:w-[90%] text-balance z-0 sm:w-[65%] 2xl:w-[85%]">
            <p className="text-xs md:text-lg lg:text-xl xl:text-2xl leading-normal sm:text-justify textInfo tracking-wide opacity-95">
              Hoy en día, la seguridad de la información no es solo una
              necesidad, es una inversión clave para proteger y hacer prosperar
              tu negocio. En KGC, con nuestra experiencia en sistemas de gestión
              de seguridad de la información, estamos aquí para ayudarte en cada
              paso hacia un entorno digital seguro y confiable.
            </p>
          </div>
        </div>

        <div className="absolute right-[0%] top-[250px] w-48 lg:static -z-10 opacity-60 lg:opacity-100  md:w-[557px] md:h-[534px] overflow-x-clip sm:overflow-visible">
          <img
            src="/Vectores/Computadora2.png"
            alt="Laptop abierta con logo de seguridad"
            className=" md:hidden rounded "
          />
          <img
            src="/Vectores/Computadora.png"
            alt="Laptop abierta con logo de seguridad"
            className="hidden md:block w-full h-auto  "
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;