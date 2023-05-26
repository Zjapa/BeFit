import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Router from './pages/Router/Router';
import GlobalStyle from './styles/Global';
import { StyledApp } from './App.styled';
function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </StyledApp>
  );
}

export default App;
