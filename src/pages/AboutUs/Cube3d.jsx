/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Register the OrbitControls plugin with three-fiber
// extend({ OrbitControls });

function WeightModel(props) {
  // This reference will give us direct access to the mesh
  const gltf = useLoader(GLTFLoader, 'models/treadmill/scene.gltf');
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.01));
  // Return the 3D model loaded from the specified glTF file
  return (
    <mesh ref={meshRef} {...props}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

// function CameraControls() {
//   // Get a reference to the three.js camera and canvas elements
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();

//   // Attach the OrbitControls to the camera element
//   const controlsRef = useRef();
//   useFrame(() => controlsRef.current.update());

//   return <orbitControls ref={controlsRef} args={[camera, domElement]} />;
// }

function Cube() {
  // Load the weight model using the GLTFLoader

  // Return a canvas with a 3D scene containing the weight model and camera controls
  return (
    <Canvas>
      <ambientLight intensity={0.9} />
      <spotLight intensity={0.8} position={[300, 500, 400]} />
      <WeightModel />
      {/* <CameraControls /> */}
    </Canvas>
  );
}

export default Cube;
