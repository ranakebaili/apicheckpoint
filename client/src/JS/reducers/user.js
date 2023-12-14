// user.js (the reducer)
import { FAIL_USERS, GET_USERS, GET_USER, LOAD_USERS } from "../actionType/user";

// initial state
const initialState = {
  listUsers: [],
  errors: null,
  load: false,
  userToGet: {},
};

// pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USERS:
      return { ...state, load: true };
    case GET_USERS:
      console.log("List of users in reducer:", payload);
      return { ...state, load: false, listUsers: payload };
    case GET_USER:
      return { ...state, userToGet: payload, load: false };
    case FAIL_USERS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default userReducer;
