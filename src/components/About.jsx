import React, { useEffect } from "react";
import Avatar from "../assets/pj.png";
import CV from '../file/PatrickJoshuaSanJose_FullStackDev_MERN_2023.pdf';
import { HiDownload } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    window.open(CV, "_blank");
  };

  return (
    <div name="about" className="w-full h-screen bg-[#0D1F3C] text-[#F0F0F0] text-center">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-full flex flex-col md:flex-row items-center animation" data-aos="fade-up">
        <div className="md:w-1/2">
          <div className="sm:text-center md:text-left pb-8 pr-4">
            <p className="text-5xl font-bold inline border-b-4 border-[#A47E3B]">
              About Me
            </p>
          </div>
          <div className="w-full flex justify-start">
            <img
              style={{ width: "100%", maxWidth: 320, height: 400 }}
              src={Avatar}
              alt="Avatar"
              className="rounded-lg mb-4 shadow-lg shadow-[#040c16] bg-[#C0C0C0]"
            />
          </div>

        </div>
        <div className="md:w-3/4">
        <p className="py-3 md:text-left text-center text-2xl">
            Hi! I'm PJ, nice to meet you.
          </p>
          <p className="md:text-lg sm:text-base md:text-left text-center mb-5">
            A graduate with a degree of BS in Computer Engineering. Enrolled at
            Uplift Code Camp as a Full-Stack Web Developer. As a Web Developer, I
            am crafting my path to becoming a skilled web developer, ready to
            create dynamic and immersive online experiences.
          </p>
          <p className="md:text-lg sm:text-base md:text-left text-center mb-5">
            Outside of coding life, I enjoy playing
            video games, working out, playing basketball, playing with my dog
            named Spike and also cooking.
          </p>
          <button
            onClick={handleDownload}
            className="text-white text-base rounded-lg border-2 px-4 py-2 mt-7 flex items-center hover:bg-[#A47E3B] hover:border-[#A47E3B] mx-auto md:mx-0"
          >
            Download Resume <HiDownload className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;




// import React from 'react';

// const About = () => {
//   return (
//     <div name='about' className='w-full h-screen bg-[#0D1F3C] text-gray-300 '>
//       <div className='flex flex-col justify-center items-center w-full h-full '>
//         <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
//           <div className='sm:text-right pb-8 pl-4'>
//             <p className='text-5xl font-bold inline border-b-4 border-[#A47E3B]'>
//               About
//             </p>
//           </div>
//           <div></div>
//           </div>
//           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 shadow-md shadow-[#040c16]'>
//             <div className='sm:text-right text-4xl font-bold'>
//               <p>Hi! I'm PJ, nice to meet you.</p>
//             </div>
//             <div>
//               <p>A graduate with a degree of BS in Computer Engineering. Enrolled
//                 at Uplift Code Camp as a Full-Stack Web Developer. As a Web
//                Developer, I am crafting my path to becoming a skilled web
//                 developer, ready to create dynamic and immersive online
//                 experiences.</p>
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default About;
