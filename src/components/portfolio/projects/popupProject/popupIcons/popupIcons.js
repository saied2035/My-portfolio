import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs';

const PopupIcons = ({
  showPopup, setFade, setChangePopup, id,
}) => {
  const closeCircleStyle = {
    right: '0.5%', top: '1%', color: '#3B7080', fontSize: '1rem',
  };
  const leftArrowStyle = {
    top: '50%',
    left: '-0.8rem',
    color: id - 1 === 0 ? 'rgba(59, 112, 128, 0.5)' : '#3b7080',
    backgroundColor: '#fff',
    fontSize: '1.53rem',
    pointerEvents: id - 1 === 0 ? 'none' : 'auto',
  };
  const rightArrowStyle = {
    top: '50%',
    right: '-0.8rem',
    color: id + 1 > 6 ? 'rgba(59, 112, 128, 0.5)' : '#3b7080',
    backgroundColor: '#fff',
    fontSize: '1.53rem',
    pointerEvents: id + 1 > 6 ? 'none' : 'auto',
  };
  const slideToPopup = (number) => {
    setFade(true);
    setChangePopup(number);
  };
  return (
    <>
      <AiFillCloseCircle className="absolute pointer" onClick={() => showPopup(0)} style={closeCircleStyle} />
      <BsArrowLeftSquareFill
        className="absolute pointer br-100"
        onClick={() => slideToPopup(id - 1)}
        style={leftArrowStyle}
      />
      <BsArrowRightSquareFill
        className="absolute pointer br-100"
        onClick={() => slideToPopup(id + 1)}
        style={rightArrowStyle}
      />
    </>
  );
};

PopupIcons.propTypes = {
  showPopup: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  setFade: PropTypes.func.isRequired,
  setChangePopup: PropTypes.func.isRequired,
};
export default PopupIcons;
