// import PropTypes from 'prop-types';
import Heading from '../Heading/Heading';
import { clientsList, KLIJENATA, KOMENTARI } from './ClientComments.const';
import {
  ClientItems,
  StyledClientCommentsContainer,
  StyledClientCommentsContent,
  StyledClientCommentsWrapper,
} from './ClientComments.styled';
import ClientItem from './ClientItem/ClientItem';

const ClientComments = () => {
  return (
    <StyledClientCommentsContainer>
      <StyledClientCommentsWrapper>
        <StyledClientCommentsContent>
          <Heading tag="h1" text={KOMENTARI} coloredText={KLIJENATA} margins={{ mb: '110px' }} />
        </StyledClientCommentsContent>
        <ClientItems>
          {clientsList.map((clientInfo) => (
            <ClientItem key={clientInfo.name} clientInfo={clientInfo} />
          ))}
        </ClientItems>
      </StyledClientCommentsWrapper>
    </StyledClientCommentsContainer>
  );
};

ClientComments.propTypes = {};

export default ClientComments;
