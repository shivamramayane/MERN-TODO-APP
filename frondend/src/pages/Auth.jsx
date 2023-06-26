import React from 'react'
// import Layout from '../component/Layout'
import classes from './Auth.module.scss';
import  { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/nav/Navbar';
import TaskList from '../component/task/TaskList';
function Auth() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/auth');
    }
  }, [auth, navigate]);

  return (
 <>
      <div className={classes.form_container}>
        {/* <Login />
        <Register /> */}
        <Navbar/>
        
      </div>
      <div className={classes.form_container}>
        {/* <Login />
        <Register /> */}
     <TaskList/>
        
      </div>
      
      </>
  );
}

export default Auth