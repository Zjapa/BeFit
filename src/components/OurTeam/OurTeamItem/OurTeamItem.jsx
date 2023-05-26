import PropTypes from 'prop-types';
import Heading from '../../Heading/Heading';
import { ItemContainer, ItemOverlay } from './OurTeamItem.styled';

const OurTeamItem = ({ teamItem }) => {
  const { name, url } = teamItem;
  return (
    <ItemContainer>
      <img src={url} alt={name + 'img'} loading="lazy" />
      <ItemOverlay>
        <Heading tag="h2" text={name.toUpperCase()} margins={{ mb: '60px' }} align="center" />
      </ItemOverlay>
    </ItemContainer>
  );
};

OurTeamItem.propTypes = {
  teamItem: PropTypes.string,
};

export default OurTeamItem;
