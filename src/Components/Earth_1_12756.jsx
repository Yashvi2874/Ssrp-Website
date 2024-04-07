import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";

function useMouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

export function Model(props) {
  const { nodes, materials } = useGLTF('./models/Earth_1_12756.glb')
  const mesh = useRef();
  const { x, y } = useMouseMove();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = y * 0.01;
      mesh.current.rotation.y = x * 0.01;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh ref={mesh} geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
    </group>
  );
}

useGLTF.preload('./models/Earth_1_12756.glb');