import * as api from "../api";
import {setStorageChange} from "../store/todos/todoSlice";

export const signUpAction = (userData, dispatch) => async () => {
  try {
    const {data} = await api.signUpApi(userData);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(setStorageChange());
  } catch (error) {
    console.log(`Error occured while signing Up:${error}`);
  }
};

export const signInAction = (userData, dispatch) => async () => {};
