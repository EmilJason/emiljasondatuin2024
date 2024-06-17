import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const vertexShader = /* glsl */ `
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 10.0) * 0.2;
  modelPosition.x += modelPosition.x * 4.0;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}`;   
const fragmentShader = /* glsl */ `
varying vec2 vUv;

vec3 colorA = vec3(0.912,0.191,0.652);
vec3 colorB = vec3(1.000,0.777,0.052);

void main() {
  // "Normalizing" with an arbitrary value
  // We'll see a cleaner technique later :)   
  vec2 normalizedPixel = gl_FragCoord.xy/600.0;
  vec3 color = mix(colorA, colorB, normalizedPixel.x);

  gl_FragColor = vec4(color,1.0);
}
`;

const Flag = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
      <planeGeometry args={[1, 1, 32, 32]}/>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        
      />
    </mesh>
  );
};

const Plane2 = () => {
  return (
    <Canvas camera={{ position: [1.0, 1.0, 1.0] }} style={{ background: "#272727", width: '100vw', height: '100vh' }}>
      <Flag/>
      {/* <axesHelper /> */}
      <OrbitControls />
    </Canvas>
  );
};


export default Plane2;
