import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// actions
const SHOW_MISSIONS = 'SHOW_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const baseAPI = 'https://api.spacexdata.com/v3/missions';

// thunk
export const missionData = createAsyncThunk(
  SHOW_MISSIONS,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseAPI);

    dispatch({
      type: SHOW_MISSIONS,
      payload: data,
    });
  },
);

export const joinMission = (id) => (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: id,
  });
};

export const leaveMission = (id) => (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: id,
  });
};

// reducer

const initialState = { missions: [] };
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MISSIONS:
      return {
        ...state,
        missions: action.payload,
      };

    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.mission_id !== action.payload
          ? mission
          : { ...mission, joined: true })),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.mission_id !== action.payload
          ? mission
          : { ...mission, joined: false })),
      };

    default:
      return state;
  }
};

export default missionsReducer;
