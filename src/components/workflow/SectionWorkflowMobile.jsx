import SectionTitle from "../Title";
import WorkflowMobile from "./WorkflowMobile";

const SectionMobileWorkflow = () => {
  return (
    <div className='flex relative flex-col gap-10 mt-32' id='workflowMobile'>
      <img
        className='w-40 absolute bottom-20 right-0 -z-10 opacity-40'
        src='/candadoMobile.png'
        alt=''
      />
      <SectionTitle className='mx-[20px]' text={"WorkFlow"} />
      <WorkflowMobile
        urlImg={"/ProcesosCriticos.png"}
        divImgSize='w-[38%]'
        gap='gap-3'
        titulo={"Identificación de Procesos Críticos"}
      >
        Se realiza un análisis destallado para descubrir para identificar los
        procesos más importantes de tu negocio, desde las finanzas, recursos
        humanos, operaciones y desarrollo de software.
      </WorkflowMobile>
      <WorkflowMobile
        urlImg={"/DefinicionControlesSeguridad.png"}
        titulo={"Definición de Controles de Seguridad"}
      >
        Establecemos medidas de seguridad específicas para cada proceso crítico
        identificado. Incluye medidas de control de acceso, cifrado de datos,
        segregación de funciones, etc.
      </WorkflowMobile>
      <WorkflowMobile
        urlImg={"/DesarrolloProceResp.png"}
        titulo={"Desarrollo de Procedimientos de Respuesta a Incidentes"}
        topTitulo='top-[50%]'
      >
        Nos enfocamos en optimizar procedimientos para enfrentar retos de
        seguridad informática, buscando reacciones más eficaces y eficientes.
      </WorkflowMobile>
      <WorkflowMobile
        urlImg={"/CapacitacionConcienciación.png"}
        titulo={"Capacitación y Concienciación del Personal"}
        sizeImg='scale-100'
      >
        Ofrecemos entrenamiento a tu equipo sobre lo curcial que es la seguridad
        de la información. Cubrimos temas como las políticas de seguridad, como
        detectar intentos de phishing etc.
      </WorkflowMobile>
      <WorkflowMobile
        urlImg={"/EvolucionMejoraContinua.png"}
        titulo={"Evaluación y Mejora Continua"}
      >
        Realizamos evaluaciones periódicas para asegurar que los controles de
        seguridad sean efectivos y estén actualizados con las últimas amenazas.
      </WorkflowMobile>
    </div>
  );
};

export default SectionMobileWorkflow;
