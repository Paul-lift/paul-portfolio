import { Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function SectionText({
  position,
}: {
  position: [number, number, number];
}) {
  const texts = [
    "ich bin Paul",
    "ich bin Informatiker",
    "ich bin im ersten Lehrjahr",
  ];

  const [displayText, setDisplayText] = useState("");

  const currentText = useRef(0);
  const currentChar = useRef(0);

  function typeWriter() {
    if (currentChar.current <= texts[currentText.current].length) {
      setDisplayText(
        texts[currentText.current].substring(0, currentChar.current)
      );
      currentChar.current++;
      setTimeout(typeWriter, 150);
    } else {
      setTimeout(deleteText, 2500);
    }
  }

  function deleteText() {
    if (currentChar.current !== 0) {
      currentChar.current--;
      setDisplayText(
        texts[currentText.current].substring(0, currentChar.current)
      );
      setTimeout(deleteText, 100);
    } else {
      currentText.current = (currentText.current + 1) % texts.length;
      setTimeout(typeWriter, 300);
    }
  }

  useEffect(() => {
    setTimeout(typeWriter, 600)
  }, []);

  return (
    <>
      <Text
        font={import.meta.env.BASE_URL + "/fonts/IBMPlexMono-Regular.ttf"}
        position={position}
        fontSize={35}
        color="#f2f2f8"
        anchorX="center"
        anchorY="middle"
      >
        {"Hi, " + displayText + "|"}
      </Text>

      <Text
        font={import.meta.env.BASE_URL + "/fonts/IBMPlexMono-Regular.ttf"}
        position={[position[0], position[1] - 50, position[2]]}
        fontSize={15}
        color="#f2f2f8"
        anchorX="center"
        anchorY="middle"
      >
        Scrolle um mehr über mich zu erfahren
      </Text>
    </>
  );
}
