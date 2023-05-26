import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import { Amount, DescItem, Description, Line, PlanItemContainer, Price, Type } from './PlanItem.styled';
import { ColoredText } from '../../Heading/Heading.styled';
import { useNavigate } from 'react-router-dom';

const PlanItem = ({ plan, isFromCenovnik }) => {
  const { amount, heading, description, subHeading } = plan;

  const navigate = useNavigate();

  const navigateTo = (path) => [navigate(path)];
  return (
    <PlanItemContainer>
      <Heading tag="h2" text={heading} />
      <Price>
        <Amount>{amount}</Amount>
        <Type>
          RSD / <ColoredText>{subHeading}</ColoredText>
        </Type>
      </Price>
      <Line />
      <Description>
        {description.map((item) => (
          <DescItem key={item}>{item}</DescItem>
        ))}
      </Description>
      {!isFromCenovnik && (
        <Button variant="primaryInvert" width="100%" onClick={() => navigateTo('/cenovnik')}>
          PRIJAVI SE
        </Button>
      )}
    </PlanItemContainer>
  );
};

PlanItem.propTypes = {
  plan: PropTypes.arrayOf({}),
  isFromCenovnik: PropTypes.bool,
};
export default PlanItem;
