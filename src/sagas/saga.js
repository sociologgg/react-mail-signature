import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import firebaseService from "../firebase/firebaseService";

function* loginUser(action) {
  try {
    const user = yield call(
      firebaseService.login,
      action.payload.email,
      action.payload.password
    );
    // console.log(user);

    yield put({ type: "USER_LOGIN_SUCCEEDED", payload: user });
  } catch (e) {
    yield put({ type: "USER_LOGIN_FAILED", message: e.message });
  }
}

function* logoutUser(action) {
  try {
    yield firebaseService.logout();
    yield put({ type: "LOGOUT_SUCCEEDED" });
  } catch (e) {
    yield put({ type: "LOGOUT_FAILED", message: e.message });
  }
}

function* loginSaga() {
  yield takeEvery("USER_LOGIN_REQUESTED", loginUser);
}

function* logoutSaga(params) {
  yield takeLatest("USER_LOGOUT_REQUESTED", logoutUser);
}

export default function* rootSaga() {
  yield all([loginSaga(), logoutSaga()]);
}
