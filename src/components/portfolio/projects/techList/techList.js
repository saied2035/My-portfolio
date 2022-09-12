import PropTypes from 'prop-types';
import Techs from './techs/techs';

const TechList = ({ technologies, popup }) => (
  <ul className={`list flex flex-wrap justify-center ${popup ? '' : 'mb4'} `} style={{ gap: '0.5rem' }}>
    <Techs technologies={technologies} />
  </ul>
);
TechList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  popup: PropTypes.oneOf([true, undefined]).isRequired,
};
export default TechList;
