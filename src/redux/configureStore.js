import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import profileReducer from './profile/profile';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './Missions/missions';

const root = combineReducers({
  rockets: rocketsReducer,
  profile: profileReducer,
  missions: missionsReducer,
});
const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
