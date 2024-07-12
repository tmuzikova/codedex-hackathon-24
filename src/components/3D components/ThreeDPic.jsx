import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export const ThreeDPic = ({
  path,
  size,
  position = [5, 5, 5],
  fov = 60,
  height = "500px",
}) => {
  return (
    <Canvas style={{ height }} camera={{ position, fov }}>
      <ambientLight intensity={2.0} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#444444"}
        intensity={2.0}
      />
      <Model path={path} scale={size} />
      <OrbitControls />
    </Canvas>
  );
};
