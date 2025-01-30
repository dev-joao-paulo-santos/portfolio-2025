import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React from "react";

export const Header = () => {
  return (
    <header className="w-full h-[14vh] bg-[#012a4a] flex items-center justify-center z-30">
      <nav className=" w-11/12 flex items-center justify-between"> 
        <h2 className="text-white text-4xl font-bold">João Paulo</h2>
        <ul className="w-6/12 flex justify-around text-md text-white">
          <li className="px-5 py-2 rounded-3xl duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black"><a href="#">Sobre</a></li>
          <li className="px-5 py-2 rounded-3xl duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black"><a href="#">Projetos</a></li>
          <li className="px-5 py-2 rounded-3xl duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black"><a href="#">Habilidades</a></li>
          <li className="px-5 py-2 rounded-3xl duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black"><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};
