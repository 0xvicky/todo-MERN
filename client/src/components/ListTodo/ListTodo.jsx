import React from "react";
import Todo from "./Todo/Todo";
import {useSelector} from "react-redux";

const ListTodo = () => {
  const {todoList} = useSelector(state => state.todos);
  let arr = ["Buy Milk", "Go Gym", "Study", "Code"];
  // console.log(todoList);

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
