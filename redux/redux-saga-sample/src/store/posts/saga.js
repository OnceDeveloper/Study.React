import { takeEvery, put, call, all, takeLeading } from "redux-saga/effects";
import {
  GET_POSTS,
  // getPostsFunc,
  getPostsSuccessFunc,
  getPostsFailedFunc,
  ADD_POST,
  //addPostFunc,
  addPostSuccessFunc,
  addPostFailedFunc,
} from "./actions";
import * as api from "../../api/posts";

function* getPostsAsync() {
  try {
    const data = yield call(api.getPosts);
    yield put(getPostsSuccessFunc(data));
  } catch (error) {
    yield put(getPostsFailedFunc(error.message));
  }
}

function* addPostAsync(action) {
  try {
    const data = yield call(api.addPost, action.payload);
    //성공 시 반환되는 data는 {id: 101}
    yield put(addPostSuccessFunc({ ...data, ...action.payload }));
  } catch (error) {
    yield put(addPostFailedFunc(error.message));
  }
}

function* getPostsWatcher() {
  yield takeEvery(GET_POSTS, getPostsAsync);
}

function* addPostWatcher() {
  yield takeLeading(ADD_POST, addPostAsync);
}
export default function* postsSaga() {
  yield all([getPostsWatcher(), addPostWatcher()]);
}
