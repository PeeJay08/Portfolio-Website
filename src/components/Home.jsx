import React, {useEffect} from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import Avatar from "../assets/computer-guy.png";
import { Link } from "react-scroll";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div name="home" className="w-full h-screen bg-[#0D1F3C] flex">
      <div className="max-w-[1200px] mx-auto my-auto px-4 md:px-8 flex flex-col justify-center h-full animation" data-aos="fade-up">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="text-xl text-[#F0F0F0] mt-20 text-center md:text-left">
              Hi there, my name is
            </p>
            <h1 className="text-5xl sm:text-8xl font-bold text-[#ccd6f6] text-center md:text-left">
              Patrick Joshua
            </h1>
            <h1 className="text-5xl sm:text-8xl font-bold text-[#ccd6f6] text-center md:text-left">
              San Jose
            </h1>
            <p className="text-2xl text-[#ccd6f6] text-center md:text-left">
              I'm a Full Stack Developer.
            </p>
            <div className="text-center md:text-left">
              <Link to="about" smooth={true} duration={500}>
              <button className="text-[#F0F0F0] text-lg border-2 px-5 py-3 my-5 flex items-center rounded-lg hover:bg-[#A47E3B] hover:border-[#A47E3B] mx-auto md:mx-0">
                About Me <HiArrowNarrowDown className="ml-3"/>
              </button>
              </Link>
              <div className="flex justify-center md:justify-start mt-5">
                <a href="https://github.com/PeeJay08" target="_blank" rel="noopener noreferrer" className="mr-4 ">
                  <FaGithub size={32} color="#F0F0F0 "/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <FaFacebook size={32} color="#F0F0F0" />
                </a>
                <a href="https://www.linkedin.com/in/patrick-joshua-san-jose/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={32} color="#F0F0F0" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <img
              src={Avatar}
              alt="Avatar"
              className="rounded-full sm:2/5 w-3/4 mx-auto md:mx-0 md:ml-10 shadow-lg shadow-[#040c16]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
