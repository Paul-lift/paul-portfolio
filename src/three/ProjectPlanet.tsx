import Planet from "./Planet";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";

export default function ProjectPlanet({ project }) {
  const { camera } = useThree();
  const [clicked, setClicked] = useState(false);
  const targetPosition = useRef(new THREE.Vector3(...project.position));

  useFrame(() => {
    if (clicked) {
      camera.position.lerp(
        new THREE.Vector3(
          project.position[0],
          project.position[1],
          project.position[2] + 20
        ),
        0.05
      );
      camera.lookAt(targetPosition.current);
    }
  });

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <group>
      <Planet
        path={project.model}
        scale={project.scale}
        position={project.position}
        onClick={handleClick}
      />

      {/* Project Info Panel */}
      {clicked && (
        <Html position={project.position} distanceFactor={10}>
          <div
            style={{
              color: "white",
              background: "rgba(0,0,0,0.6)",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Anbieter:</strong> {project.projectProvider}
            </p>
            <p>
              <strong>Zeitraum:</strong> {project.date}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}
