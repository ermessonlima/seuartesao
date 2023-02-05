import { PivotControls } from '@react-three/drei'
import * as THREE from 'three'

export default function Board({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale,
  refe
}) {



 
  const geometry = new THREE.BoxGeometry(scale[0], scale[1], scale[2])
  const material = new THREE.MeshBasicMaterial({ color: 0xec6e13 })

  return (
    <>
       <PivotControls
            anchor={ [ 0, 0, 0 ] }
            depthTest={ false }
            lineWidth={ 4 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ] }
            scale={ 50 }
            fixed={ true }
        >
      <mesh
        geometry={geometry} position={position} rotation={rotation}
        material={material}
        ref={refe}
      />
</PivotControls>
    </>
  )
}
