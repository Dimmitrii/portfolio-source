import axios from 'axios';

import config from '../../config.json';

export const actions = {
  fetchAll: 'FETCH_POSTS',
  fetchOne: 'FETCH_ONE_POST',
  delete: 'DELETE_POST',
  create: 'CREATE_POST',
  update: 'UPDATE_POST',
  toggleEditPost: "TOGGLE_EDIT_POST",
};

// fetchPosts
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data: posts } = await axios(`${config.apiUrl}/posts`)
      dispatch({ type: actions.fetchAll, payload: posts });
    } catch (error) {
      console.log(error);
    }
  }
}

// fetchPost
export const fetchPost = (id) => async (dispatch) => {
  try {
    const { data: post } = await axios(`${config.apiUrl}/posts/${id}`);
    dispatch({ type: actions.fetchOne, payload: post });
  } catch (error) {
    console.log(error);
  }
}

// deletePost
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${config.apiUrl}/posts/${id}`);
    dispatch({ type: actions.delete, payload: id });
  } catch (error) {
    console.log(error);
  }
}

// addPost POST
export const addPost = (post) => async (dispatch) => {
  try {
    const { data: createdPost } = await axios.post(`${config.apiUrl}/posts`, post);
    dispatch({ type: actions.create, payload: createdPost });
  } catch (error) {
    console.log(error);
  }
}

// editPost PUT/PATCH
export const editPost = (post) => async (dispatch) => {
  try {
    const { data: updatedPost } = await axios.put(`${config.apiUrl}/posts/${post.id}`, post);
    dispatch({ type: actions.update, payload: updatedPost });
  } catch (error) {
    console.log(error);
  }
}

export const toggleEditPost = (boolean) => ({type:"TOGGLE_EDIT_POST",payload:boolean})
