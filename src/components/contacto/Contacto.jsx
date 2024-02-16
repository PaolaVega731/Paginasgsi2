import React from "react";
// eslint-disable-next-line
import { Link } from "react-scroll";
import SectionTitle from "../Title.jsx";

const Contacto = () => {
  return (
    <section id='contacto' className='py-20  '>
      <div className='max-w-screen-xl mx-auto flex flex-wrap justify-between items-center'>
        <div className='w-full md:w-1/2 mb-8 md:mb-0'>
          <div>
            <SectionTitle text={"Habla con un experto"} />
            <p
              style={{ fontSize: "24px" }}
              className='text-base font-urbanist font-normal leading-[30px] tracking-[2%] mb-8 '
            >
              Contáctanos para saber más sobre nuestros servicios, nuestros
              productos y nuestra forma de ver los proyectos.
            </p>
            <button
              className='bg-[#9747FF] hover:bg-[#7F2FBC] active:bg-[#5B1E80] disabled:bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded border-solid border border-purple-700 shadow-lg'
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
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <img
            src='/Vectores/VectorContacto.png'
            alt='Edificios con seguridad'
            className='max-w-full h-auto md:max-w-[501px] md:max-h-[437px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
