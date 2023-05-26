import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Heading from '../../Heading/Heading';
import { StyledNavItem } from './NavItem.styled';

const NavItem = ({ path, name }) => {
  return (
    <StyledNavItem>
      <NavLink to={path}>
        <Heading tag="h4" text={name} />
      </NavLink>
    </StyledNavItem>
  );
};

NavItem.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

export default NavItem;
