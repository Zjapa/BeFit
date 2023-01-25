import Heading from '../Heading/Heading';
import { BESPLATAN, ODMAH_CTA, PRIJAVITE_SE, TRENING, KOD_NAS } from './FreeTraining.const';
import {
  StyledFreeTrainingContainer,
  StyledFreeTrainingWrapper,
  StyledFTContent,
  StyledFTimageContainer,
} from './FreeTraining.styled';

const FreeTraining = () => {
  return (
    <StyledFreeTrainingContainer>
      <StyledFreeTrainingWrapper>
        <StyledFTContent>
          <Heading tag="h1" text={BESPLATAN} coloredText={TRENING} />
          <Heading tag="p" text={KOD_NAS} />
          <Heading tag="p" text={PRIJAVITE_SE} />
          <button>{ODMAH_CTA}</button>
        </StyledFTContent>
        <StyledFTimageContainer></StyledFTimageContainer>
      </StyledFreeTrainingWrapper>
    </StyledFreeTrainingContainer>
  );
};

export default FreeTraining;
