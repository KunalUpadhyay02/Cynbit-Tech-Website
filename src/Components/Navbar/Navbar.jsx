import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import menuicon from '../../assets/menu-icon.png'
// import logo from '../../assets/logo.png'
const Navbar = () => {
  
    const [sticky, setsticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setsticky(true) : setsticky(false);
      })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        {/* <img src={logo} alt="Cynbit Technologies" className='logo' /> */}
        <h2>Cynbit Technologies</h2>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}> 
            <li>What We Do</li>
            <li>Who We Are</li>
            <li>Insights</li>
            <li>Careers</li>
            <li><Link to='testimonials' smooth = {true} offset={-260} duration={500}>Our Team</Link></li>
            <li><Link to='contact' smooth = {true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link>
            </li>
            <li>News & Events</li>
        </ul>
        <img src={menuicon} alt='' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar