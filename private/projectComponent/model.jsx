'use client'
import "@/stylingComponent/test.css"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Stage } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export default function GLBViewer({ src }) {
  return (
    <div className='ModelContainer'>
      <Canvas shadows camera={{ position: [4, 4, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Stage environment="city" intensity={0.5}>
          <Model url={src} />
        </Stage>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}