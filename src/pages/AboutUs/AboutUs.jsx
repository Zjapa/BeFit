// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import FreeTrainingBg from '../../components/FreeTrainingBg/FreeTrainingBg';
import Heading from '../../components/Heading/Heading';
import OurTeam from '../../components/OurTeam/OurTeam';
import { MarginContainer } from '../../styles/commonStyles.styled';
import { BEFIT_JE_SKUP, BEFIT_ZAMISLJEN, NAMA, O } from './AboutUs.const';
import { AboutUsContent, StyledAboutUsContainer, StyledAboutUsWrapper } from './AboutUs.styled';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <StyledAboutUsContainer>
        <StyledAboutUsWrapper>
          <AboutUsContent>
            <Heading tag="h2" coloredText={NAMA} text={O} margins={{ mb: '40px' }} />
            <Heading tag="p" text={BEFIT_JE_SKUP} margins={{ mb: '40px' }} />
            <Heading tag="p" text={BEFIT_ZAMISLJEN} margins={{ mb: '40px' }} />
          </AboutUsContent>
        </StyledAboutUsWrapper>
      </StyledAboutUsContainer>
      <OurTeam />
      <FreeTrainingBg />
    </MarginContainer>
  );
};

AboutUs.propTypes = {};

export default AboutUs;
