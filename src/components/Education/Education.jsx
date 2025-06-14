import React from "react";
import { education } from "../../constants";

function Education() {
  return (
    <section
      id="education"
      className="py-16 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-44 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Here are the details of my academic background
        </p>
      </div>

      {/* Education view */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education entries */}
        {education.map((education, index) => (
          <div
            key={education.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-all duration-300 hover:scale-102 hover:shadow-blue-400/50`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-4">
                {/* School Logo */}
                <div className="w-36 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center ">
                  <img
                    src={education.img}
                    alt={education.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {education.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {education.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{education.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Grade: {education.grade}
              </p>
              <p className="mt-4 text-gray-400">{education.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
