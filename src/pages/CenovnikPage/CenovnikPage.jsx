import { useEffect } from 'react';
import Cenovnik from '../../components/Cenovnik/Cenovnik';
import FreeTrainingBg from '../../components/FreeTrainingBg/FreeTrainingBg';
import { MarginContainer } from '../../styles/commonStyles.styled';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <Cenovnik />
      <FreeTrainingBg />
    </MarginContainer>
  );
};

ContactPage.propTypes = {};

export default ContactPage;
