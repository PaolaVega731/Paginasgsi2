import React from "react";
import SectionTitle from "../Title.jsx";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 px-4 ">
      <div className="s mx-auto flex justify-between items-center  ">
        <div className="w-full mb-8">
          <div className="flex flex-col gap-5 max-w-[700px] text-balance">
            <div className=" ">
              <SectionTitle text={"Habla con un experto"} />
            </div>
            <p
              style={{ fontSize: "24px" }}
              className="text-base font-urbanist font-normal leading-[30px] tracking-[2%] mb-8 "
            >
              Contáctanos para saber más sobre nuestros servicios, nuestros
              productos y nuestra forma de ver los proyectos.
            </p>
            <a href="https://www.koffguerrero.com/es/Contacto">
            <button
              className="bg-[#9747FF] hover:bg-[#7F2FBC] active:bg-[#5B1E80] disabled:bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded border-solid border border-purple-700 shadow-lg"
              style={{
                width: "203px",
                height: "61px",
                top: "20px",
                left: "20px",
                boxShadow:
                  "0px 4px 10px rgba(0, 0, 0, 0.25), inset 0px -4px 10px rgba(255, 255, 255, 0.5)",
                borderRadius: "30px",
                fontSize: "20px",
              }}
              disabled={false}
            >
              Contáctanos
            </button>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/Vectores/VectorContacto.png"
            alt="Edificios con seguridad"
            className="w-full  h-auto md:max-w-[600px] md:max-h-[437px] lg:h-80 lg:w-96 "
          />
        </div>
      </div>
    </section>
  );
};

export default Contacto;