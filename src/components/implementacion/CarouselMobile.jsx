import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../Title";

const CarouselMobile = () => {

  const images = [
    "/Analisis.png",
    "/DesPoliticas.png",
    "/DesProcedimientos.png",
    "/Registros.png",
    "/DocProcesos.png",
    "/Soporte.png",
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="  " id="implementacionMobile">
      <div className=" h-96 relative my-10">
        <SectionTitle className="mx-[20px]" text="Implementación" />
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`imagen ${index + 1}`}
                className="h-[360px] w-full mt-10 mb-10"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselMobile;




