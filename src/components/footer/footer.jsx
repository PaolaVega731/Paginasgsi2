import React from "react";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className='w-[100%] bg-gray-900 bg-opacity-55% text-white py-8 px-4 md:px-16'>
      <div className='max-w-screen-xl mx-auto flex flex-wrap justify-between'>
        <div className='w-full md:w-1/4 mb-6'>
          <h3 className='text-2xl font-bold mb-3 font-urbanist'>Nosotros</h3>
          <ul className='list-none'>
            <li>
              <FooterLink
                url=''
                text='Quiénes somos'
                className='custom-class'
              />
            </li>
            <li>
              <FooterLink
                url=''
                text='Clientes y proyectos'
                className='custom-class'
              />
            </li>
            <li>
              <FooterLink
                url=''
                text='Sistema de calidad'
                className='custom-class'
              />
            </li>
            <li>
              <FooterLink
                url=''
                text='Políticas de Privacidad'
                className='custom-class'
              />
            </li>
            <li>
              <FooterLink
                url=''
                text='Covid-19'
                className='custom-class mb-16'
              />
            </li>

            <li className='flex items-center'>
              <div className='circle-icon mr-1'>
                <span>C</span>
              </div>
              <FooterLink
                url=''
                text='2024 - Koff & Guerrero Consultants S.A. - '
                className='custom-class whitespace-nowrap'
              />
              <FooterLink
                url=''
                text='Politicas de Privacidad'
                className='text-[#7E0B68] whitespace-nowrap'
              />
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/4 mb-6'>
          <h3 className='text-2xl font-bold mb-3 font-urbanist'>
            Productos y Servicios
          </h3>
          <ul className='list-none'>
            <FooterLink
              url=''
              text='Nuestros Servicios'
              className='custom-class'
            />
            <FooterLink
              url=''
              text='Nuestros Productos'
              className='custom-class'
            />
            <FooterLink url='' text='ValidRisk' className='custom-class' />
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6'>
          <h3 className='text-2xl font-bold mb-3 font-urbanist'>
            Intranet KGC
          </h3>
          <ul className='list-none'>
            <FooterLink
              url=''
              text='Sitio ISO 9001:2015'
              className='custom-class'
            />
            <FooterLink
              url=''
              text='Sitio ISO 27001:2022'
              className='custom-class'
            />
          </ul>
        </div>

        <div className='w-full md:w-1/4 mb-6'>
          <h3 className='text-2xl font-bold mb-3 font-urbanist'>Contáctanos</h3>
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
                href='https://linkedin.com'
                className='flex items-center text-light colors:#7e0b68 hover:opacity-70'
              >
                <img
                  src='./Vectores/linkedin.png'
                  alt='Linkedin'
                  className='h-8  colors:#7e0b68 '
                />
                LinkedIn
              </a>
              <a
                href='https://youtube.com'
                className='flex items-center text-light colors:#7e0b68 hover:opacity-70'
              >
                <img
                  src='./Vectores/youtube.png'
                  alt='Youtube'
                  className='h-8   colors:#7e0b68 '
                />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;