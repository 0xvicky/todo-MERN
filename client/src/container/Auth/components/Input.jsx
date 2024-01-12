import React from "react";

const Input = ({type, placeholder, value, handleChange, half, name}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        autoComplete='off'
        className={`mt-1 p-2 ${
          half ? "w-3/4" : "w-full"
        } border rounded focus:outline-none focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
