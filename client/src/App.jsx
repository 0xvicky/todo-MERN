import React, {useState, useEffect} from "react";
import "./App.css";
import {Navbar} from "./components";
import {Auth, Home} from "./container";
import {Routes, Route, useNavigate} from "react-router-dom";
import {useLocalStorage} from "@uidotdev/usehooks";
import useFetchUser from "./utils/useFetchUser";
import {useSelector} from "react-redux";
function App() {
  const {storageChange} = useSelector(state => state.todos);
  const user = useFetchUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) return navigate("/");
    return navigate("/auth");
  }, [storageChange]);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/auth'
            element={<Auth />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
