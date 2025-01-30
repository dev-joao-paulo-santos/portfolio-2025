import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo } from "react";
import { Html } from "@react-three/drei";

// Função para gerar cor aleatória
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  return `#${Array.from({ length: 6 })
    .map(() => letters[Math.floor(Math.random() * 16)])
    .join("")}`;
};

const SpaceWarpCubes = ({ count = 10000, groupColor }) => {
  const groupRef = useRef();
  const { camera } = useThree();

  const cubes = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        z: camera.position.z - 1 - Math.random() * 12,
      });
    }
    return positions;
  }, [count, camera.position.z]);

  useFrame(() => {
    groupRef.current?.children.forEach((cube) => {
      cube.position.z += 0.2;

      if (cube.position.z > camera.position.z) {
        cube.position.z = camera.position.z - 17;
      }
    });

    camera.rotation.z += 0.003;
  });

  return (
    <group ref={groupRef}>
      {cubes.map((pos, index) => (
        <mesh key={index} position={[pos.x, pos.y, pos.z]} scale={[1, 1, 1]}>
          <boxGeometry args={[0.01, 0.01, 1]} />
          <meshBasicMaterial color={groupColor} />
        </mesh>
      ))}
    </group>
  );
};

const SpaceWarp = ({children}) => {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [groupColor, setGroupColor] = useState("white");

  const handleBackgroundClick = () => {
    setBackgroundColor(generateRandomColor());
    setGroupColor(generateRandomColor());
  };

  useEffect(() => {
    const handleResize = () => {
      const { camera, gl } = useThree();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-[100%] h-screen">
    <Canvas
    onClick={handleBackgroundClick}
    style={{ background: backgroundColor }}
    camera={{ position: [0, 0, 2], fov: 45 }}
  >
      <SpaceWarpCubes groupColor={groupColor} />
      <Html center className="w-screen h-screen flex justify-center">
      {children}
      </Html>
    </Canvas>
    </div>
  );
};

export default SpaceWarp;
