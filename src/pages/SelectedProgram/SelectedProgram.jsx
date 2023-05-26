import { useEffect } from 'react';
import { MarginContainer } from '../../styles/commonStyles.styled';
import FreeTrainingBg from '../../components/FreeTrainingBg/FreeTrainingBg';
import { StyledSelectedProgramCardsWrapper, StyledSelectedProgramContainer } from './SelectedProgram.styled';
import Heading from '../../components/Heading/Heading';
import { useLocation } from 'react-router-dom';
import { allTrainingPrograms } from '../Programs/Programs.const';

const SelectedProgram = () => {
  const location = useLocation();
  const { desc, title, name } = allTrainingPrograms.find((program) => location?.pathname?.includes(program?.path));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <StyledSelectedProgramContainer>
        <StyledSelectedProgramCardsWrapper>
          <Heading tag="h1" text={name} margins={{ mb: '100px' }} align="center" />
          <Heading tag="h3" coloredText={title} margins={{ mb: '10px' }} align="center" />
          <Heading tag="p" text={desc} margins={{ mb: '60px' }} align="center" />
        </StyledSelectedProgramCardsWrapper>
      </StyledSelectedProgramContainer>
      <FreeTrainingBg />
    </MarginContainer>
  );
};

SelectedProgram.propTypes = {};

export default SelectedProgram;
