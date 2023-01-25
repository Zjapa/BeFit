import {
  StyledHeader,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledList,
  StyledListItem,
  StyledLogo,
  StyledNav,
} from './Header.styled';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeader>
        <StyledHeaderWrapper>
          <StyledNav>
            <StyledLogo>
              <h1>BeFit</h1>
            </StyledLogo>
            <StyledList>
              <StyledListItem>pera</StyledListItem>
              <StyledListItem>pera</StyledListItem>
              <StyledListItem>pera</StyledListItem>
              <StyledListItem>pera</StyledListItem>
              <StyledListItem>pera</StyledListItem>
              <StyledListItem>pera</StyledListItem>
              <StyledListItem>pera</StyledListItem>
            </StyledList>
          </StyledNav>
        </StyledHeaderWrapper>
      </StyledHeader>
    </StyledHeaderContainer>
  );
};

export default Header;
