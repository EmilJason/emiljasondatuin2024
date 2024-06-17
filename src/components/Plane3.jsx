import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react"
import { Canvas } from "react-three-fiber"

const Plane = () => {

    const plane = useRef();
    console.log(plane.current)
    
    // plane.current.attributes.position.array.map(index => {
    //     plane.current.attributes.position.array[index] = Math.random() * 2
    //     plane.current.attributes.position.array[index + 1] = Math.random() * 1
    //     plane.current.attributes.position.array[index + 2] = Math.random() * 5
    // })

    return(
        <mesh>
        {/* <planeGeometry ref={plane} args={[5, 5, 16, 16]} /> */}
        <boxGeometry />
        <meshBasicMaterial />
        <Environment preset="forest" />
        </mesh>
    )
}

const Plane3 = () => {
  return (
    <Canvas camera={{ position: [1.0, 1.0, 1.0] }} style={{ background: '#272727', width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
    <OrbitControls />
    <Plane />
    </Canvas>
  )
}

export default Plane3
