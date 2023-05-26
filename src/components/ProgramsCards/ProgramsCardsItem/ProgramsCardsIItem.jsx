import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';
import { ButtonWrapper, CardContainer, CardContent, StyledTitle } from './ProgramsCardsItem.styled';
import { useNavigate } from 'react-router-dom';

const ProgramsCardsItem = ({ program }) => {
  const { name, desc, bg, path } = program;
  const navigate = useNavigate();

  const goToSelectedProgram = () => {
    navigate(`/programi/${path}`, { state: { name } });
  };

  return (
    <CardContainer bg={bg}>
      <CardContent>
        <StyledTitle>
          <Heading tag="h2" text={name.toUpperCase()} />
        </StyledTitle>
        <Heading tag="p" text={desc} margins={{ mb: '30px' }} />
        <ButtonWrapper>
          <Button variant="primaryInvert" width="100%" onClick={goToSelectedProgram}>
            PROCITAJ VISE
          </Button>
        </ButtonWrapper>
      </CardContent>
    </CardContainer>
  );
};

ProgramsCardsItem.propTypes = {
  program: PropTypes.object,
  bg: PropTypes.node,
};

export default ProgramsCardsItem;
