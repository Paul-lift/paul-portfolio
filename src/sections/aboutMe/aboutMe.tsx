import { Text } from "@react-three/drei";


type Props = {
  position: [number, number, number];
  rotation?: [number, number, number];
};

export default function AboutMe({ position, rotation = [0, 0, 0] }: Props) {
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
        Über mich
      </Text>
      <Text
        font={import.meta.env.BASE_URL + "/fonts/IBMPlexMono-Regular.ttf"}
        position={position}
        fontSize={20}
        color="#f2f2f8"
        anchorX="center"
        anchorY="middle"
        rotation={rotation}
        maxWidth={500}
        lineHeight={1.2}
      >
        Schon als Kind hat es mich fasziniert, wie Apps und technische Geräte
        funktionieren. Zuhause habe ich oft ausprobiert, kleine Programme zu
        schreiben, was mir immer grossen Spass gemacht hat. Beim Schnuppern
        wurde mir dann klar, dass ich Informatiker werden möchte. Mein Ziel ist
        es, ein tiefes Verständnis fürs Programmieren zu entwickeln und
        möglichst viele Programmiersprachen zu beherrschen. Ich möchte
        mithelfen, die digitale Zukunft aktiv mitzugestalten.
      </Text>
    </>
  );
}
