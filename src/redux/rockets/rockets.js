import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_ROCKETS = 'rockets/rockets/GET_ROCKETS';
const initialState = [];
const url = 'https://api.spacexdata.com/v3/rockets';
// thunk
export const getRockets = createAsyncThunk(
  GET_ROCKETS,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: GET_ROCKETS, rockets: data });

    return data;
  },
);

// reducer
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
};

export default rocketsReducer;
