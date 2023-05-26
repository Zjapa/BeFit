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
  StyledFTimageContainer,
} from './FreeTraining.styled';
import PropTypes from 'prop-types';

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
        <StyledFTimageContainer></StyledFTimageContainer>
      </StyledFreeTrainingWrapper>
    </StyledFreeTrainingContainer>
  );
};

FreeTraining.propTypes = {
  reverse: PropTypes.bool,
};
export default FreeTraining;
