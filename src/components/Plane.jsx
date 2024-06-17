import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color } from "three";

// fragment shader
const fragmentShader = /* glsl */`
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;

void main() {
  vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5); 
  gl_FragColor = vec4(color, 1.0);
}
`;
// end - frangment shader

// vertex shader
const vertexShader = /* glsl */`
uniform float u_time;
varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.y += sin(modelPosition.x * 10.0 + u_time * 1.0) * 0.2;
  modelPosition.y += sin(modelPosition.z * 16.0 + u_time * 2.0) * 0.1;
  
  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
`;
// end - vertex shader

const MovingPlane = () => {
    // This reference will give us direct access to the mesh
    const mesh = useRef();
  
    const uniforms = useMemo(
      () => ({
        u_time: {
          value: 0.0,
        },
        u_colorA: { value: new Color("#0E46A3") },
        u_colorB: { value: new Color("#9AC8CD") },
      }), []
    );
  
    useFrame((state) => {
      const { clock } = state;
      mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    });
  
    return (
      <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <planeGeometry args={[5, 5, 16, 16]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe={false}
        />
      </mesh>
    );
  };
  
  const Plane = () => {
    return (
      <Canvas camera={{ position: [1.0, 1.0, 1.0] }} style={{ background: '#272727', width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <OrbitControls />
        <MovingPlane />
      </Canvas>
    );
  };
  
  
  export default Plane;
  
  