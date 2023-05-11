import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { Model } from './Dance'
 

export default function Interface() {
  return (
    <>
  <OrbitControls/>
  <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
  <Model/>
  <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  )
}
