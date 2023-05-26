import PropTypes from 'prop-types';
import Heading from '../../Heading/Heading';
import { ClientItemContainer, Image } from './ClientItem.styled';

const ClientItem = ({ clientInfo }) => {
  return (
    <ClientItemContainer>
      <Image />
      <Heading tag="p" text={clientInfo.comment} align="center" margins={{ mb: '20px' }} />
      <Heading tag="h3" text={clientInfo.name} />
    </ClientItemContainer>
  );
};

ClientItem.propTypes = {
  clientInfo: PropTypes.object,
};

export default ClientItem;
