import { useEffect, useState } from "react";

export default function DecodeText({ text = "", speed = 50 }) {
  const [displayedText, setDisplayedText] = useState("");
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayedText(() => {
        const result = text
          .split("")
          .map((char: any, i: any) => {
            if (i < iterations) return char;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");

        return result;
      });

      iterations += 1 / 3; // Geschwindigkeit des Enthüllens

      if (iterations >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
}
