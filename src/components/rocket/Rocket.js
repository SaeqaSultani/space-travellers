import React from 'react';
import './Rocket.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserved } from '../../redux/profile/profile';

const Rocket = (props) => {
  const { name, image, description } = props;
  Rocket.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  const reserve = useSelector((state) => state.profile.reserved);
  const dispatch = useDispatch();
  const reservations = (e) => {
    const rocketTitle = e.target.parentElement.children[0].innerText;
    const rocket = rocketTitle;
    if (reserve.includes(rocket)) {
      return;
    }
    dispatch(reserved(rocket));
  };
  const cancel = (e) => {
    const rocketTitle = e.target.parentElement.children[0].innerText;
    dispatch(cancelReservation(rocketTitle));
  };
  return (
    <div className="context" data-testid="rocket">
      <img className="img" src={image} alt="user" />
      <div className="data">
        <h2 className="title">{name}</h2>
        { reserve.includes(name) && <div className="sub-btn">Reserved</div> }
        <p className="dec">
          {description}
        </p>
        {(reserve.includes(name)) ? (
          <button
            type="button"
            className="btn-disabled"
            onClick={cancel}
          >
            Cancel Reservations
          </button>
        ) : (
          <button
            type="button"
            className="btn-enabled"
            onClick={reservations}
          >
            Reserve
          </button>
        )}
      </div>
    </div>
  );
};

export default Rocket;
