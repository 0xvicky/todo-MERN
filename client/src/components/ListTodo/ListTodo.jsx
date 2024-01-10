import React from "react";
import Todo from "./Todo/Todo";

const ListTodo = () => {
  let arr = ["Buy Milk", "Go Gym", "Study", "Code"];

  return (
    <div className='mx-28'>
      {arr.map((item, idx) => (
        <Todo
          key={idx}
          todo={item}
        />
      ))}
    </div>
  );
};

export default ListTodo;
