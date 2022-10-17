import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Mymissions from './Mymissions';
import './MyProfile.css';

export default function Profile() {
  const reserve = useSelector((state) => state.profile.reserved);
  return (
    <div className="container" data-testid="container">
      <table className="reserve">
        <tbody>
          <tr className="reserve-section">
            <th>
              <h2 className="title">My Reservations</h2>
            </th>
          </tr>
          <tr>
            {reserve.map((item) => (
              <td key={uuidv4()} className="reserve-items">
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <Mymissions />
    </div>
  );
}
