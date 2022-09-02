import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub, AiOutlineCloseCircle } from 'react-icons/ai';
import TechList from '../techList/techList';

const PopupProject = ({
  popupPreview, name, technologies, info, demo, source, showPopup, id,
}) => (
  <div>
    <AiOutlineCloseCircle onClick={() => showPopup(0)} />
    <img
      alt="work-card"
      src={popupPreview}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
    <h2>{name}</h2>
    <TechList id={id} technologies={technologies} />
    <p>{info}</p>
    <a className="db" href={demo}>
      Live Demo
      {' '}
      <BiLinkExternal />
    </a>
    <a className="db" href={source}>
      Source Code
      {' '}
      <AiFillGithub />
    </a>
  </div>
);
PopupProject.propTypes = {
  popupPreview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  info: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  showPopup: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default PopupProject;
