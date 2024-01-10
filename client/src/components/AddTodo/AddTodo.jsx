import React from "react";

const AddTodo = () => {
  return (
    <div className='mx-auto'>
      <form className='mt-4'>
        <div className='flex'>
          <input
            type='text'
            placeholder='Add Todo'
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
