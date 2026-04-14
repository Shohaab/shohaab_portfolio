import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TechStack from "../components/techstack";
import Projects from "../components/projects";
import DownloadButtons from "../components/buttons";
import CertificationsAndAchievements from "../components/certifications";
import ContactUs from "../components/ContactUs";
// 👉 ADD THESE IMPORTS (or comment sections if not created yet)



function Home() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="home"><Hero /></section>

      <section id="about">
<div className=" flex flex-col justify-center items-center bg-[#0f172a] text-center px-4"> <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r text-gray-300 leading-tight bg-clip-text"> About Me </h1> <p className="text-gray-300 max-w-6xl text-2xl"> Full Stack Developer with expertise in MERN Stack React.js, Django, PHP, C# and REST API, FAST API development. Experienced in building scalable, high-performance applications and delivering end-to-end solutions at Qonkar Technologies. Skilled in AI integration, 
    including Large Language Models (LLMs) and computer vision for real-time intelligent systems </p> </div>


        {/* <About /> */} 
      </section>

      <section id="tech">
        <TechStack />
      </section>

      <section id="projects">
        <Projects />
      </section>

     


      {/* Buttons Section */}
      <DownloadButtons />

        <section id="certifications">
            <CertificationsAndAchievements />
        </section>

<section id="contact">
        <ContactUs />
      </section>

    </div>
  );
}

export default Home;