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
    <div id="about_me" className="w-screen h-screen overflow-auto overflow-x-hidden font-[Poppins]">
      <Header onContatoClick={() => setShowContato(true)} />
      <Section
        background={"linear-gradient(#145653, #0C312F, #021212, black)"}
        ref={sectionRef}>
        <CursorFollow sectionRef={sectionRef} hoverRef={hoverRef} />
        <div
          ref={hoverRef}
          className="w-3/6 h-3/6 flex flex-col justify-center z-20">
          <h1 className="text-white text-6xl font-bold" data-aos="fade-right" data-aos-delay='600'>Olá! </h1>
          <h3 className="text-white text-2xl font-bold my-6" data-aos="fade-right" data-aos-delay='300'>Eu sou João Paulo</h3>
          <p className="text-white text-lg"data-aos="fade-right" data-aos-delay='100'>
            Tenho 20 anos e sou estudante de <strong>Banco de Dados</strong> na Fatec, com formação técnica em <strong>Desenvolvimento de Sistemas</strong>.  
            Sou apaixonado por criar soluções digitais, desde interfaces modernas e responsivas até lógica de programação, banco de dados e integração de sistemas.  
            Tenho experiência com HTML, CSS, JavaScript, React, Node.js, Python, Oracle e MongoDB — e estou sempre aberto a aprender novas tecnologias.  
            Busco uma oportunidade na área de <strong>TI</strong> para aplicar e expandir meus conhecimentos em diferentes áreas do desenvolvimento.
          </p>
        </div>
      </Section>
      <SpaceWarp>
        <div id="projects" className="w-full h-full flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white z-100 mt-36">
            Alguns de meus projetos
          </h1>
          <Carousel />
        </div>
      </SpaceWarp>
      <BacksideCubes>
        <div id="skills" className="w-8/12 h-8/12 flex flex-col px-0 py-6 rounded-3xl items-center justify-center bg-black/60 backdrop-blur-md text-white">
          <h1 className="text-3xl font-bold z-100">Minhas habilidades</h1>
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
