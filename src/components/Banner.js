import React from 'react';
//images
import MyAvatar from '../assets/euAvatar.png';
import LogoAP from '../assets/Gaming-bro.svg'
//icons
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
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
        <div>
          {/*text */}
          <div>
            <h1>
              GUILHERME <span>OLIVEIRA</span>
            </h1>
            <div>
              <span>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Youtuber',
                2000,
              ]} />
            </div>
          </div>
          {/*Image */}
          <div>
            <img src={LogoAP} alt=''/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
