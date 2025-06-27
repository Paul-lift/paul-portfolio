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
    setTimeout(typeWriter, 600);
  }, []);

  const [scrollText, setScrollText] = useState("");
  const [fullscreenText, setFullscreenText] = useState("");

  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    // Scroll Text
    let iterations1 = 0;
    const interval1 = setInterval(() => {
      setScrollText(() =>
        "Scrolle um mehr über mich zu erfahren"
          .split("")
          .map((char, i) => {
            if (i < iterations1) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iterations1 += 1 / 3;
      if (iterations1 >= "Scrolle um mehr über mich zu erfahren".length)
        clearInterval(interval1);
    }, 10);

    let iterations2 = 0;
    const interval2 = setInterval(() => {
      setFullscreenText(() =>
        'Drück "f" für ein immersives Fullscreen-Erlebnis'
          .split("")
          .map((char, i) => {
            if (i < iterations2) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iterations2 += 1 / 3;
      if (
        iterations2 >= 'Drück "f" für ein immersives Fullscreen-Erlebnis'.length
      )
        clearInterval(interval2);
    }, 10);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
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
        {scrollText}
      </Text>

      <Text
        font={import.meta.env.BASE_URL + "/fonts/IBMPlexMono-Regular.ttf"}
        position={[position[0], position[1] - 75, position[2]]}
        fontSize={15}
        color="#f2f2f8"
        anchorX="center"
        anchorY="middle"
      >
        {fullscreenText}
      </Text>
    </>
  );
}
