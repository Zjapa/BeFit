import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import { NAS, OurTeamList, TIM } from './OurTeam.const';
import { OurTeamItems, StyledOurTeamContainer, StyledOurTeamWrapper } from './OurTeam.styled';
import OurTeamItem from './OurTeamItem/OurTeamItem';

const OurTeam = () => {
  return (
    <StyledOurTeamContainer>
      <StyledOurTeamWrapper>
        <Heading tag="h1" text={NAS} coloredText={TIM} margins={{ mb: '10px' }} align="center" />
        <Heading tag="p" text="UPOZNAJTE NAŠE SERTIFIKOVANE TRENERE" margins={{ mb: '60px' }} align="center" />

        <OurTeamItems>
          {OurTeamList.map((teamItem) => (
            <OurTeamItem key={teamItem.name} teamItem={teamItem} />
          ))}
        </OurTeamItems>
      </StyledOurTeamWrapper>
    </StyledOurTeamContainer>
  );
};

OurTeam.propTypes = {
  plan: PropTypes.arrayOf({}),
};

export default OurTeam;
