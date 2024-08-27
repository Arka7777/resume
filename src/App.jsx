import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <div className="overflow-x-hidden text-zinc-300 antialiased selection:bg-cyan-200 selection:text-blue-900 selection:font-bold   [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] ">
      
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero/>
          <About/>
          <Technology/>
          {/* <Experience/> */}
          <Projects/>
          <Contact/>
        </div>
      </div>
    </>
  );
}
{/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}