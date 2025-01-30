import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BackSide } from "three";
import { Html } from "@react-three/drei";

function randomColor(){
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`
}

const groupColor1 = randomColor();
const groupColor2 = randomColor();
const backgroundColor = randomColor();

const CameraOrbit = () => {
  const cameraRef = useRef();

  useFrame(({ camera, clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const radius = 15;
    const x = radius * Math.sin(elapsedTime * 0.1);
    const z = radius * Math.cos(elapsedTime * 0.1);

    camera.position.set(x, 0, z);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const DoubleCube = ({ position, size, outerColor, innerColor, animSpeed }) => {
    const mesh = useRef();
    const [scale, setScale] = useState(size);

    useFrame(({clock})=>{
        const t = clock.getElapsedTime() * animSpeed;
        const newScale = Math.abs(Math.sin(t)) * size;
        setScale(newScale)
    })
  return (
    <group position={position}>
      <mesh ref={mesh} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={outerColor} side={BackSide} />
      </mesh>
      <mesh scale={scale * 0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={innerColor} />
      </mesh>
    </group>
  );
};

const BacksideCubes = ({children}) => {
  const cubes = Array.from({ length: 60 }, () => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ],
    size: Math.random() * 1.5 + 0.5,
    outerColor: groupColor1,
    innerColor: groupColor2,
    animSpeed: Math.random() * 0.8 + 0.1
  }));

  const cursor = useRef({x: 0, y: 0})

  window.addEventListener('mousemove', (e) => {
    cursor.current.x = e.clientX / window.innerWidth - 0.5
    cursor.current.y = e.clientY / window.innerHeight - 0.5
  })

  return (
    <div className="w-[100%] h-screen">
      <Canvas camera={{ position: [0, 0, 15], fov: 60}} style={{backgroundColor: backgroundColor}}>
        <CameraOrbit />

        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {cubes.map((props, i) => (
          <DoubleCube key={i} {...props} />
        ))}
        <Html center className="w-screen h-screen flex justify-center items-center">
          {children}
        </Html>
      </Canvas>
    </div>
  );
};

export default BacksideCubes;
