import React from 'react';
//images
import MyAvatar from '../assets/euAvatar.png';
import LogoAP from '../assets/Gaming-bro.svg'
//icons
import {FaGithub, FaYoutube, FaDribbble, FaLinkedin} from 'react-icons/fa'
//type animation
import {TypeAnimation} from 'react-type-animation'
//mation
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'




const Banner = () => {
  return (
    <section className='section'id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row'>
          {/*text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              GUI <span>OLIVEIRA</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secundary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Youtuber',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
               />               
            </div>
            {/*Breve descrição sobre você */}
            <p className='mb-8 max-w-lg mx-auto lg:mx0'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>
                My Portifolio
              </a>
            </div>
            {/* redes socias */}
            <div className='flex text-[20px]  gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube/>
              </a>
              <a href='#'>
                <FaGithub/>
              </a>
              <a href='#'>
                <FaLinkedin/>
              </a>
            </div>
          </div>
          {/*Image */}
          <div>
            <img src={LogoAP} alt=''height="80" width="650" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
