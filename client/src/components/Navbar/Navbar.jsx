import React from "react";
import {setStorageChange} from "../../store/todos/todoSlice";
import {useDispatch} from "react-redux";
import useFetchUser from "../../utils/useFetchUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useFetchUser();

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
          {user && (
            <div className='flex items-center space-x-7'>
              <h1 className='text-white font-bold'>{user?.given_name}</h1>
              {/* Circular image */}
              {user?.picture ? (
                <img
                  className='w-10 h-10 rounded-full border-2 border-white mr-4'
                  src={user?.picture}
                  alt={user?.name.chartAt(0)}
                />
              ) : (
                <div className='w-10 h-10 rounded-full border-2 border-white mr-4 flex justify-center items-center text-white  text-2xl'>
                  {user?.name?.charAt(0)}
                </div>
              )}

              {/* Sign Out button */}
              <button
                className='bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition duration-300'
                onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
