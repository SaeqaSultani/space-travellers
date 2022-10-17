import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from '../rocket/Rocket';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div data-testid="list-of-rockets">
      <ul>
        {rocketList.map((rocket) => (
          <li key={rocket.id}>
            <Rocket
              id={rocket.id}
              name={rocket.rocket_name}
              description={rocket.description}
              image={rocket.flickr_images[0]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
