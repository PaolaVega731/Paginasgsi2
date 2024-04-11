import SectionTitle from "../Title";
import MobileServiceItem from "./MobileServiceItem";

const PorqueMobile = () => {
  return (
    <div id="porqueMobile">
      <SectionTitle
        text={"¿Por qué el Servicio?"}
        className="mx-[20px] my-20 "
      />

      <div className="w-full relative">
        <img
          src="/PorqueMobile.png"
          className="w-full relative"
          alt=""
        />

        <div className="absolute mx-auto top-0 flex flex-col h-full w-full justify-between rounded-lg p-6 shadow-lg">
          <MobileServiceItem
            urlimg={"Escudo"}
            title="Experiencia Especializada"
            rlIcon="-right-2"
          >
            Disponemos de la certificación ISO 27001:2022 para asegurar una
            implementación eficaz de un SGSI.
          </MobileServiceItem>
          <div className="relative ">
            <img
              src="/personas.png"
              className="w-14 sm:w-28 absolute left-[5%] top-[20%]"
              alt=""
            />
            <MobileServiceItem
              urlimg={"ManoSaludo"}
              rl="justify-end"
              title="Acompañamiento"
            >
              Asesoramos y orientamos durante el proceso a cómo implementar el
              contenido de la documentación eficazmente en el SGSI.
            </MobileServiceItem>
          </div>
          <MobileServiceItem
            title="Personalización y Adaptabilidad"
            rlIcon="-right-2"
            urlimg={"Anotaciones"}
          >
            Personalizar la documentación según las necesidades específicas de
            tu organización.
          </MobileServiceItem>
          <MobileServiceItem
            rl="justify-end"
            title="Ahorro de tiempo"
            urlimg={"RelojdeArena"}
          >
            Delega estos procesos complejos a profesionales certificados en la
            norma.
          </MobileServiceItem>
          <div className="relative">
            <img
              src="/CarpetaConPersonas.png"
              className="w-20 sm:w-32 absolute -right-[4%] top-[20%] sm:-right-[2%]"
              alt=""
            />
            <MobileServiceItem
              title="Cumplimiento normativo y Estándares"
              rlIcon="-right-2"
              urlimg={"HojaCheck"}
            >
              Poseemos conocimiento en normativas como ISO 27001 y 9001, así
              como leyes locales, garantizando documentos alineados con
              requisitos legales y de cumplimiento.
            </MobileServiceItem>
          </div>
          <MobileServiceItem
            rl="justify-end"
            title="Capacitación y Soporte"
            urlimg={"Puzzle"}
          >
            Proporcionamos capacitación y apoyo continuo para facilitar la
            comprensión y aplicación efectiva del SGSI en la organización.
          </MobileServiceItem>
        </div>
      </div>
    </div>
  );
};

export default PorqueMobile;