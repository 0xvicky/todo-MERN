import React, {useEffect} from "react";
import Todo from "./Todo/Todo";
import {useDispatch, useSelector} from "react-redux";
import {getTodosAction} from "../../actions/todos";

const ListTodo = () => {
  const {todoList, isChange} = useSelector(state => state.todos);
  // let arr = ["Buy Milk", "Go Gym", "Study", "Code"];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch, isChange]);

  return (
    <div className='mx-28'>
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
