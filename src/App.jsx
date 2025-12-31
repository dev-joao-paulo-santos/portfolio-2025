import React, { useEffect, useRef, useState } from "react";
import { Header } from "./components/page/Header";
import Section from "./components/page/Section";
import "./index.css";
import SpaceWarp from "./components/page/SpaceWarp";
import BacksideCubes from "./components/page/BacksideCubes";
import Aos from "aos";
import "aos/dist/aos.css";
import CursorFollow from "./components/page/CursorFollow";
import Carousel from "./components/page/Carousel";
import Skills from "./components/page/Skills";
import Contato from "./components/page/Contato";

function App() {
  const [showContato, setShowContato] = useState(false);
  const sectionRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <div
      id="about_me"
      className="w-screen h-screen overflow-auto overflow-x-hidden font-[Poppins]"
    >
      <Header onContatoClick={() => setShowContato(true)} />
      <Section
        background={"linear-gradient(#145653, #0C312F, #021212, black)"}
        ref={sectionRef}
      >
        <CursorFollow sectionRef={sectionRef} hoverRef={hoverRef} />
        <div
          ref={hoverRef}
          className="w-7/12 h-10/12 mb-5 flex flex-col justify-center z-20"
        >
          <h1
            className="text-white text-6xl font-bold"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Olá!
          </h1>
          <h3
            className="text-white text-2xl font-bold my-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Eu sou João Paulo
          </h3>
          <p
            className="text-white text-lg"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Um jovem desenvolvedor Full-Stack e tecnólogo em Banco de Dados, com
            experiência em projetos web envolvendo front-end, back-end e banco
            de dados, focado em criar soluções funcionais, modernas e bem
            estruturadas, como interfaces responsivas, APIs e sistemas web
            integrados a banco de dados.
          </p>
        </div>
      </Section>
      <SpaceWarp>
        <div id="projects" className="w-full h-full flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white z-100 mt-16">
            Alguns de meus projetos
          </h1>
          <Carousel />
        </div>
      </SpaceWarp>
      <BacksideCubes>
        <div
          id="skills"
          className="w-8/12 h-[95%] flex flex-col px-0 py-6 rounded-3xl items-center justify-center bg-black/60 backdrop-blur-md text-white"
        >
          <h1 className="text-2xl font-bold z-100">Minhas habilidades</h1>
          <div className="w-[80%] h-[95%] flex items-center justify-center">
            <Skills />
          </div>
        </div>
      </BacksideCubes>
      <Contato visible={showContato} onClose={() => setShowContato(false)} />
    </div>
  );
}

export default App;
