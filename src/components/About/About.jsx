import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../../assets/profile.jpg';

function About() {
  return (
    <section id='about' className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans md:mt-24 lg:mt-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          {/* 1st - Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* 2nd - Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Niraj Hatote
          </h2>

          {/* 3rd - Skills with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <TypeAnimation
                sequence={[
                  'Coder',
                  2000, 
                  'Fullstack Developer',
                  2000, 
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </span>
          </h3>

          {/* 4th - About me */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a <strong>Full-stack Developer</strong> with a strong foundation in both front-end and back-end development, specializing in the MERN stack - MongoDB, Express.js, React.js, Node.js. I build responsive, scalable web applications that provide seamless user experiences and efficient performance.
            <br />
            <br />
            On the front-end, I work with React.js, Tailwind CSS, and Material UI to create clean, user-friendly interfaces. On the back-end, I develop robust APIs using Node.js and Express, and manage databases with MongoDB, ensuring secure and optimized data handling.
            <br />
            <br />
            Currently, I'm expanding my knowledge by learning <strong>Java and Data Structures & Algorithms</strong> to improve my problem-solving and coding efficiency.
          </p>

          {/* 5th - Resume btn */}
          <a
            href="https://drive.google.com/file/d/1nn0nD8Kc6qVsKm2q8M4ZBDiyINwab5t_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 px-2 rounded-md mt-5 text-lg font-bold transition duration-20 transform hover:scale-105 bg-white text-black"
            
          >
            DOWNLOAD CV
          </a>

        </div>



        {/* Right side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src={profileImg} alt="Niraj" 
               className="w-md h-full rounded-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default About