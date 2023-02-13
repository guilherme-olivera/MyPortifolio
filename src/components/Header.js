import React from 'react';
//images
import Logo from '../assets/logo.svg';



const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>      
        {/*logo*/}
        <a href='#'>
        <img src={Logo} alt='80px'/>
        </a>
        {/*Button*/}
        <button className='btn btn-sm'>Entre em Contato</button>
      </div>
    </div>
  </header>
  ); 
};

export default Header;
