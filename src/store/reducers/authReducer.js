import {
  USER_LOGIN_SUCCEEDED,
  USER_LOGIN_FAILED,
  LOGOUT_SUCCEEDED,
  LOGOUT_FAILED,
  EMAIL_VERIFIED,
} from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));

let initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_SUCCEEDED:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };

    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT_SUCCEEDED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}
