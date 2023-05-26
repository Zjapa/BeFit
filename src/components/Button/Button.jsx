import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ variant = 'primary', width = '100%', children, onClick, ...otherProps }) => {
  return (
    <StyledButton variant={variant} width={width} onClick={onClick} {...otherProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
  width: PropTypes.string,
  goTo: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
