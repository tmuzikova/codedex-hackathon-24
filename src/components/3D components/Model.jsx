import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ path, scale }) => {
  const { scene } = useGLTF(path, true);

  useEffect(() => {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.material.roughness = 0.5;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={scale} />;
};

export default Model;
