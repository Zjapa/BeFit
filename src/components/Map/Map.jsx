import { StyledMap } from './Map.styled';

const Map = () => {
  return (
    <StyledMap
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11320.760581549495!2d20.44250835!3d44.8176908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1684261554244!5m2!1ssr!2srs"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></StyledMap>
  );
};

Map.propTypes = {};

export default Map;
