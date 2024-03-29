import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodoAction, updateTodoAction} from "../../actions/todos";
import {setCurrentId} from "../../store/todos/todoSlice";
import toast from "react-hot-toast";

const AddTodo = () => {
  const {todoList, currentId} = useSelector(state => state.todos);
  const [todo, setTodo] = useState({text: ""});
  const dispatch = useDispatch();

  const editPost = currentId ? todoList.find(todo => todo._id === currentId) : null;

  // console.log(editPost);

  useEffect(() => {
    if (editPost) {
      setTodo({...todo, text: editPost.text});
    }
  }, [editPost]);

  const handleSubmit = () => {
    if (todo.text === "") {
      return toast.error("Invalid Input");
    }
    if (currentId && editPost) {
      const updatedTodo = {
        ...editPost,
        text: todo.text
      };
      dispatch(updateTodoAction(currentId, updatedTodo));
      toast.success("Todo Updated !");
    } else {
      dispatch(addTodoAction(todo));
      toast.success("Todo Added !");
    }
    dispatch(setCurrentId(null));
    setTodo({text: ""});
  };

  return (
    <div className='mx-auto'>
      <div className='mt-4'>
        <div className='flex'>
          <input
            type='text'
            name='todoText'
            placeholder='Add Todo'
            autoComplete='off'
            value={todo?.text}
            onChange={e => {
              if (e.target.value === "") {
                dispatch(setCurrentId(null));
              }
              setTodo({...todo, text: e.target.value});
            }}
            className='border-2 border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:border-blue-500'
          />
          <button
            name='submitButton'
            type='submit'
            className='bg-blue-500 text-white rounded-r-md px-4 py-2 hover:bg-blue-600 transition duration-300'
            onClick={handleSubmit}>
            {editPost && currentId ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
