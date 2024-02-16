import FooterLink from "./FooterLink";

const FooterPoliticas = () => {
  return (
    <li className='flex items-center  gap-2'>
      <div className='circle-icon mr-1'>
        <span>C</span>
      </div>
      <ul className='flex gap-2'>
        <FooterLink
          text='2024 - Koff & Guerrero Consultants S.A. - '
          className='whitespace-nowrap items-end '
        />
        <FooterLink
          url={"/"}
          text='Politicas de Privacidad'
          className='text-[#7E0B68] whitespace-nowrap'
        />
      </ul>
    </li>
  );
};

export default FooterPoliticas;
