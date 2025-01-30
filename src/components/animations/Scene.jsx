import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { LightingCube } from './LightingCube'
import { Floor } from './Floor'

function Cubo (){
    return (
      <mesh position={[0,0,0]}>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={'orange'} roughness={.2} metalness={.4} />
      </mesh>
    )
  }

export const Scene = () => {
  return (
    <Canvas style={{background: 'linear-gradient(to left, white, chartreuse)'}}>
        <ambientLight intensity={.5}/>
        <Cubo />
        <OrbitControls />
        <LightingCube />
        <Floor />
    </Canvas>
  )
}
