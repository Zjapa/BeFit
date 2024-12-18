/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import {
  ButtonWrapper,
  HeroContainer,
  ModelSection,
  TextContent,
  Title,
  HeroSectionStyled,
} from "./HeroSection.styled";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Weight from "../Weight/Weight";
import { Suspense } from "react";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <HeroSectionStyled>
      <HeroContainer>
        <ModelSection>
          <Suspense fallback={null}>
            <Canvas shadows gl={{ preserveDrawingBuffer: true }}>
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <ambientLight intensity={1.2} />
              <Environment preset="city" />
              <directionalLight position={[3, 10, 2]} color="#bfff9c" />
              <ContactShadows
                position={[0, -2, 0]}
                blur={1}
                resolution={512}
                scale={20}
                opacity={0.5}
              />

              <Weight position={[0, 0, 0]} scale={1.4} rotation={[0, -5, 0]} />
            </Canvas>
          </Suspense>
        </ModelSection>
        <TextContent>
          <Title>BUDI ZDRAV & BUDI FIT</Title>
          <ButtonWrapper>
            <Button
              variant="primaryInvert"
              width="60%"
              onClick={() => navigateTo("/programi")}
            >
              IZABERI PROGRAM
            </Button>
            <Button
              variant="secondary"
              width="80%"
              onClick={() => navigateTo("/cenovnik")}
            >
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
