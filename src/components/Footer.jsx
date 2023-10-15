import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-300 py-4 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/PeeJay08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/patrick-joshua-san-jose/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} Patrick Joshua San Jose
      </p>
    </footer>
  );
};

export default Footer;
