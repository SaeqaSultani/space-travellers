const RESERVED = 'profile/profile/RESERVED';
const CANCEL_RESERVATION = 'profile/profile/CANCEL_RESERVATION';

export const reserved = (rocket) => ({
  type: RESERVED,
  rocket,
});

const initialState = {
  reserved: [],
  joined: [],
};

export const cancelReservation = (rocket) => ({
  type: CANCEL_RESERVATION,
  rocket,
});

export default function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case RESERVED:
      return {
        ...state,
        reserved: [...state.reserved, action.rocket],
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        reserved: state.reserved.filter((item) => item !== action.rocket),
      };
    default:
      return state;
  }
}
