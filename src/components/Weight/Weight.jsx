/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Weight = (props) => {
  const weightRef = useRef();
  const { nodes, materials } = useGLTF('50-kg_weight.glb');

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    weightRef.current.position.y = (2 + Math.cos(t / 2)) / 7;
    weightRef.current.rotation.x = Math.cos(t / 4) / 8;
    weightRef.current.rotation.y += 0.5 * delta;
    weightRef.current.rotation.z = 0.15 + Math.sin(t / 2) / 8;
  });

  return (
    <group dispose={null} {...props} ref={weightRef}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.DefaultMaterial}
        material-roughness={1}
        castShadow
      >
        {/* <meshStandardMaterial color="red" /> */}
      </mesh>

      <mesh
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.DefaultMaterial}
        material-roughness={1}
        castShadow
        receiveShadow
      ></mesh>
    </group>
  );
};

export default Weight;
