import PropTypes from 'prop-types';
import TechList from '../techList/techList';

const Project = ({
  preview, name, technologies, showPopup, id,
}) => (
  <div
    className="project-card flex center flex-column items-center br3 pa3 mb3"
    style={{ backgroundColor: 'rgba(74, 80, 67, 0.3)' }}
  >
    <img
      alt="work-card"
      className="br3"
      src={preview}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
    <h2 style={{
      background: '-webkit-linear-gradient(90deg,#766C7F 30%, #048ba8 70%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
    >
      {name}
    </h2>
    <TechList technologies={technologies} />
    <button
      type="button"
      className="project-detail pointer pa2 pl3 pr3 br3 tc b--none center"
      onClick={() => showPopup(id)}
    >
      Project Details
    </button>
  </div>
);
Project.propTypes = {
  preview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  showPopup: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default Project;
