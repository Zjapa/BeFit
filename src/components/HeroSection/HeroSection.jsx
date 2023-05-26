/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import {
  ButtonWrapper,
  HeroContainer,
  ModelSection,
  TextContent,
  Title,
  HeroSectionStyled,
} from './HeroSection.styled';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Weight from '../Weight/Weight';
import BackLight from '../Weight/BackLight';

const HeroSection = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <HeroSectionStyled>
      <HeroContainer>
        <ModelSection>
          <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={5} maxPolarAngle={Math.PI / 2} />
            <ambientLight intensity={1.2} />
            <Environment preset="city" />
            <directionalLight position={[3, 2, 2]} color="#bfff9c" />
            <group>
              <BackLight />
              <Weight position={[0, 0, 0]} scale={1.4} rotation={[0, -5, 0]} />
            </group>
          </Canvas>
        </ModelSection>
        <TextContent>
          <Title>BUDI ZDRAV & BUDI FIT</Title>
          <ButtonWrapper>
            <Button variant="primaryInvert" width="60%" onClick={() => navigateTo('/programi')}>
              IZABERI PROGRAM
            </Button>
            <Button variant="secondary" width="80%" onClick={() => navigateTo('/cenovnik')}>
              POGLEDAJTE CENOVNIK
            </Button>
          </ButtonWrapper>
        </TextContent>
      </HeroContainer>
    </HeroSectionStyled>
  );
};

HeroSection.propTypes = {};

export default HeroSection;
