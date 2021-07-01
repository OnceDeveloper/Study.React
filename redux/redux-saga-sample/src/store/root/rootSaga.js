import { all, fork } from "redux-saga/effects";
import postsSaga from "../posts/saga";

export default function* rootSaga() {
  yield all([fork(postsSaga)]);
}
