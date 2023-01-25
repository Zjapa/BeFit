import { StyledHeading, ColoredText } from './Heading.styled';
import PropTypes from 'prop-types';

const Heading = ({ children, tag, text, coloredText, weight }) => {
  return (
    <StyledHeading as={tag} weight={weight}>
      {children ? (
        children
      ) : (
        <>
          {text} <ColoredText>{coloredText}</ColoredText>
        </>
      )}
    </StyledHeading>
  );
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.oneOf(PropTypes.string, PropTypes.element),
  tag: PropTypes.string,
  text: PropTypes.string,
  coloredText: PropTypes.string,
  weight: PropTypes.string,
};
