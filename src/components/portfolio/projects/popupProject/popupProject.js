import PropTypes from 'prop-types';
import { useState } from 'react';
import PopupIcons from './popupIcons/popupIcons';
import PopupContent from './popupContent/popupContent';

const PopupProject = ({
  popupPreview, name, technologies, info, demo, source, showPopup, id,
}) => {
  const [fade, setFade] = useState(false);
  const [changePopup, setChangePopup] = useState(null);
  const popupContainerStyle = { top: 0, zIndex: 50, backdropFilter: 'blur(5px)' };
  const PopupDetailsContainerStyle = { backgroundColor: '#f2f4f3', maxHeight: '100vh' };
  return (
    <div className="fixed flex items-center justify-center vh-100 w-100" style={popupContainerStyle}>
      <div
        className="relative mt3-ns mb3-ns mt2-m mb2-m mt0 mb0 flex flex-column
        w-50-ns w-80-m w-90 pa3 br3"
        style={PopupDetailsContainerStyle}
      >
        <PopupIcons
          id={id}
          showPopup={showPopup}
          setFade={setFade}
          setChangePopup={setChangePopup}
        />
        <PopupContent
          popupPreview={popupPreview}
          name={name}
          technologies={technologies}
          info={info}
          demo={demo}
          source={source}
          showPopup={showPopup}
          changePopup={changePopup}
          setFade={setFade}
          fade={fade}
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
