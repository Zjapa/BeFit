/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { TERETANI, POGLEDAJTE_PONUDU, DOSTIGNITE, UPLATITE_UNAPRED, POPUST33 } from './TrainingDiscount.const';
import FreeTrainingImg from '../../assets/images/FreeTrainingBG2.jpg';
import {
  StyledTrainingDiscountContainer,
  StyledTrainingDiscountWrapper,
  StyledTrainingDiscountContent,
} from './TrainingDiscount.styled';
import PropTypes from 'prop-types';

const TrainingDiscount = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <StyledTrainingDiscountContainer bg={FreeTrainingImg}>
      <StyledTrainingDiscountWrapper>
        <StyledTrainingDiscountContent>
          <Heading tag="h1" text={DOSTIGNITE} coloredText={TERETANI} margins={{ mb: '40px' }} />

          <Heading tag="p" text={UPLATITE_UNAPRED} lineHeight="30px" margins={{ mb: '40px' }} />
          <Heading tag="h4" coloredText={POPUST33} margins={{ mb: '40px' }} />

          <Button variant="primaryInvert" width="40%" onClick={() => navigateTo('/cenovnik')}>
            {POGLEDAJTE_PONUDU}
          </Button>
        </StyledTrainingDiscountContent>
      </StyledTrainingDiscountWrapper>
    </StyledTrainingDiscountContainer>
  );
};

TrainingDiscount.propTypes = {
  reverse: PropTypes.bool,
};
export default TrainingDiscount;
