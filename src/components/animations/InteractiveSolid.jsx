import { useSpring, a } from '@react-spring/three'
import React, { useRef, useState } from 'react'

export const InteractiveSolid = () => {
    const [hovered, setHovered] = useState(false)

    const {scale} = useSpring({
      scale: hovered ? [1.5, 1.5, 1.5]:[1,1,1],
      config: {tension: 300, friction: 10}
    })
  
    return (
      <a.mesh
      scale={scale}
      onPointerOver={()=>setHovered(true)}
      onPointerOut={()=>setHovered(false)}
      >
        <octahedronGeometry args={[1,0]}/>
        <meshStandardMaterial color={"lime"} roughness={.5} metalness={.8}/>
      </a.mesh>
    )
}
