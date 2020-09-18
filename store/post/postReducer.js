import {
  FETCH_POST,
  FETCH_POSTS,
  FETCH_POSTS_END,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_START,
} from "../actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

// Creating my reducer
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
        post: {},
        error: null,
      };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case FETCH_POSTS_END:
      return {
        ...state,
        loading: false,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_POST:
      return {
        ...state,
        posts: [],
        post: action.payload,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default postReducer;
