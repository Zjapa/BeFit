import { StyledHeading, ColoredText } from './Heading.styled';
import PropTypes from 'prop-types';

const Heading = ({
  children,
  tag,
  text,
  coloredText,
  weight,
  lineHeight,
  margins,
  align,
  Icon,
  onClick,
  ...otherProps
}) => {
  return (
    <StyledHeading
      as={tag}
      weight={weight}
      lineHeight={lineHeight}
      margins={margins}
      align={align}
      onClick={onClick}
      {...otherProps}
    >
      {children ? (
        children
      ) : (
        <>
          {Icon && <Icon />}
          {text} <ColoredText>{coloredText}</ColoredText>
        </>
      )}
    </StyledHeading>
  );
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.any,
  tag: PropTypes.string,
  text: PropTypes.string,
  coloredText: PropTypes.string,
  weight: PropTypes.string,
  lineHeight: PropTypes.string,
  margins: PropTypes.object,
  align: PropTypes.string,
  Icon: PropTypes.func,
  onClick: PropTypes.func,
};
