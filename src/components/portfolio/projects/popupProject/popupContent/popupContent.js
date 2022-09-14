import PropTypes from 'prop-types';
import TechList from '../../techList/techList';
import Links from './links/links';

const PopupContent = ({
  popupPreview, name, technologies, info, demo, source, showPopup, fade, changePopup, setFade,
}) => {
  const imgStyle = {
    height: '200px',
    objectFit: 'contain',
    objectPosition: 'center',
  };
  const infoStyle = {
    height: '6rem',
    overflow: 'auto',
    color: '#625F63',
  };
  const afterAnimation = () => {
    if (!fade) return;
    setFade(false);
    showPopup(changePopup);
  };
  return (
    <div
      className={`popup-card ${fade ? 'effect-fade-in' : 'effect-fade-out'}`}
      style={{ maxHeight: '100vh' }}
      onAnimationEnd={() => afterAnimation()}
    >
      <img
        alt="work-card"
        src={popupPreview}
        className="w-100"
        style={imgStyle}
      />
      <h2 className="tc fw7" style={{ color: '#3B7080' }}>{name}</h2>
      <TechList technologies={technologies} popup />
      <p className="tc flex items-center-ns f5 lh-copy fw6" style={infoStyle}>
        {info}
      </p>
      <Links source={source} demo={demo} />
    </div>
  );
};

PopupContent.propTypes = {
  popupPreview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  info: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired,
  setFade: PropTypes.func.isRequired,
  changePopup: PropTypes.number.isRequired,
  fade: PropTypes.bool.isRequired,
};

export default PopupContent;
