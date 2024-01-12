import React from "react";
import {AddTodo, ListTodo} from "../../components";

const Home = () => {
  return (
    <div className='parent flex flex-col'>
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default Home;
