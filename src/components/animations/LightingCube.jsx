// import React from 'react'

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function LightingCube (){
    const cubeRef = useRef()
    const speed = 0.02;
    useFrame(()=>{
        cubeRef.current.rotation.x += speed
        cubeRef.current.rotation.y += speed
        // cubeRef.current.rotation.z += speed
    })


    return (
      <mesh ref={cubeRef} position={[0,0,0]}>
        <boxGeometry args={[.1,.1,.1]} />
        <meshStandardMaterial color={'orange'} />
        <mesh position={[2, 0, 0]}>
            <sphereGeometry args={[.1, 32, 32]} />
            <meshBasicMaterial color={'#ff4444'} />
            <pointLight intensity={4} distance={100} color={'#fff'}/>
        </mesh>
      </mesh>
    )
  }