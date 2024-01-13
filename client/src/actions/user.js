import * as api from "../api";
import {setStorageChange} from "../store/todos/todoSlice";

export const signUpAction = (userData, dispatch) => async () => {
  try {
    const {data} = await api.signUpApi(userData);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(setStorageChange());
  } catch (error) {
    const {
      response: {data}
    } = error;
    console.log(data);
    console.log(`Error occured while signing Up:${error}`);
  }
};

export const signInAction = (userData, dispatch) => async () => {
  try {
    const {data} = await api.signInApi(userData);
    console.log(data);
  } catch (error) {
    const {
      response: {data}
    } = error;
    console.log(data);
    console.log(`Error occured while signin in to user:${error}`);
  }
};
