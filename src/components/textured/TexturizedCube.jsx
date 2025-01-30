import { useLoader } from '@react-three/fiber'
import React from 'react'
import {TextureLoader} from 'three'


export const TexturizedCube = () => {
    const texture = useLoader(TextureLoader, './textures/tex1.jpeg')

    return(
      <mesh>
        <boxGeometry args={[2,2,2]} />
        <meshStandardMaterial map={texture}/>
      </mesh>
    )
}
