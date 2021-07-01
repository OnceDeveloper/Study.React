import posts from ".";
import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILED,
} from "./actions";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case GET_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_POST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload],
      };
    case ADD_POST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default PostReducer;
