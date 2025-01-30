import { useSpring, a } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export const AnimatedPositionCube = () => {
    const cubeRef = useRef()

    //estado para atualizar a posição no eixo X
    const [randomX, setRandomX] = useState(0)
  
    const generateRandomX = ()=>{
      const min = -2
      const max = 2
      return Math.random()*(max-min) * min
    }
  
    const {position} = useSpring({
      position: [2,0,0],
      from: {position: [randomX, 0, randomX]},
      config:{mass: 1, tension: 40, friction: 10},
      loop: {reverse: true},
      onRest: ()=>{
        setRandomX(generateRandomX())
      }
    })
  
    useFrame(()=>{
      cubeRef.current.rotation.x += .01
      cubeRef.current.rotation.y += .01
    })
  
    return (
      <a.mesh ref={cubeRef} position={position}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={'chartreuse'} wireframe/>
      </a.mesh>
    )
}
