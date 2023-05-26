import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { StyledProgram, StyledProgramContent } from './Program.styled';
import Heading from '../../Heading/Heading';

const Program = ({ program }) => {
  const { name, desc, Icon } = program;
  const {
    colors: { green },
  } = useContext(ThemeContext);

  return (
    <StyledProgram>
      <Icon
        fill={green}
        style={{ minHeight: '30px', minWidth: '40px', marginTop: '5px', marginRight: '10px' }}
        // preserveAspectRatio="none"
      />
      <StyledProgramContent>
        <Heading tag="h2" text={name} margins={{ mb: '5px' }} />
        <Heading tag="p" text={desc} />
      </StyledProgramContent>
    </StyledProgram>
  );
};

export default Program;

Program.propTypes = {
  program: PropTypes.object,
};
