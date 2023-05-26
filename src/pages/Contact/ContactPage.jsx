import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Map from '../../components/Map/Map';
import { MarginContainer } from '../../styles/commonStyles.styled';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <ContactForm />
      <Map />
    </MarginContainer>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
