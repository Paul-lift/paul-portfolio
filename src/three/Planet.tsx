import { useGLTF } from "@react-three/drei";
useGLTF.preload(import.meta.env.BASE_URL + "/models/planet.glb");

export default function Planet() {
  const planet = useGLTF(import.meta.env.BASE_URL + "/models/planet.glb");
  console.log("Planet loaded:", planet);

  return (
    <primitive
      object={planet.scene}
      scale={2.5}
      position={[0, 0, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}
