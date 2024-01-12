import React, {useState} from "react";
import Input from "./components/Input";

const Auth = () => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = () => {
    return;
  };
  console.log(formData);
  return (
    <div className='mt-28 flex items-center justify-center'>
      <form
        className='bg-white p-8 rounded shadow-md w-96'
        onSubmit={handleSubmit}>
        <h2 className='text-2xl font-semibold mb-4'>
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp && (
          <div className='mb-4 flex'>
            <Input
              type='text'
              placeholder='First Name'
              name='firstName'
              value={formData.firstName}
              handleChange={handleChange}
              half={true}
            />
            <Input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              handleChange={handleChange}
              half={true}
            />
          </div>
        )}

        <div className='mb-4'>
          <Input
            type='email'
            placeholder='E-Mail'
            name='email'
            value={formData.email}
            handleChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            handleChange={handleChange}
          />
        </div>
        {isSignUp && (
          <div className='mb-4'>
            <Input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              handleChange={handleChange}
            />
          </div>
        )}

        <button
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300'
          type='submit'
          onClick={handleSubmit}>
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className='text-blue-500 font-semibold px-2 rounded'
            onClick={e => {
              e.preventDefault();
              setIsSignUp(prev => !prev);
            }}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
