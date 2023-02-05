
import { OrbitControls, PresentationControls, TransformControls } from '@react-three/drei'
import Level from './components/Level'
import Sudo from './components/Sudo'
import { useRef, useState } from 'react'
import Camera from './components/Camera'
import Cactus from './components/Cactus'
import Icon from './components/Icon'
import Pyramid from './components/Pyramid'
import Board from './components/Board'
import Painel from './Painel'

import { Canvas } from '@react-three/fiber'
export default function App() {

  const [isBoard, setIsBoard] = useState([])
  const cube = useRef()
 

  return (
    <>
      <Painel setIsBoard={setIsBoard} isBoard={isBoard} />
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [- 4, 3, 6]
        }}
      >
        <OrbitControls makeDefault />

        <color attach="background" args={['#e0b7ff']} />

        <ambientLight />
      
          {isBoard.map((item, index) => {
            return (
              <>
                


                <Board
                  refe={cube}
                  key={index}
                  position={[item.position.x, item.position.y, item.position.z]}
                  rotation={[item.rotation.x, item.rotation.y, item.rotation.z]}
                  scale={[item.scale.x, item.scale.y, item.scale.z]}
                />

             
              </>
            )
          })}
          <group position-y={-1} dispose={null} position-x={-0.2}
            position-z={-2} >
            <Level />
            <Sudo />
            <Camera />
            <Cactus />
            <Icon />
            <Pyramid />







          </group> 
      </Canvas>
    </>
  )
}
