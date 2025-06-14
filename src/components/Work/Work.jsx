import React from 'react'
import {projects} from '../../constants'

import { useState } from "react";

function Work() {
   const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Toggle description expansion
  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };


  return (
    <section
    id='work'
    className="pt-20 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">My Projects</h2>
        <div className="w-52 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-blue-400/50 hover:-translate-y-0.5 transition-transform duration-100"
        >
          {/* Project image */}
          <div className="p-3">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>
          
          {/* Project title + description */}
          <div className="p-2">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            
            {/* Description with read more functionality */}
            <div className="text-gray-500 mb-4 pt-4">
              {expandedDescriptions[project.id] ? (
                <p>{project.description}</p>
              ) : (
                <p className="line-clamp-2">
                  {project.description}
                </p>
              )}
              
              {/* Read more button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDescription(project.id);
                }}
                className="text-blue-400 font-bold hover:text-blue-300 mt-1"
              >
                {expandedDescriptions[project.id] ? "Read less" : "Read more"}
              </button>
            </div>
            
            {/* Project tags */}
            <div className="mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Project links */}
            <div className="flex space-x-4 mt-4 mb-2">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 px-2 rounded-md font-semibold transition duration-2 transform hover:scale-105 bg-white text-black "
                onClick={(e) => e.stopPropagation()}
              >
                Code
              </a>
              
              <a 
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 px-2 rounded-md font-semibold transition duration-2 transform hover:scale-105 bg-white text-black"
                onClick={(e) => e.stopPropagation()}
              >
                Go Live
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    </section>
  )
}

export default Work