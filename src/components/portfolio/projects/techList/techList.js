import PropTypes from 'prop-types';
import TechsContainer from './techsContainer/techsContainer';

const TechList = ({ technologies }) => (
  <ul className="list flex flex-wrap justify-center mb4" style={{ gap: '0.5rem' }}>
    <TechsContainer technologies={technologies} />
  </ul>
);
TechList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default TechList;
