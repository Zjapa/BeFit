/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Shoe = (props) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('nike_air_zoom_pegasus_36.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8);
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });
  return (
    <group ref={ref}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.NikeShoe}
        {...props}
      />
    </group>
  );
};

export default Shoe;
