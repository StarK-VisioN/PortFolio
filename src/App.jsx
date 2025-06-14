import About from "./components/About/About"
import Education from "./components/Education/Education"
import Skills from "./components/Skills/Skills"
import Work from "./components/Work/Work"
import Contact from "./components/Contact/Contact"
import BlurBlob from "./components/BlurBlob";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"



const App = () => {
  return (
<div className="relative bg-black min-h-screen overflow-hidden">
      <BlurBlob position={{ top: '20%', left: '20%' }} size={{ width: '20%', height: '20%' }} />
      <BlurBlob position={{ top: '45%', right: '1%' }} size={{ width: '25%', height: '10%' }} />
      <BlurBlob position={{ top: '63%', left: '15%' }} size={{ width: '25%', height: '12%' }} />
      <BlurBlob position={{ top: '90%', right: '0%' }} size={{ width: '25%', height: '9%' }} />

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Education />
        <Work />
        <Contact />
        <Footer />
      </div>  

    </div>

  );
};

export default App;