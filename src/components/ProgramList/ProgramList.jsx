import { programs } from '../../consts/consts';
import Heading from '../Heading/Heading';
import Program from './Program/Program';
import { EXPLORE, PROGRAM } from './ProgramList.const';
import {
  StyledProgramList,
  StyledProgramSectionContainer,
  StyledProgramListWrapper,
  StyledProgramListContainer,
} from './ProgramList.styled';

const ProgramList = () => {
  return (
    <StyledProgramSectionContainer>
      <StyledProgramListContainer>
        <StyledProgramListWrapper>
          <Heading tag="h1" text={EXPLORE} coloredText={PROGRAM} />
          <StyledProgramList>
            {programs.map((program) => (
              <Program key={program.name} program={program} />
            ))}
          </StyledProgramList>
        </StyledProgramListWrapper>
      </StyledProgramListContainer>
    </StyledProgramSectionContainer>
  );
};

export default ProgramList;
