import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Missions from './components/Missions/Missions';
import Navbar from './components/navbar/Navbar';
import Rockets from './components/rockets/Rockets';
import Profile from './components/my_profile/MyProfile';
import { missionData } from './redux/Missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(missionData());
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
