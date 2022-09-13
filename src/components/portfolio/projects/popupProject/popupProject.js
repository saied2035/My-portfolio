import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub, AiFillCloseCircle } from 'react-icons/ai';
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';
import TechList from '../techList/techList';

const PopupProject = ({
  popupPreview, name, technologies, info, demo, source, showPopup, id,
}) => {
  const [fade, setFade] = useState(false);
  const [changePopup, setChangePopup] = useState(null);
  return (
    <div
      className="fixed flex items-center justify-center vh-100 w-100"
      style={{ top: 0, zIndex: 50, backdropFilter: 'blur(5px)' }}
    >
      <div
        className="relative mt3-ns mb3-ns mt2-m mb2-m mt0 mb0 flex flex-column
        w-50-ns w-80-m w-90 pa3 br3"
        style={{
          backgroundColor: '#f2f4f3',
          maxHeight: '100vh',
        }}
      >
        <BsArrowLeftSquareFill
          className="absolute pointer br-100"
          onClick={() => {
            setFade(true);
            setChangePopup(id - 1);
          }}
          style={{
            top: '50%',
            left: '-0.8rem',
            color: id - 1 === 0 ? 'rgba(59, 112, 128, 0.5)' : '#3b7080',
            backgroundColor: '#fff',
            fontSize: '1.53rem',
            pointerEvents: id - 1 === 0 ? 'none' : 'auto',
          }}
        />
        <AiFillCloseCircle
          className="absolute pointer"
          style={{
            right: '0.5%', top: '1%', color: '#3B7080', fontSize: '1rem',
          }}
          onClick={() => showPopup(0)}
        />
        <div
          className={`popup-card ${fade ? 'effect-fade-in' : 'effect-fade-out'}`}
          style={{ maxHeight: '100vh' }}
          onAnimationEnd={() => {
            if (!fade) return;
            setFade(false);
            showPopup(changePopup);
          }}
        >
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
          <TechList technologies={technologies} popup />
          <p
            className="tc flex items-center-ns f5 lh-copy fw6"
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
        <BsArrowRightSquareFill
          className="absolute pointer br-100"
          onClick={() => {
            setFade(true);
            setChangePopup(id + 1);
          }}
          style={{
            top: '50%',
            right: '-0.8rem',
            color: id + 1 > 6 ? 'rgba(59, 112, 128, 0.5)' : '#3b7080',
            backgroundColor: '#fff',
            fontSize: '1.53rem',
            pointerEvents: id + 1 > 6 ? 'none' : 'auto',
          }}
        />
      </div>
    </div>
  );
};
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
