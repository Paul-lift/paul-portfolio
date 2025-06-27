import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, AdditiveBlending } from "three";
import { useRef } from "react";
import * as THREE from "three";

const COUNT = 20;

export default function FloatingNebula() {
  const texture = useLoader(TextureLoader, import.meta.env.BASE_URL + "/textures/pinkClouds.jpg");
  const group = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    group.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      mesh.position.z += delta * 0.5;
      if (mesh.position.z > 50) {
        mesh.position.z = -50;
      }
      mesh.rotation.z += delta * 0.02;
    });
  });

  const nebulaElements = Array.from({ length: COUNT }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        Math.random() * -100,
      ]}
      rotation={[0, 0, Math.random() * Math.PI * 2]}
    >
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.15}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  ));

  return <group ref={group}>{nebulaElements}</group>;
}
