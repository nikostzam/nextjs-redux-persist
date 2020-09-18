import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_POSTS_END,
  FETCH_POSTS_START,
  FETCH_POSTS_ERROR,
} from "../actionTypes";
import fetch from "isomorphic-unfetch";

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_POSTS_START });
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({ type: FETCH_POSTS, payload: data });
    dispatch({ type: FETCH_POSTS_END });
  } catch (err) {
    dispatch({ type: FETCH_POSTS_ERROR, payload: err.message });
  }
};

export const fetchPost = (id) => async (dispatch) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  dispatch({ type: FETCH_POST, payload: post });
};
