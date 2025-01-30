import { useSpring, a } from '@react-spring/three'
import React, { useRef } from 'react'

export const AnimatedScaleCube = () => {
    const cubeRef = useRef()

    const { scale } = useSpring({
        scale: [1.5, 1.5, 1.5],
        from: { scale: [1, 1, 1] },
        config: { duration: 400 },
        loop: { reverse: true }
    })



    return (
        <a.mesh ref={cubeRef} scale={scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'purple'} />
        </a.mesh>
    )
}


