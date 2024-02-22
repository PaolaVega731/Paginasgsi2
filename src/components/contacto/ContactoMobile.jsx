import SectionTitle from "../Title";

const ContactoMobile = () => {
  return (
    <div className="flex gap-2 mx-4 my-10" id="contactoMobile">
      <div>
        <SectionTitle text={"Habla con un experto"} />
        <p
          style={{ fontSize: "14px" }}
          className="text-base font-urbanist font-normal leading-[30px] tracking-[2%] mb-8 md:w-[90%]"
        >
          Contáctanos para saber más sobre nuestros servicios, nuestros
          productos y nuestra forma de ver los proyectos.
        </p>
        <div className="w-auto">
          <a href="https://www.koffguerrero.com/es/Contacto">
        <button className="bg-[#9747FF] hover:bg-[#7F2FBC] active:bg-[#5B1E80] disabled:bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded-full border-solid border border-purple-700 shadow-lg">
          Contáctanos
        </button>
        </a>
        </div>
      </div>
      <img
        src="/Vectores/VectorContacto.png"
        className="w-[40%] h-36 mt-14 mx-auto md:h-44"
        alt=""
      />
    </div>
  );
};

export default ContactoMobile;