import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";
import ScrollScene from "./ScrollScene";

export default function GalaxyScene() {
  const sparkleCount = 3000;
  const sparkleScale = 2000;
  const sparkleSize = 200;
  const sparkleSpeed = 10;

  return (
    <Canvas
      camera={{ position: [0, 0, 1000], fov: 70 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      

      <Suspense fallback={null}>
        <ScrollControls pages={3} damping={0.25}>
          <ScrollScene />
        </ScrollControls>
        <Stars
          radius={200}
          depth={50}
          count={30000}
          factor={5}
          saturation={1}
          fade
          speed={1}
        />
        <Sparkles
          count={sparkleCount}
          scale={sparkleScale}
          size={sparkleSize}
          speed={sparkleSpeed}
          color={"#8f00ff"}
        />
        <Sparkles
          count={sparkleCount}
          scale={sparkleScale}
          size={sparkleSize}
          speed={sparkleSpeed}
          color={"#ff3cac"}
        />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
      </Suspense>
    </Canvas>
  );
}
