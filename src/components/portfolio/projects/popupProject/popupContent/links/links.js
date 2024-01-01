import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

const Links = ({ source, demo }) => (
  <div className="flex justify-center items-center flex-wrap" style={{ gap: '1rem 3rem' }}>
    <a
      className="project-detail flex items-center justify-center pa2 pl3 pr3 br3 tc b--none flex-wrap"
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
      style={{
        gap: '0.5rem',
        marginTop: 'auto',
        marginBottom: 'auto',
      }}
      href={source}
      rel="noreferrer"
    >
      Source Code
      {' '}
      <AiFillGithub />
    </a>
  </div>
);

Links.propTypes = {
  demo: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default Links;
