import { useGLTF } from "@react-three/drei";


useGLTF.preload(import.meta.env.BASE_URL + "/models/nebula.glb");

export default function Nebula() {
  const nebula = useGLTF(import.meta.env.BASE_URL + "/models/nebula.glb");

console.log("nebula loaded" + nebula)


  return (
    <primitive
      object={nebula.scene}
      scale={10} 
      position={[0, 0, 0]}
    />
  );
}
