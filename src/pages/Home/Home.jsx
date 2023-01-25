import FreeTraining from '../../components/FreeTraining/FreeTraining';
import ProgramList from '../../components/ProgramList/ProgramList';
import { StyledContainer, StyledHeroContainer } from './Home.styled';
// import heroImg from '../../assets/images/bg.jpg';

const Home = () => {
  return (
    <StyledContainer>
      <StyledHeroContainer></StyledHeroContainer>
      <ProgramList />
      <FreeTraining />
    </StyledContainer>
  );
};

export default Home;
