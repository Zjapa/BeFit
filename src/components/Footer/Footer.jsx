import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Logo } from '../Header/Header.styled';
import Heading from '../Heading/Heading';
import { CONTACT, SERVICES, SITE_MAP, SOCIAL_LIST } from './Footer.const';
import {
  BotFooter,
  LogoContent,
  SocialList,
  StyledFooterContainer,
  StyledFooterWrapper,
  TopFooter,
} from './Footer.styled';
import FooterArticle from './FooterArticle/FooterArticle';

const Footer = () => {
  const {
    colors: { subText },
  } = useContext(ThemeContext);
  return (
    <StyledFooterContainer>
      <StyledFooterWrapper>
        <TopFooter>
          <LogoContent>
            <Logo>
              <Heading tag="h1" text="BE" coloredText="FIT" />
            </Logo>
          </LogoContent>
          <FooterArticle article={SITE_MAP} />
          <FooterArticle article={SERVICES} />
          <FooterArticle article={CONTACT} />
        </TopFooter>
        <BotFooter>
          <Heading tag="p">
            Copyright &#169;
            {` ${new Date().getFullYear()} BEFIT`}
          </Heading>

          <SocialList>
            {SOCIAL_LIST.map((socIcon) => (
              <socIcon.Icon
                key={socIcon.id}
                stroke={subText}
                style={{ height: '20px', width: '20px' }}
                strokeWidth="2"
              />
            ))}
          </SocialList>
        </BotFooter>
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
};

export default Footer;
