import React from 'react'
import Header from '../Header/Header'

import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from "framer-motion";
import NumberCounter from 'number-counter'


const Hero = () => {
    const transition={typeof:"spring",duration:3}
    const mobile=window.innerWidth<=768 ?true :false;
  return (
    <div className='hero' id='Home'>
    <div className='blur hero-blur'></div>
    <div className='left-h'>
    <Header/>
    <div className='the-best-ad'>

        <motion.div
         initial={{left:mobile?"165px":"238px"}}
        whileInView={{left:"9px"}}
        transition={{...transition,type:'tween'}}
        ></motion.div>
        <span>The Best Fitness Club in Lucknow</span>
    </div>
    <div className='hero-text'>
        <div>
        <span className='stroke-text'>Shape </span> 
        <span>Your</span>
        </div>
        <div>
            <span>Ideal Body</span>
        </div>
        <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
    </div>
    <div className='figures'>
        <div>
        <span>
        <NumberCounter  end={140} start={100} delay='4' preFix="+" ></NumberCounter>
        </span>
        <span>expert coachs</span>
        </div>
        <div>
        <span><NumberCounter  end={978} start={800} delay='4' preFix="+" ></NumberCounter></span>
        <span>MEMBERS JOINED</span>
        </div>
        <div>
        <span><NumberCounter  end={50} start={0} delay='4' preFix="+" ></NumberCounter></span>
        <span>FITNESS PROGRAMS</span>
        </div>
    </div>
    <div className='hero-buttons'>
        <buttons className="btn">Get Started</buttons>
        <buttons className="btn">Learn More</buttons>

    </div>
    </div>
    <div className='right-h'>
        <button className='btn'>Join Now</button>

        <motion.div 
        transition={transition}
        whileInView={{right:"4rem"}}
        initial={{right:"-1rem"}}
        className='heart-rate'>
            <img src={Heart} alt='Heart Beat' ></img>
            <span>Heart Rate</span> 
            <span><NumberCounter  end={116} start={95} delay='4' postFix="bpm" ></NumberCounter></span>
        </motion.div>
    </div>
    <div>
        <img src={hero_image} alt=''  className='hero-image'></img>
        <motion.img initial={{right:"11rem"}}
        transition={transition}
        whileInView={{right:"20rem"}}
         src={hero_image_back} alt='' className='hero-image-back'></motion.img>
    </div>
    <motion.div 
    initial={{right:"37rem"}}
    transition={transition}
    whileInView={{right:"28rem"}}
    className='calories'>
    <img src={Calories}  alt="" className='' /> 
    <div>

    <span>Calories Burned</span>
    <samp><NumberCounter  end={220} start={180} delay='4' postFix="kcal" ></NumberCounter></samp>
    </div>

    </motion.div>
    </div>
    
  ) 
}

export default Hero