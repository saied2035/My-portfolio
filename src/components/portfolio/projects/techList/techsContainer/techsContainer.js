import PropTypes from 'prop-types';
import Tech from './tech/tech';

const TechsContainer = ({ technologies }) => (
  technologies.map(({ name, link }) => (
    <>
      <Tech name={name} link={link} />
    </>
  ))
);

TechsContainer.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default TechsContainer;
