import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/nodejs.png";
import Express from "../assets/express.png"
import Mongo from "../assets/mongo.png";
import Github from "../assets/github.png";
import Git from "../assets/git.png"
import AOS from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css"

const Skills = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])
  return (
  <div name="skills" className="w-full h-screen bg-[#0D1F3C] text-[#F0F0F0]">
    <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full md:text-left text-center animation" data-aos="fade-up">
        <div>
            <p className="text-5xl font-bold inline border-b-4  border-[#A47E3B]">Skills</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
                <p className="my-4 text-2xl">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
                <p className="my-4 text-2xl">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript Icon" />
                <p className="my-4 text-2xl">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
                <p className="my-4 text-2xl">ReactJS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Node} alt="Node Icon" />
                <p className="my-4 text-2xl">NodeJS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Express} alt="ExpressJS Icon" />
                <p className="my-4 text-2xl">ExpressJS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Mongo} alt="Mongo Icon" />
                <p className="my-4 text-2xl">MongoDB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Git} alt="Git Icon" />
                <p className="my-4 text-2xl">Git</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
                <p className="my-4 text-2xl">GitHub</p>
            </div>
        </div>
    </div>
  </div>
  );
};

export default Skills;
