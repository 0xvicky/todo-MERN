import React, {useEffect} from "react";
import Todo from "./Todo/Todo";
import {useDispatch, useSelector} from "react-redux";
import {getTodosAction} from "../../actions/todos";
import useFetchUser from "../../utils/useFetchUser";
import {jwtDecode} from "jwt-decode";
import {logoutSlice} from "../../store/todos/todoSlice";

const ListTodo = () => {
  const {todoList, isChange} = useSelector(state => state.todos);
  const user = useFetchUser();
  // let arr = ["Buy Milk", "Go Gym", "Study", "Code"];
  // console.log(todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const {token} = user;
      if (jwtDecode(token).exp * 1000 < new Date().getTime()) dispatch(logoutSlice());
    }
  }, []);

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch, isChange]);

  return (
    <div className='flex flex-col justify-center pt-5 px-5 md:px-28'>
      {todoList?.map(todo => (
        <Todo
          key={todo._id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ListTodo;
