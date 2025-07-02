import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import StartPage from "../sections/startPage/startPage";
import AboutMe from "../sections/aboutMe/aboutMe";
import Projects from "../sections/projects/projects";

export default function ScrollScene() {
  const scroll = useScroll();
  const { camera } = useThree();

  const camTarget = useRef(new THREE.Vector3());

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 1000), // startPage

    new THREE.Vector3(-200, 150, 1000),
    new THREE.Vector3(-400, 300, 1000), // aboutMe path

    new THREE.Vector3(-600, 300, 500),
    new THREE.Vector3(-775, 300, -100), // aboutMe

    new THREE.Vector3(-750, 100, -50),
    new THREE.Vector3(-700, -200, 0),
    new THREE.Vector3(0, -200, -700),
    new THREE.Vector3(700, 0, 0),
    new THREE.Vector3(800, 100, 300), //project path
  ]);

  useFrame(() => {
    const offset = scroll.offset; //number between 0 and 1 based on scroll progress

    const point = curve.getPoint(offset); // position on curve

    const x = Math.sin(offset * Math.PI * 2) * 200;
    const y = Math.cos(offset * Math.PI * 2) * 100;
    const z = 500 - offset * 1000;

    camTarget.current.set(x, y, z);

    camera.position.lerp(point, 0.1);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <StartPage position={[0, 0, 700]}></StartPage>
      <AboutMe
        position={[-500, 150, 0]}
        rotation={[0, Math.PI / -2, 0]}
      ></AboutMe>
      <Projects position={[0, 0, 0]} rotation={[0, 0, 0]}></Projects>
    </>
  );
}
