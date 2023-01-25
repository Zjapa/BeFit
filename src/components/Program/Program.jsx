import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { StyledProgram, StyledProgramContent, StyledProgramDesc, StyledProgramName } from './Program.styled';

const Program = ({ program }) => {
  const { name, desc, Icon } = program;
  const {
    colors: { green },
  } = useContext(ThemeContext);

  return (
    <StyledProgram>
      <Icon
        fill={green}
        style={{ minHeight: '30px', minWidth: '40px', marginTop: '10px', marginRight: '10px' }}
        // preserveAspectRatio="none"
      />
      <StyledProgramContent>
        <StyledProgramName>{name}</StyledProgramName>
        <StyledProgramDesc>{desc}</StyledProgramDesc>
      </StyledProgramContent>
    </StyledProgram>
  );
};

export default Program;

Program.propTypes = {
  program: PropTypes.object,
};
