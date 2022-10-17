import React from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/Missions/missions';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(joinMission(id));
  };

  const leaveHandle = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="mission-page">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((singleMission) => (
            <tr key={uuid()}>
              <td>{singleMission.mission_name}</td>
              <td>{singleMission.description}</td>

              {singleMission.joined ? (
                <>
                  <td>
                    <span className="badge bg-info text-dark">
                      Active Member
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => leaveHandle(singleMission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <span className="badge bg-secondary">Not A Member</span>
                  </td>
                  <td>
                    {' '}
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => clickHandler(singleMission.mission_id)}
                    >
                      Join Mission
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
