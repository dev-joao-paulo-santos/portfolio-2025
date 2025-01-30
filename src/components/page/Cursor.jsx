import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = ({ sectionRef, hoverRef }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Estado para ocultar o cursor fora da Section

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const { left, top, right, bottom } = sectionRef.current.getBoundingClientRect();
      const isInsideSection =
        e.clientX >= left &&
        e.clientX <= right &&
        e.clientY >= top &&
        e.clientY <= bottom;

      setIsVisible(isInsideSection); // Mostra o cursor apenas dentro da Section

      if (isInsideSection) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      }

      if (hoverRef.current) {
        const { left, top, right, bottom } = hoverRef.current.getBoundingClientRect();
        const isInsideHover =
          e.clientX >= left &&
          e.clientX <= right &&
          e.clientY >= top &&
          e.clientY <= bottom;

        setIsHover(isInsideHover); // Só aumenta o cursor dentro da div específica
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sectionRef, hoverRef]);

  return (
    isVisible && ( // Só renderiza o cursor se estiver dentro da Section
      <motion.div
        className="bg-emerald-400 backdrop-blur-lg shadow-[0_0_10px_#34d399] w-8 h-8 rounded-full fixed top-0 left-0 pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 16, // Centraliza o cursor no ponteiro
          y: mousePosition.y - 16,
          scale: isHover ? 10 : 1, // Aumenta de tamanho apenas na div do texto
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 300,
        }}
      />
    )
  );
};

export default Cursor;
