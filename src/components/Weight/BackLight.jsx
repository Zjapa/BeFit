/* eslint-disable react/no-unknown-property */

const BackLight = () => {
  return (
    <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024} shadow-radius={100}>
      <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0, 50]} />
    </directionalLight>
  );
};

export default BackLight;
