import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Room() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[4, 3, 4]} /> 
      <meshStandardMaterial color="#e0e0e0" />
    </mesh>
  );
}

function DynamicLights() {
  const [lights] = useState(() => [
    { position: [4, 4, 4], color: '#ff8f00' },
    { position: [-4, 3, -4], color: '#4fc3f7' },
    { position: [0, 5, 0], color: '#f5f5f5' }
  ]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <hemisphereLight intensity={0.3} groundColor={new THREE.Color("#ff8f00")} />
      
      {lights.map((light, index) => (
        <pointLight
          key={index}
          position={light.position}
          intensity={1}
          color={light.color}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      ))}
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ position: [8, 8, 8], fov: 75 }}
      >
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minDistance={5}
          maxDistance={20}
          target={[0, 0, 0]}
        />
        <Room />
        <DynamicLights />
        <color attach="background" args={['#f0f0f0']} />
        
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#f0f0f0" />
        </mesh>
      </Canvas>
    </div>
  );
}
