import { useEffect } from 'react';
import ClientComments from '../../components/ClientComments/ClientComments';
import FreeTraining from '../../components/FreeTraining/FreeTraining';
import PlanList from '../../components/PlanList/PlanList';
import ProgramList from '../../components/ProgramList/ProgramList';
import TrainingDiscount from '../../components/TrainingDiscount/TrainingDiscount';
import { MarginContainer } from '../../styles/commonStyles.styled';
import HeroSection from '../../components/HeroSection/HeroSection';
// import heroImg from '../../assets/images/bg.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MarginContainer>
      <HeroSection />
      <ProgramList />
      <FreeTraining />
      <PlanList />
      <TrainingDiscount />
      <ClientComments />
    </MarginContainer>
  );
};

export default Home;
