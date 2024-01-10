import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {addTodo} from "../../store/todos/todoSlice";

const AddTodo = () => {
  const initialState = {
    id: "",
    text: ""
  };
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };
  return (
    <div className='mx-auto'>
      <form
        className='mt-4'
        onSubmit={handleSubmit}>
        <div className='flex'>
          <input
            type='text'
            placeholder='Add Todo'
            onChange={e => setTodo({id: uuidv4(), text: e.target.value})}
            className='border-2 border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:border-blue-500'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 transition duration-300'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
