import PropTypes from 'prop-types';
import { StyledMenu, StyledBar } from './NavbarMenu.styled';

const NavbarMenu = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <StyledMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <StyledBar isMenuOpen={isMenuOpen} />
      <StyledBar isMenuOpen={isMenuOpen} />
      <StyledBar isMenuOpen={isMenuOpen} />
    </StyledMenu>
  );
};

NavbarMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  setIsMenuOpen: PropTypes.func,
};

export default NavbarMenu;
