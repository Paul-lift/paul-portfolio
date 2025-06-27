import { useGLTF } from "@react-three/drei";
useGLTF.preload(import.meta.env.BASE_URL + "/models/galaxy.glb");

export default function Planet() {
  const galaxy = useGLTF(import.meta.env.BASE_URL + "/models/galaxy.glb");
  console.log("Galaxy loaded:", galaxy);


  return (
    <primitive
      object={galaxy.scene}
      scale={200}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}
