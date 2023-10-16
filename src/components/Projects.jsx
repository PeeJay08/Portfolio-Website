import React from "react";
import huntBowser from "../assets/bowser-game.png";
import pokedex from "../assets/pokedex.jpg"
import budgetTracker from "../assets/budget.jpg";
import quizyB from "../assets/quizyb.jpg";
import AOS from "aos"
import { useEffect } from "react";
import "aos/dist/aos.css"

const Projects = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])
  return (
    <div name="projects" className="w-full md:h-screen text-[#F0F0F0] bg-[#0D1F3C]">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center w-full h-full md:text-left text-center animation" data-aos="fade-up">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-[#F0F0F0] border-[#A47E3B]">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my recent projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 px-5">
          <div className="container bg-[#0a192f] rounded-md mx-auto shadow-lg shadow-[#040c16] p-4">
            <div
              style={{backgroundImage: `url(${huntBowser})`}}
              className="shadow-lg  shadow-[#040c16] content-div"
              alt="Hunt-Bowser Image"
            />
            <div className="text-center mt-2 text-xl">Hunt Evil Bowser (JS)</div>
            <p className="text-center mt-1 text-base">Welcome to the Hunt-Evil Bowser Game! This is a fun and challenging game where you will have to choose between 4 characters from the Mario universe: Mario, Luigi, Yoshi, and Bowser.</p>
            <div className="pt-4 text-center">
              <a href="https://hunt-bowser.netlify.app/" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Demo
                </button>
              </a>
              <a href="https://github.com/PeeJay08/JS-Game" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="container bg-[#0a192f] rounded-md mx-auto shadow-lg shadow-[#040c16] p-4">
            <div
              style={{backgroundImage: `url(${pokedex})`}}
              className="shadow-lg  shadow-[#040c16] content-div"
              alt="Pokedex Image"
            />
            <div className="text-center mt-2 text-xl">Pokedex App (ReactJS)</div>
            <p className="text-center mt-1 text-base">This is a React Pokédex app that allows users to view a list of Pokémon. The app features a pagination system, allowing users to navigate through the list of Pokémon.</p>
            <div className="pt-4 text-center">
              <a href="https://reactjs-pokedex-app.netlify.app/" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Demo
                </button>
              </a>
              <a href="https://github.com/PeeJay08/pokedex-app" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="container bg-[#0a192f] rounded-md mx-auto shadow-lg shadow-[#040c16] p-4">
            <div
              style={{
                backgroundImage: `url(${budgetTracker})`,
              }}
              className="shadow-lg shadow-[#040c16] content-div"
              alt="Budget-Tracker Image"
            />
            <div className="text-center mt-2 text-xl">
              Budget Tracker App (React NODE)
            </div>
            <p className="text-center mt-1 text-base">Budget Tracker is a web application that allows users to track their income and expenses. It provides a user-friendly interface for managing personal finances.</p>
            <div className="pt-4 text-center">
              <a href="https://budgetplanner-nodejs.netlify.app/" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Demo
                </button>
              </a>
              <a href="https://github.com/PeeJay08/nodejs-app" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="container bg-[#0a192f] rounded-md mx-auto shadow-lg shadow-[#040c16] p-4">
            <div
              style={{
                backgroundImage: `url(${quizyB})`,
              }}
              className="shadow-lg shadow-[#040c16] content-div"
              alt="QuizyB Image"
            />
            <div className="text-center mt-2 text-xl">QuizyB (MERN APP)</div>
            <p className="text-center mt-1 text-base">With QuizyB, quiz builders can design multiple-choice quizzes with specific questions and answers. On the players side, they can access these quizzes using unique reference codes given by the quiz builders.</p>
            <div className="pt-4 text-center">
              <a href="https://quizyb.netlify.app/" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Demo
                </button>
              </a>
              <a href="https://github.com/PeeJay08/quizyB" target="_blank" rel="noreferrer" >
                <button className="rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-xl border-2 hover:bg-[#A47E3B] hover:border-[#A47E3B]">
                  Code
                </button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
