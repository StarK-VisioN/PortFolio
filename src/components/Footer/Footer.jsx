import React from 'react';
import { FaLinkedin, FaGithub  } from 'react-icons/fa'; // import icons from react-icons
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="sticky bottom-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[8vw] ">
      <div className="container mx-auto py-6 px-30 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Name / Logo */}
        <h2 className="text-lg text-white flex items-center gap-2">
          Made by - Niraj Hatote
          <span className="text-white text-2xl">♥</span>
        </h2>
        
        
        {/* Right: Social Icons */}
        <div className="flex gap-6 mt-4 md:flex">
          <a
            href="https://github.com/StarK-VisioN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/niraj-hatote-9742b8372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] "
          >
            <FaLinkedin size={24} />
          </a>
          {/* <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] "
          >
            <SiLeetcode size={24}/>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
