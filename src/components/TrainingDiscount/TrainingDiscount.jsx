import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { TERETANI, POGLEDAJTE_PONUDU, DOSTIGNITE, UPLATITE_UNAPRED, POPUST33 } from './TrainingDiscount.const';
import {
  ButtonWrapper,
  StyledTrainingDiscountContainer,
  StyledTrainingDiscountWrapper,
  StyledTrainingDiscountContent,
  StyledTrainingDiscountDesc,
  StyledTrainingDiscountimageContainer,
  HLine,
} from './TrainingDiscount.styled';
import PropTypes from 'prop-types';

const TrainingDiscount = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <StyledTrainingDiscountContainer>
      <StyledTrainingDiscountWrapper>
        <StyledTrainingDiscountimageContainer></StyledTrainingDiscountimageContainer>
        <StyledTrainingDiscountContent>
          <Heading tag="h1" text={DOSTIGNITE} coloredText={TERETANI} />

          <StyledTrainingDiscountDesc>
            <Heading tag="p" text={UPLATITE_UNAPRED} lineHeight="30px" margins={{ mb: '20px' }} />
          </StyledTrainingDiscountDesc>

          <ButtonWrapper>
            <Heading tag="h4" coloredText={POPUST33} />
            <HLine />
            <Button variant="secondary" onClick={() => navigateTo('/cenovnik')}>
              {POGLEDAJTE_PONUDU}
            </Button>
          </ButtonWrapper>
        </StyledTrainingDiscountContent>
      </StyledTrainingDiscountWrapper>
    </StyledTrainingDiscountContainer>
  );
};

TrainingDiscount.propTypes = {
  reverse: PropTypes.bool,
};
export default TrainingDiscount;
