import PropTypes from 'prop-types';

const Techs = ({ technologies }) => (
  technologies.map(({ name, link }, i) => (
    <li key={`tech${i + 1}`}>
      <a
        className="tech-link dib pa1 pl3 pr3 f6 br-pill fw6 b"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    </li>
  ))
);

Techs.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default Techs;
