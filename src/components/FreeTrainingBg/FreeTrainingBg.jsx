import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { BESPLATAN, ODMAH_CTA, PRIJAVITE_SE, TRENING, KOD_NAS, POSTANITE } from './FreeTrainingBg.const';
import FreeTrainingImg from '../../assets/images/FreeTrainingBG2.jpg';
import {
  ButtonWrapper,
  StyledFreeTrainingBgContainer,
  StyledFreeTrainingBgWrapper,
  StyledFTContent,
  StyledFTDesc,
} from './FreeTrainingBg.styled';
import PropTypes from 'prop-types';

const FreeTrainingBg = () => {
  return (
    <StyledFreeTrainingBgContainer bg={FreeTrainingImg}>
      <StyledFreeTrainingBgWrapper>
        <StyledFTContent>
          <Heading tag="h1" text={BESPLATAN} coloredText={TRENING} />

          <StyledFTDesc>
            <Heading tag="p" text={KOD_NAS} lineHeight="30px" margins={{ mb: '20px' }} />
            <Heading tag="p" text={PRIJAVITE_SE} lineHeight="30px" margins={{ mb: '20px' }} />
            <Heading tag="p" text={POSTANITE} lineHeight="30px" />
          </StyledFTDesc>

          <ButtonWrapper>
            <Button variant="primaryInvert" width="100%">
              {ODMAH_CTA}
            </Button>
          </ButtonWrapper>
        </StyledFTContent>
      </StyledFreeTrainingBgWrapper>
    </StyledFreeTrainingBgContainer>
  );
};

FreeTrainingBg.propTypes = {
  reverse: PropTypes.bool,
};
export default FreeTrainingBg;
