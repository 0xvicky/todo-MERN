import React from "react";

const Todo = ({todo, id}) => {
  return (
    <div className='flex items-center justify-between border-b border-gray-300 py-2'>
      {/* Left side - Text of the todo */}
      <p className='text-gray-800 font-semibold'>{todo}</p>
      <p className='text-gray-800'>{id}</p>

      {/* Right side - Edit and Delete buttons */}
      <div className='flex space-x-2'>
        {/* Edit button */}
        <button className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300'>
          Edit
        </button>

        {/* Delete button */}
        <button className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
