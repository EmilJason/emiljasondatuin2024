import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function getColors() {
  let hexColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#00ff80', '#ff0080'];
  let getColorIndex = Math.floor(Math.random() * hexColors.length);
  return hexColors[getColorIndex];
}

function Cube(props) {
const mesh = useRef();
const [hovered, setHovered] = useState(false);
useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
})
  return (
    <mesh 
    {...props} 
    ref={mesh}
    position={[6 * Math.random(), 90 * Math.random(), 6 + Math.random()]}
    scale={hovered ? 1.5 : 1}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={ hovered ? [10, 0, 0] : [-1.5 + Math.random() * 1.5, Math.random() + 1, Math.random() * 4]} />
    </mesh>
  );
}

function Box() {
  const cubes = [];
  for (let i = 0; i < 50; i++) {
    cubes.push(<Cube key={i} position={[-1.5 + i  * 1.5, Math.random() + 4, Math.random() * 4]} />);
  }

  return (
    <Canvas camera={[1,1,1]} style={{ background: '#272727', width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <pointLight intensity={0.5} />
      <OrbitControls
        // minPolarAngle={Math.PI / 4}
        // maxPolarAngle={Math.PI / 2}
        // minAzimuthAngle={-Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4}
        minDistance={5} // Minimum distance the camera can zoom out
        maxDistance={10} // Maximum distance the camera can zoom in
      />
      {cubes}
    </Canvas>
  );
}

export default Box;
