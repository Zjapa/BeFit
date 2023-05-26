// import PropTypes from 'prop-types';
import { navItems } from './NavConst';

import { NavigationItems, StyledNavbar } from './Navbar.styled';

import NavItem from './NavItem/NavItem';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledNavbar>
      <NavigationItems isMenuOpen={isMenuOpen}>
        {navItems.map((navItem) => (
          <NavItem key={navItem.name} path={navItem.path} name={navItem.name} />
        ))}
      </NavigationItems>

      <NavbarMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </StyledNavbar>
  );
};

Navbar.propTypes = {};

export default Navbar;
