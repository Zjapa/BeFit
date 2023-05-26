import PropTypes from 'prop-types';
import { StyledInput } from './Input.styled';

const Input = ({ type, name, required, placeholder }) => {
  return <StyledInput type={type} name={name} required={required} placeholder={placeholder} />;
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
