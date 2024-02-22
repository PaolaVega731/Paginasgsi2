import FooterLink from "./FooterLink";

const FooterMobile = () => {
  return (
    <div className='mx-8 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <h4 className='font-bold text-xl'>Nosotros</h4>
        <ul className='opacity-75 text-sm'>
          <FooterLink text={"Quiénes somos"} url={'https://www.koffguerrero.com/es/nosotros/index'} />
          <FooterLink text={"Clientes y proyectos"} url={'https://www.koffguerrero.com/es/nosotros/clients'}/>
          <FooterLink text={"Sistema de Calidad"} url={'https://www.koffguerrero.com/es/nosotros/quality'}/>
          <FooterLink text={"Politicas de Privacidad"}url={'https://www.koffguerrero.com/es/nosotros/privacy'} />
          <FooterLink text={"Covid-19"}url={'https://www.koffguerrero.com/es/inicio/covid'} />
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h4 className='font-bold text-xl'>Productos y Servicios</h4>
        <ul className='opacity-75 text-sm'>
          <FooterLink text={"Nuestros Servicios"} url={'https://www.koffguerrero.com/es/servicios/index'} />
          <FooterLink text={"Nuestros Productos"}url={'https://www.koffguerrero.com/es/productos/index'} />
          <FooterLink text={"ValidRisk"} url={'https://www.koffguerrero.com/es/productos/validrisk'}/>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h4 className='font-bold text-xl'>Intranet KGC</h4>
        <ul className='opacity-75 text-sm'>
          <FooterLink text={"Sitio ISO 9001.2015"} url={'https://koffguerrero.sharepoint.com/sites/SGC'} />
          <FooterLink text={"Sitio ISO 27001.2022"} url={'https://koffguerrero.sharepoint.com/sites/SGSI'} />
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <h4 className='font-bold text-xl'>Contáctanos</h4>
        <ul className='opacity-75 text-sm'>
          <FooterLink text={"Oficina:"} />
          <FooterLink text={"Av. Presidente Kenny 5735."} />
          <FooterLink text={"Oficina 1501"} />
          <FooterLink text={"Hotel Marriott - Torre Poniente"} />
          <FooterLink text={"Las Condes, Santiago, Chile"} />
        </ul>
        <ul className='opacity-75 text-sm'>
          <FooterLink text={"Teléfono +56 222 036 494"} />
          <FooterLink text={"Email: contacto@koffguerrero.com"} />
          <div className='flex flex-col gap-0'>
            <div className='flex items-center h-6'>
              <FooterLink text={"Linkedin"} url={'https://www.linkedin.com/company/kgc-sa/'}/>
              <img
                src='./Vectores/linkedin.png'
                alt='Linkedin'
                className='h-full scale-150 colors:#7e0b68 '
              />
            </div>
            <div className='flex items-center h-6'>
              <FooterLink text={"Youtube"} url={'https://www.youtube.com/channel/UCAW4cRU5vl5FcGnTT4t8-Ng'}/>
              <img
                src='./Vectores/youtube.png'
                alt='Youtube'
                className='h-full   scale-150  colors:#7e0b68 '
              />
            </div>
          </div>
        </ul>
        <div className='flex gap-1 text-[9px] my-2'>
          <span className='opacity-75'>
            © 2022 - Koff & Guerrero Consultants S.A. -
          </span>
          <span className='text-[#7E0B68]'>Politicas de Privacidad</span>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
