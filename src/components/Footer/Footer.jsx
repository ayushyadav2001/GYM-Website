import React from 'react'
import "./Footer.css"
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
   <div className="Footer-container">
   
    <hr/>
    <div className="footer">
    <div className="social-links">

        <img src={Github} alt=''></img>
        <img src={Instagram} alt=''></img>
        <img src={Linkedin} alt=''></img>
     </div>
     <div className="logo-f">
    
        <img src={Logo} alt="" />
 
   </div>
   </div>
   <div className="blur blur-f-1"></div>
    <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer