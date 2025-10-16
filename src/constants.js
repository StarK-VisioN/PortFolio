// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render.png';
import postgreSQL from './assets/tech_logo/postgreSQL.jpeg';

// Education Section Logo's
import psbaLogo from './assets/education_logo/psba.png';
import tjgiLogo from './assets/education_logo/tjgi.png';
import mgmLogo from './assets/education_logo/mgm.jpg';

// Project Section Logo's
import globeverseLogo from './assets/work_logo/GlobVerse.jpg';
// import pawsomeLogo from './assets/work_logo/PawSome.jpg';
// import todoLogo from './assets/work_logo/Todo.jpg';
// import wanderlustLogo from './assets/work_logo/Wanderlust.jpg';
// import weatherappLogo from './assets/work_logo/WeatherApp.jpg';
import interviewPrepAi from './assets/work_logo/InterviewPrep.jpg';
import atherAI from './assets/work_logo/AtherAI.png';
import IMS from './assets/work_logo/IMS.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreSQL },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: renderLogo },
    ],
  },
];




  
export const education = [
  {
    id: 0,
    img: psbaLogo,
    school: "PSBA English School", 
    date: "Apr 2019 - June 2020",
    grade: "86%",
    desc: "I completed my Class 10 education at PSBA English School, Chhatrapati Sambhaji Nagar, under the CBSE board.",
    degree: "CBSE (X) - Secondary Education",
  },
  {
    id: 1,
    img: tjgiLogo,
    school: "The Jain International School", 
    date: "June 2020 - June 2022",
    grade: "62.3%",
    desc: "I completed my Class 12 education at The Jain Internation School, Chhatrapati Sambhaji Nagar, under the CBSE board.",
    degree: "CBSE (XII) - Senior Secondary Education",
  },
  {
    id: 2,
    img: mgmLogo,
    school: "MGM JNEC",
    date: " August 2022 - *June 2026",
    grade: "CGPA - 8.16 ",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from MGM's Jawaharlal Nehru Engineering College (JNEC), Chhatrapati Sambhaji Nagar.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Buoy IMS",
    description: "Custom-built, web-based inventory and billing management system designed specifically for a buoy manufacturing company. The platform streamlines inventory tracking, production management, and billing—ensuring operational efficiency and real-time visibility.",
    image: IMS,
    tags: ["React JS", "Node.js", "PostgreSQL", "Express.js", "Tailwind CSS"],
    github: "https://github.com/StarK-VisioN/rotoSpinTech.git",
    webapp: "https://rotospintech.vercel.app/",
  },
  {
    id: 1,
    title: "Ather.AI",
    description: "AetherAI is a fully functional AI SaaS platform built with the PERN stack (PostgreSQL, Express, React, Node.js).It provides AI-powered tools for content creation, image editing, and resume analysis, all integrated with subscription billing to unlock premium features.",
    image: atherAI,
    tags: ["React JS", "Node.js", "PostgreSQL", "Express.js", "Google gemini API", "Tailwind CSS", "Clerk", "Clipdrop"],
    github: "https://github.com/StarK-VisioN/Aether.AI.git",
    webapp: "https://aether-ai-xi.vercel.app/",
  },
  {
    id: 2,
    title: "InterviewPrepAI",
    description: "InterviewPrepAI is a smart web application designed to streamline and enhance interview preparation. Users can generate role-specific interview questions, reveal suggested answers on demand, and dive deeper into core concepts. With features like topic organization, responsive UI, and AI-powered guidance, it offers a focused and customizable learning experience. Built using React, Vite, and Tailwind CSS, it ensures fast performance and seamless usage across devices.",
    image: interviewPrepAi,
    tags: ["React JS", "Node.js", "MongoDB", "Express.js", "Google gemini API", "Tailwind CSS"],
    github: "https://github.com/StarK-VisioN/PrepPilot.git",
    webapp: "https://prep-pilot-sssb.vercel.app/",
  },
  {
    id: 3,
    title: "GlobVerse",
    description: "GlobeVerse is an interactive web app that lets users explore countries, learning about their history, culture, and geography. With features like search, filters, and detailed country profiles, it offers an engaging educational experience. Built with React, it’s mobile-responsive and optimized for all devices.",
    image: globeverseLogo,
    tags: ["React JS", "Vite", "Tailwind CSS"],
    github: "https://github.com/StarK-VisioN/GlobeVerse.git",
    webapp: "https://globeverse.onrender.com/",
  },
  
];
