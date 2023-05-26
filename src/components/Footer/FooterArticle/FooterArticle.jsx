import PropTypes from 'prop-types';
import Heading from '../../Heading/Heading';
import { FooterArticleContainer } from './FooterArticle.styled';
import { useNavigate } from 'react-router-dom';

const FooterArticle = ({ article }) => {
  const { items, title } = article;
  const navigate = useNavigate();

  const navigateTo = (path, name) => {
    if (article.title === 'USLUGE') {
      navigate(`/programi${path}`, { state: { name } });
    } else {
      navigate(path);
    }
  };

  return (
    <FooterArticleContainer>
      <Heading tag="h3" text={title} margins={{ mb: '20px' }} />
      {items.map((item) => (
        <Heading
          key={item.name}
          tag="p"
          text={item.name}
          margins={{ mb: '20px' }}
          className="footer-heading"
          onClick={() => navigateTo(item.path, item.name)}
        />
      ))}
    </FooterArticleContainer>
  );
};

FooterArticle.propTypes = {
  article: PropTypes.shape({ title: PropTypes.string, items: PropTypes.arrayOf(PropTypes.string) }),
};

export default FooterArticle;
