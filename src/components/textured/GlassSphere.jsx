export default function GlassSphere ({pos}){
    return (
        <mesh position={pos}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="transparent"
          roughness={0} // Define a suavidade (vidro)
          metalness={0.3} // Nível de reflexo metálico
          transmission={0.8} // Transparência (quase 100%)
          thickness={0.8} // Espessura do vidro
          transparent
        />
      </mesh>
    )
}