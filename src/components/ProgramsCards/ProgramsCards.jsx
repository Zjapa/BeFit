import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import { programsCards, PROGRAMI, PROGRAMI_DESC } from './ProgramsCards.const';
import { ProgramsCardsItems, StyledProgramsCardsContainer, StyledProgramsCardsWrapper } from './ProgramsCards.styled';
import ProgramsCardsItem from './ProgramsCardsItem/ProgramsCardsIItem';

const ProgramCards = () => {
  return (
    <StyledProgramsCardsContainer>
      <StyledProgramsCardsWrapper>
        <Heading tag="h1" text={PROGRAMI} margins={{ mb: '10px' }} align="center" />
        <Heading tag="p" text={PROGRAMI_DESC} margins={{ mb: '60px' }} align="center" />

        <ProgramsCardsItems>
          {programsCards.map((program) => (
            <ProgramsCardsItem key={program.name} program={program} />
          ))}
        </ProgramsCardsItems>
      </StyledProgramsCardsWrapper>
    </StyledProgramsCardsContainer>
  );
};

ProgramCards.propTypes = {
  plan: PropTypes.arrayOf({}),
};

export default ProgramCards;
