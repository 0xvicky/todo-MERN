import React, {useState, useEffect} from "react";
import {updateTodoAction, deleteTodoAction} from "../../../actions/todos";
import {useDispatch} from "react-redux";
import {getElapsed} from "../../../utils/getElapsedTime";
import {setCurrentId} from "../../../store/todos/todoSlice";

const Todo = ({todo}) => {
  const [elapsedTime, setElapsedTime] = useState(getElapsed(todo?.createdAt));
  const dispatch = useDispatch();

  // Update elapsed time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(getElapsed(todo?.createdAt));
    }, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [todo?.createdAt]);

  const handleIsDone = e => {
    // console.log(e.target.checked);
    const updatedTodo = {
      ...todo,
      isDone: e.target.checked
    };
    dispatch(updateTodoAction(todo._id, updatedTodo));
  };

  const handleSetId = () => {
    dispatch(setCurrentId(todo._id));
  };

  const handleDelete = () => {
    dispatch(deleteTodoAction(todo._id));
  };

  return (
    <div className='flex items-center justify-between border-b border-gray-300 py-2 '>
      <input
        type='checkbox'
        // value={todo?.isDone}
        checked={todo?.isDone}
        onChange={handleIsDone}
      />
      {/* Left side - Text of the todo */}
      <p className='text-gray-800 font-semibold'>{todo?.text}</p>
      <p className='text-gray-800'>{elapsedTime}</p>

      {/* Right side - Edit and Delete buttons */}
      <div className='flex space-x-2'>
        {/* Edit button */}
        <button
          className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300'
          onClick={handleSetId}>
          Edit
        </button>

        {/* Delete button */}
        <button
          className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300'
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
