import * as api from "../api";
import {setStorageChange} from "../store/todos/todoSlice";

const authAction = (apiFunction, userData, dispatch) => async () => {
  try {
    const {data} = await apiFunction(userData);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(setStorageChange());
  } catch (error) {
    // console.log(error);
    console.log(`Error occured while signing Up:${error}`);
  }
};

export const signUpAction = (userData, dispatch) =>
  authAction(api.signUpApi, userData, dispatch);

export const signInAction = (userData, dispatch) =>
  authAction(api.signInApi, userData, dispatch);
