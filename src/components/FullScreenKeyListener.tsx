import { useEffect } from "react";

export default function FullscreenKeyListener() {

  useEffect(() => {
    const handleKeydown = (e: any) => {
      if (e.key === "f") {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return null; // Diese Komponente rendert nichts, nur der Listener ist aktiv
}
