import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub, AiOutlineCloseCircle } from 'react-icons/ai';
import TechList from '../techList/techList';

const PopupProject = ({
  popupPreview, name, technologies, info, demo, source, showPopup, id,
}) => (
  <div className="fixed vh-100 w-100" style={{ top: 0, zIndex: 50, backdropFilter: 'blur(5px)' }}>
    <div
      className="popup-card center mt3-ns mb3-ns mt2-m mb2-m mt0 mb0 flex flex-column h-auto-ns
      h-100 w-50-ns w-80-m w-100 pa3"
      style={{
        gap: '1rem',
        backgroundColor: '#F3E8EE',
        maxHeight: '100vh',
      }}
    >
      <AiOutlineCloseCircle onClick={() => showPopup(0)} />
      <img
        alt="work-card"
        src={popupPreview}
        className="w-100"
        style={{
          height: '200px',
          objectFit: 'contain',
          objectPosition: '0',
        }}
      />
      <h2>{name}</h2>
      <TechList id={id} technologies={technologies} />
      <p style={{ height: '6rem', overflow: 'auto' }}>{info}</p>
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
