import React from "react";
import {setStorageChange} from "../../store/todos/todoSlice";
import {useDispatch} from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    dispatch(setStorageChange());
  };

  return (
    <div>
      <nav className='bg-gradient-to-r from-[#3494e6] to-[#ec6ead] p-4 w-full'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Left side - Todo App heading */}
          <h1 className='text-white text-2xl font-bold'>Todo App</h1>

          {/* Right side - Circular image and Sign Out button */}
          <div className='flex items-center'>
            {/* Circular image */}
            <img
              className='w-10 h-10 rounded-full border-2 border-white mr-4'
              src='your_image_url_here'
              alt='User Avatar'
            />

            {/* Sign Out button */}
            <button
              className='bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition duration-300'
              onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
