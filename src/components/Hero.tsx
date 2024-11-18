"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Hero() {
  const { nodes, materials } = useGLTF("/3d/cube.glb");

  return (
    <Canvas>
      {/* <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial />
      </mesh> */}
      <mesh castShadow receiveShadow geometry={nodes.Cube1.geometry} material={materials.Material__V2} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
    </Canvas>
  );
}

useGLTF.preload("/3d/cube.glb");
