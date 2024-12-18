import PropTypes from "prop-types";
import { StyledInput } from "./Input.styled";

const Input = ({ type, name, required, placeholder, onChange, value }) => {
  return (
    <StyledInput
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
