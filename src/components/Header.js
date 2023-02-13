import React from 'react';
//images
import Logo from '../assets/euAvatar.png';



const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>      
        {/*logo*/}
        <a href='#'>
          {/*tamanho da imagem superior*/}
        <img src={Logo} alt='' height="20" width="100" />
        </a>
        {/*Button*/}
        <button className='btn btn-sm'>Entre em Contato</button>
      </div>
    </div>
  </header>
  ); 
};

export default Header;
