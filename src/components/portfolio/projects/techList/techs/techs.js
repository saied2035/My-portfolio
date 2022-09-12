import PropTypes from 'prop-types';

const Techs = ({ technologies, id }) => (
  technologies.map(({ name, link }) => (
    <li key={`tech${id}`}>
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
  id: PropTypes.number.isRequired
};
export default Techs;
