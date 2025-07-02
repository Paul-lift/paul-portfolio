import { useGLTF } from "@react-three/drei";

export default function Planet({
  path = "/models/planets/planet.glb",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  const fullPath = import.meta.env.BASE_URL + path;
  const { scene } = useGLTF(fullPath);

  // Preload
  useGLTF.preload(fullPath);

  return (
    <primitive
      object={scene}
      scale={100}
      position={position}
      rotation={rotation}
    />
  );
}
