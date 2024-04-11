import React from "react";
import FooterLink from "./FooterLink";
import FooterPoliticas from "./footerPolitica";

const Footer = () => {
  return (
    <footer className='w-[100%] bg-gray-900 bg-opacity-55% text-white py-8 px-4 md:px-16'>
      <div className='flex w-full justify-between'>
        <div className='w-2/3'>
          <div className='flex justify-between w-full'>
            <div className='w-full md:w-1/4 mb-6 '>
              <h3 className='text-2xl font-bold mb-3 font-urbanist'>
                Nosotros
              </h3>
              <ul className='list-none'>
                <FooterLink
                  url='https://www.koffguerrero.com/es/nosotros/index'
                  text='Quiénes somos'
                  className='custom-class'
                />

                <FooterLink
                  url='https://www.koffguerrero.com/es/nosotros/clients'
                  text='Clientes y proyectos'
                  className='custom-class'
                />

                <FooterLink
                  url='https://www.koffguerrero.com/es/nosotros/quality'
                  text='Sistema de calidad'
                  className='custom-class'
                />

                <FooterLink
                  url='https://www.koffguerrero.com/es/nosotros/privacy'
                  text='Políticas de Privacidad'
                  className='custom-class'
                />

                <FooterLink
                  url='https://www.koffguerrero.com/es/inicio/covid'
                  text='Covid-19'
                  className='custom-class mb-16'
                />
              </ul>
            </div>
            <div className='w-full md:w-1/4 mb-6'>
              <h3 className='text-2xl font-bold mb-3 font-urbanist'>
                Productos y Servicios
              </h3>
              <ul className='list-none'>
                <FooterLink
                  url='https://www.koffguerrero.com/es/servicios/index'
                  text='Nuestros Servicios'
                  className='custom-class'
                />
                <FooterLink
                  url='https://www.koffguerrero.com/es/productos/index'
                  text='Nuestros Productos'
                  className='custom-class'
                />
                <FooterLink
                  url='https://www.koffguerrero.com/es/productos/validrisk'
                  text='ValidRisk'
                  className='custom-class'
                />
              </ul>
            </div>

            <div className='w-full md:w-1/4 mb-6'>
              <h3 className='text-2xl font-bold mb-3 font-urbanist'>
                Intranet KGC
              </h3>
              <ul className='list-none'>
                <FooterLink
                  url='https://koffguerrero.sharepoint.com/sites/SGC'
                  text='Sitio ISO 9001:2015'
                  className='custom-class'
                />
                <FooterLink
                  url='https://koffguerrero.sharepoint.com/sites/SGSI'
                  text='Sitio ISO 27001:2022'
                  className='custom-class'
                />
              </ul>
            </div>
          </div>
          <div>
            <FooterPoliticas />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center ml-5 md:w-1/4 mb-6'>
          <div className='flex flex-col justify-center'>
            <h3 className='text-2xl font-bold mb-3 font-urbanist'>
              Contáctanos
            </h3>
            <ul className='list-none'>
              <li className='mb-3 text-light'>Oficina:</li>
              <li>Av. presidente Kenny 5735,</li>
              <li>Oficina 1501</li>
              <li>Hotel Marriott - Torre lioniente</li>
              <li className='mb-3'>Las Condes, Santiago - Chile</li>
              <li className='text-light'>Teléfono: +56 222 036 494</li>
              <li className='text-light'>Email: contacto@koffguerrero.com</li>
            </ul>
            <ul className='flex'>
              <li>
                <a
                  href='https://www.linkedin.com/company/kgc-sa/'
                  className='flex items-center text-light colors:#7e0b68 hover:opacity-70'
                >
                  <img
                    src='/linkedin.png'
                    alt='Linkedin'
                    className='h-8  colors:#7e0b68 '
                  />
                  LinkedIn
                </a>
                <a
                  href='https://www.youtube.com/channel/UCAW4cRU5vl5FcGnTT4t8-Ng'
                  className='flex items-center text-light colors:#7e0b68 hover:opacity-70'
                >
                  <img
                    src='/youtube.png'
                    alt='Youtube'
                    className='h-8   colors:#7e0b68 '
                  />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
