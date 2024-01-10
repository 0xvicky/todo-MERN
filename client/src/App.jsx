import {useState} from "react";
import "./App.css";
import {Navbar, AddTodo, ListTodo} from "./components";

function App() {
  return (
    <>
      <div className='parent flex flex-col'>
        <Navbar />
        <AddTodo />
        <ListTodo />
      </div>
    </>
  );
}

export default App;
