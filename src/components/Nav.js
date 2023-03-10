import React from 'react';
//import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs'

//import links
import {Link} from 'react-scroll'

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:botton-8 w-full overflow-hidden z-50'>
        <div className="container mx-auto">
          {/* nav inner*/}          
          <div className='w-full bg-black/20 h-[80px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-7 flex justify-between items-center text-2x1 text-white/50'>
            <Link to='home'activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[50px] h-[50px] flex items-center justfy-center'>
              <BiHomeAlt />
            </Link >
            <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justfy-center'>
              <BiUser />
            </Link>
            <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justfy-center'>
              <BsClipboardData />
            </Link>
            <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justfy-center'>
              <BsBriefcase />
            </Link>
            <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[50px] flex items-center justfy-center'>
              <BsChatSquareText />
            </Link>
          </div>          
        </div>    
    </nav>
  )
};

export default Nav;
