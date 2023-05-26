/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';

const Weight = (props) => {
  const { nodes, materials } = useGLTF('50-kg_weight.glb');

  return (
    <group dispose={null} {...props}>
      <mesh
        castShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials.DefaultMaterial}
        material-roughness={1}
      >
        {/* <meshStandardMaterial color="red" /> */}
      </mesh>

      <mesh
        castShadow
        geometry={nodes.defaultMaterial_1.geometry}
        material={materials.DefaultMaterial}
        material-roughness={1}
      ></mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default Weight;
