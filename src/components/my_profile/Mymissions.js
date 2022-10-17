import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const Mymissions = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <table className="reserve">
      <tbody>
        <tr className="join-mission-div">
          <th>
            <h2 className="title"> My Missions</h2>
          </th>
        </tr>

        {missions.map(
          (mission) => mission.joined && (
          <tr className="reserve-section" key={uuid()}>
            <td className="reserve-items">{mission.mission_name}</td>
          </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Mymissions;
