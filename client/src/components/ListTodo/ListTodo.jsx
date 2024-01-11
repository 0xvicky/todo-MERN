import React, {useEffect} from "react";
import Todo from "./Todo/Todo";
import {useDispatch, useSelector} from "react-redux";
import {getTodosAction} from "../../actions/todos";

const ListTodo = () => {
  const {todoList} = useSelector(state => state.todos);
  let arr = ["Buy Milk", "Go Gym", "Study", "Code"];
  const dispatch = useDispatch();
  console.log(todoList);
  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  return (
    <div className='mx-28'>
      {todoList?.map((item, idx) => (
        <Todo
          key={item.id}
          todo={item.text}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ListTodo;
