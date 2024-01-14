import React, {useState} from "react";
import Input from "./components/Input";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {setStorageChange} from "../../store/todos/todoSlice";
import {signInAction, signUpAction} from "../../actions/user";
import toast from "react-hot-toast";

const Auth = () => {
  const dispatch = useDispatch();
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
  const handleSubmit = e => {
    e.preventDefault();
    try {
      if (isSignUp) {
        for (let field in formData) {
          if (formData[field] === "") {
            return toast.error("Empty Fields are not allowed");
          }
        }
        dispatch(signUpAction(formData, dispatch));
      } else {
        if (formData["email"] === "" || formData["password"] === "") {
          return toast.error("Empty Fields are not allowed");
        }
        // console.log("sign in is ther");
        dispatch(signInAction(formData, dispatch));
      }
      toast.success("User LoggedIn Successfully !");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSuccess = ({credential}) => {
    const userData = jwtDecode(credential);
    userData.token = credential;
    localStorage.setItem("user", JSON.stringify(userData));
    dispatch(setStorageChange());
    toast.success("User LoggedIn Successfully !");
    // console.log(res);
  };

  return (
    <div className='mt-28 flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md w-96 flex flex-col justify-center space-y-6'>
        <form
          className='flex flex-col justify-center'
          onSubmit={handleSubmit}>
          <h2 className='text-2xl font-semibold mb-4'>
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          {isSignUp && (
            <div className='mb-4 flex space-x-2'>
              <Input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={formData.firstName}
                handleChange={handleChange}
              />
              <Input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={formData.lastName}
                handleChange={handleChange}
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
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className='mx-auto'>
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
        <button className='mx-auto mt-3'>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_CLIENT_ID}>
            <GoogleLogin
              onSuccess={res => {
                handleSuccess(res);
              }}
              onError={error => {
                console.log(`Error occured while logging in with google:${error}`);
              }}></GoogleLogin>
          </GoogleOAuthProvider>
        </button>
      </div>
    </div>
  );
};

export default Auth;
