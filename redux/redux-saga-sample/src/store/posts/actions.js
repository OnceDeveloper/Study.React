import { createAction } from "redux-actions";

export const GET_POSTS = "posts/GET_POSTS";
export const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
export const GET_POSTS_FAILED = "posts/GET_POSTS_FAILED";

export const ADD_POST = "posts/ADD_POST";
export const ADD_POST_SUCCESS = "posts/ADD_POST_SUCCESS";
export const ADD_POST_FAILED = "posts/ADD_POST_FAILED";

export const getPostsFunc = createAction(GET_POSTS, (payload) => payload);
export const getPostsSuccessFunc = createAction(
  GET_POSTS_SUCCESS,
  (payload) => payload
);
export const getPostsFailedFunc = createAction(
  GET_POSTS_FAILED,
  (payload) => payload
);

export const addPostFunc = createAction(ADD_POST, (payload) => payload);

export const addPostSuccessFunc = createAction(
  ADD_POST_SUCCESS,
  (payload) => payload
);

export const addPostFailedFunc = createAction(
  ADD_POST_FAILED,
  (payload) => payload
);
