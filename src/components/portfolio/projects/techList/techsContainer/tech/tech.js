import PropTypes from 'prop-types';

const Tech = ({ name, link }) => (
  <li>
    <a
      className="tech-link dib pa1 pl3 pr3 f5-ns f6 br-pill fw6 b"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {name}
    </a>
  </li>
);
Tech.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Tech;
