import React from "react";

export const Header = ({onContatoClick}) => {
  return (
    <header className="w-full h-[12vh] bg-[#000000] flex items-center justify-center z-30">
      <nav className=" w-11/12 flex items-center justify-between">
        <h2 className="text-white text-4xl font-bold">João Paulo</h2>
        <ul className="w-6/12 flex justify-around text-white">
          <li className="px-5 py-2 rounded-full duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black text-[18px]">
            <a href="#about_me">Sobre</a>
          </li>
          <li className="px-5 py-2 rounded-full duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black text-[18px]">
            <a href="#projects">Projetos</a>
          </li>
          <li className="px-5 py-2 rounded-full duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black text-[18px]">
            <a href="#skills">Habilidades</a>
          </li>
          <li onClick={onContatoClick} className="cursor-pointer px-5 py-2 rounded-full duration-200 hover:shadow-[0_0_10px_10px_white] hover:bg-white hover:text-black text-[18px]">
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};
