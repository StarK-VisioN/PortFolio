import React from "react";
import { SkillsInfo } from "../../../src/constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className="pt-30 pb-10 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skills Section */}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill itmes in each card*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-wrap items-center justify-center space-x-1 bg-transparent border-2 border-gray-700 rounded-xl py-1 px-1 sm:py-2 sm:px-2 text-center
                    hover:bg-gray-800 hover:scale-105 transition duration-100"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-[11px] sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
