// import PropTypes from 'prop-types';
import { useEffect } from 'react';
// import Heading from '../../components/Heading/Heading';
import ProgramsCards from '../../components/ProgramsCards/ProgramsCards';
import { MarginContainer } from '../../styles/commonStyles.styled';
import FreeTrainingBg from '../../components/FreeTrainingBg/FreeTrainingBg';
// import { BEFIT_JE_SKUP, BEFIT_ZAMISLJEN, NAŠI, PROGRAMI } from './Programs.const';
// import { ProgramsContent, StyledProgramsWrapper } from './Programs.styled';

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <ProgramsCards />
      <FreeTrainingBg />
    </MarginContainer>
  );
};

Programs.propTypes = {};

export default Programs;
