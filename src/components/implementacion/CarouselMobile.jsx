import React, { useState } from "react";
import SectionTitle from "../Title";

const CarouselMobile = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "./Vectores/AnalisisMobile.png",
    "./Vectores/DesarrollodePoliticasMobile.png",
    "./Vectores/DesarrolloMobile.png",
    "./Vectores/RegistroMobile.png",
    "./Vectores/DocumentacionProcesosMobile.png",
    "./Vectores/SoporteImplementacionMobile.png",
  ];

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className=' mx-4' id='implementacionMobile'>
      <div className=' h-96 relative my-10'>
        <SectionTitle className='mx-[20px]' text='Implementación' />
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full  rounded-xl transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`imagen ${index + 1}`}
              className='h-[360px] w-full mt-10 mb-10 '
            />
            <button
              className='absolute left-0  top-[45%] transform  p-6   -2  '
              onClick={prevSlide}
            ></button>
            <button
              className='absolute right-0 top-[45%] transform  p-6  '
              onClick={nextSlide}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMobile;
