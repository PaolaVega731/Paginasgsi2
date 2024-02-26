import SectionTitle from "../Title";

const ContactoMobile = () => {
  return (
    <div className=" relative flex gap-2 mx-4 my-10 " id="contactoMobile">
      <div className="">
        <SectionTitle text={"Habla con un experto"} />

        <p
          style={{ fontSize: "14px" }}
          className="text-base font-urbanist w-[50%] font-normal leading-[20px] tracking-[2%] mb-8  "
        >
          Contáctanos para saber más sobre nuestros servicios, nuestros
          productos y nuestra forma de ver los proyectos.
        </p>
        <div>
        <a href="https://www.koffguerrero.com/es/Contacto">
        <button className="bg-[#9747FF] hover:bg-[#7F2FBC] active:bg-[#5B1E80] disabled:bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded-full border-solid border border-purple-700 shadow-lg">
          Contáctanos
        </button>
        </a>
        </div>
      </div>
      <img
        src="/Vectores/VectorContacto.png"
        className="absolute   h-52  md:h-64 md:w-80 mt-14 mx-auto md:right-4  md:-bottom-8 right-0 bottom-5 -z-10 opacity-60"
        alt=""
      />
    </div>
  );
};

export default ContactoMobile;