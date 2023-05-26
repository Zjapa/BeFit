import Heading from '../Heading/Heading';
import Navbar from '../Navbar/Navbar';
import { Logo, StyledHeaderContainer, StyledHeaderWrapper } from './Header.styled';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <Logo>
          <Heading tag="h1" text="BE" coloredText="FIT" />
        </Logo>
        <Navbar />
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;
