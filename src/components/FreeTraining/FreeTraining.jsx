/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { BESPLATAN, ODMAH_CTA, PRIJAVITE_SE, TRENING, KOD_NAS, POSTANITE } from './FreeTraining.const';
import {
  ButtonWrapper,
  StyledFreeTrainingContainer,
  StyledFreeTrainingWrapper,
  StyledFTContent,
  StyledFTDesc,
  StyledFTModel,
} from './FreeTraining.styled';
import PropTypes from 'prop-types';

import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment } from '@react-three/drei';
import Shoe from '../Shoe/Shoe';

const FreeTraining = ({ reverse }) => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <StyledFreeTrainingContainer>
      <StyledFreeTrainingWrapper reverse={reverse}>
        <StyledFTContent>
          <Heading tag="h1" text={BESPLATAN} coloredText={TRENING} />

          <StyledFTDesc>
            <Heading tag="p" text={KOD_NAS} lineHeight="30px" margins={{ mb: '20px' }} />
            <Heading tag="p" text={PRIJAVITE_SE} lineHeight="30px" margins={{ mb: '20px' }} />
            <Heading tag="p" text={POSTANITE} lineHeight="30px" />
          </StyledFTDesc>

          <ButtonWrapper>
            <Button variant="secondary" width="100%" onClick={() => navigateTo('/kontakt')}>
              {ODMAH_CTA}
            </Button>
          </ButtonWrapper>
        </StyledFTContent>
        <StyledFTModel>
          <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40, zoom: 1 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
            <directionalLight position={[3, 2, 2]} color="#bfff9c" />
            <Environment preset="city" blur={1} />
            <ContactShadows resolution={512} position={[0, -0.8, 0]} opacity={1} scale={10} blur={2} far={0.8} />

            <Shoe rotation={[0.3, Math.PI / 1.6, 0]} />
          </Canvas>
        </StyledFTModel>
      </StyledFreeTrainingWrapper>
    </StyledFreeTrainingContainer>
  );
};

FreeTraining.propTypes = {
  reverse: PropTypes.bool,
};
export default FreeTraining;
