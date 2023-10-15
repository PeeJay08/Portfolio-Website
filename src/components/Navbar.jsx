import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/pj-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-12 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "70px"}} />
      </div>

        <ul className="hidden md:flex mx-20">
          <li><Link to="home" className="nav-link" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" className="nav-link" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" className="nav-link" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" className="nav-link" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" className="nav-link" smooth={true} duration={500}>Contact</Link></li>
        </ul>


      <div onClick={handleClick} className="md:hidden z-10 text-3xl">
        {!nav ? <FaBars/> : <FaTimes/>}
      </div>

      <ul className={!nav ? "hidden" : " absolute top-0 left-0 w-full h-screen bg-[#0D1F3C] flex flex-col justify-center items-center text-4xl"}>
        <li><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
