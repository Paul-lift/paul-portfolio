import { Text } from "@react-three/drei";

type Props = {
  position: [number, number, number];
  rotation?: [number, number, number];
};

export default function Projects({ position, rotation = [0, 0, 0] }: Props) {
  return (
    <>
      <Text
        font={import.meta.env.BASE_URL + "/fonts/IBMPlexMono-Regular.ttf"}
        position={[position[0], position[1] + 175, position[2] - 55]}
        fontSize={35}
        color="#f2f2f8"
        anchorX="right"
        anchorY="top-baseline"
        rotation={rotation}
      >
        Projekte
      </Text>
    </>
  );
}
