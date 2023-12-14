//user.js (action)
import axios from "axios";
import { FAIL_USERS, GET_USERS, GET_USER, LOAD_USERS } from "../actionType/user";

//get all users
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    let result = await axios.get("/api/user/return");
    dispatch({ type: GET_USERS, payload: result.data });
    console.log("List of users in action:", result.data);
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

//add user
export const addUser = (newUser) => async (dispatch) => { 
  try {
    await axios.post("/api/user/add", newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

//delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/user/delete/${id}`);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

//edit user
export const editUser = (id, newUser) => async (dispatch) => {
  try {
    await axios.put(`/api/user/edit/${id}`, newUser);
    dispatch(getUsers());
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

//get one user
export const getUser = (id) => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    let result = await axios.get(`/api/user/${id}`); 
    dispatch({ type: GET_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};


