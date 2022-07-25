import React, { useState } from 'react'
import '../Header/Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll";

const Header = () => {
  const mobile=window.innerWidth<=768 ?true :false;
  const [menuOpened,setmenuOpened]=useState(false);
  return (
    
    <div className='header'>
        <img src={Logo} className='logo' alt='ufc_logo'></img>
        {(menuOpened=== false && mobile=== true)?
 (       <div style={{backgroundColor:"var(--appColor)",padding:"0.5rem",borderRadius:"5px"}} 
 onClick={()=>setmenuOpened(true)}
  ><img src={Bars} alt="" style={{width:"1.5rem",height:"1.5rem"}} /></div>):
 <ul className='header-menu'>
            <li >
            <Link to='Home' span={true} smooth={true} onClick={()=>setmenuOpened(false)} >Home</Link></li>
            <li ><Link onClick={()=>setmenuOpened(false)} to='programs' smooth={true}
           span={true} >Programs</Link></li>
            <li ><Link onClick={()=>setmenuOpened(false)} to='reasons' span={true}
            smooth={true}>Why us</Link></li>
            <li ><Link onClick={()=>setmenuOpened(false)} to='plans' span={true} smooth={true}>Plans</Link></li>
            <li ><Link to='Testimonials'
            span={true}
            smooth={true} onClick={()=>setmenuOpened(false)}>Testimonials</Link></li>
        </ul>
        }
     
    </div>
  )
}

export default Header