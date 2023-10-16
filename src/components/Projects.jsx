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
    <div name="projects" className="w-full md:h-screen text-[#F0F0F0] bg-[#0D1F3C] ">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full md:text-left text-center animation" data-aos="fade-up">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-[#F0F0F0] border-[#A47E3B]">
            Projects
          </p>
          <p className="py-6 text-xl">Check out some of my recent projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-3">
          <div className="container bg-[#0a192f] rounded-md mx-auto shadow-lg shadow-[#040c16] p-4">
            <div
              style={{backgroundImage: `url(${huntBowser})`}}
              className="shadow-lg  shadow-[#040c16] content-div"
              alt="Hunt-Bowser Image"
            />
            <div className="text-center mt-2 text-xl ">Hunt Evil Bowser Game(JS)</div>
            <p className="text-center mt-1 text-base md:text-sm">A game with Mario characters where you choose from Mario, Luigi, Yoshi, and Bowser.</p>
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
            <div className="text-center mt-2 text-xl">Pokedex React-App (ReactJS)</div>
            <p className="text-center mt-1 text-base">React Pokédex app for viewing and navigating Pokémon.</p>
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
            <p className="text-center mt-1 text-base">Budget Tracker: Manage or track your finances easily.</p>
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
            <p className="text-center mt-1 text-base">Create quizzes with access using reference codes in QuizyB.</p>
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
