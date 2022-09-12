import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import TechList from '../techList/techList';

const PopupProject = ({
  popupPreview, name, technologies, info, demo, source, showPopup, id,
}) => (
  <div className="fixed vh-100 w-100" style={{ top: 0, zIndex: 50, backdropFilter: 'blur(5px)' }}>
    <div
      className="popup-card relative center mt3-ns mb3-ns mt2-m mb2-m mt0 mb0 flex flex-column h-auto-ns
      h-100 w-50-ns w-80-m w-100 pa3 br3"
      style={{
        gap: '1rem',
        backgroundColor: '#F3E8EE',
        maxHeight: '100vh',
      }}
    >
      <AiFillCloseCircle
        className="absolute"
        style={{
          right: '0.5%', top: '1%', color: '#3B7080', fontSize: '1rem',
        }}
        onClick={() => showPopup(0)}
      />
      <img
        alt="work-card"
        src={popupPreview}
        className="w-100"
        style={{
          height: '200px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
      <h2 className="tc fw7" style={{ color: '#3B7080' }}>{name}</h2>
      <TechList id={id} technologies={technologies} popup />
      <p
        className="tc flex items-center f5 lh-copy fw6"
        style={{
          height: '6rem',
          overflow: 'auto',
          color: '#625F63',
        }}
      >
        {info}
      </p>
      <div className="flex justify-center flex-wrap" style={{ gap: '1rem 3rem' }}>
        <a
          className="project-detail flex items-center pa2 pl3 pr3 br3 tc b--none"
          style={{ gap: '0.5rem' }}
          target="_blank"
          href={demo}
          rel="noreferrer"
        >
          Live Demo
          {' '}
          <BiLinkExternal />
        </a>
        <a
          className="project-detail flex items-center pa2 pl3 pr3 br3 tc b--none"
          target="_blank"
          style={{ gap: '0.5rem' }}
          href={source}
          rel="noreferrer"
        >
          Source Code
          {' '}
          <AiFillGithub />
        </a>
      </div>
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
