import React, { useEffect, useRef, useState } from "react";
import { Header } from "./components/page/Header";
import Section from "./components/page/Section";
import "./index.css";
import SpaceWarp from "./components/page/SpaceWarp";
import BacksideCubes from "./components/page/BacksideCubes";
import Aos from "aos";
import "aos/dist/aos.css";
import Cursor from "./components/page/Cursor";

function App() {
  const sectionRef = useRef(null); 
  const hoverRef = useRef(null)

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-screen h-screen overflow-auto overflow-x-hidden font-[Poppins]" >
      <Header />
      {/* Passando a ref para o Section */}
      <Section background={"linear-gradient(#145653, #0C312F, #021212, black)"} ref={sectionRef}>
        {/* Passando a ref para o Cursor */}
        <Cursor sectionRef={sectionRef} hoverRef={hoverRef}/>
        <div
          ref={hoverRef}
          data-aos='fade-right'
          className="w-3/6 h-3/6 flex flex-col justify-center z-20">
          <h1 className="text-white text-6xl font-bold">Hello there!</h1>
          <h3 className="text-white text-xl font-bold my-6">I'm João Paulo</h3>
          <p className="text-white text-lg">
            A 19-year-old front-end developer from Brazil passionate about
            creating engaging and interactive web experiences. I specialize in
            building modern, responsive, and visually striking websites using
            tools like HTML, CSS, JavaScript, React, and Three.js. With a solid
            foundation in front-end technologies and a creative mindset, I
            strive to bring ideas to life in the digital world.
          </p>
        </div>
      </Section>
      <SpaceWarp>
        <div className="flex flex-col text-white w-[80vw] h-[80vh] bg-black/40 items-center text-center justify-center">
          <h1 className="text-3xl font-bold z-100 ">Section 1</h1>
        </div>
      </SpaceWarp>
      <Section>
        <div className="w-3/6 h-3/6 flex flex-col items-center justify-center bg-blue-400">
          <h1 className="text-3xl font-bold z-100 ">Section 2</h1>
        </div>
      </Section>
      <BacksideCubes>
        <div className="w-3/6 h-3/6 flex flex-col items-center justify-center bg-black/20 backdrop-blur-md text-white">
          <h1 className="text-3xl font-bold z-100 ">Section 3</h1>
        </div>
      </BacksideCubes>
    </div>
  );
}

export default App;
