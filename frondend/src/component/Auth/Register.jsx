import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import classes from './AuthForm.module.scss';
import { Link } from 'react-router-dom';

function Register() {
const navigate =useNavigate()
  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    if(user.name && user.email && user.password ==="")
    return toast.error("please fill the")
    try {
      await axios.post('http://localhost:3001/api/auth/register', user);
      toast.success('Registered successfully');
      navigate('/login')
      
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.title}>Register</h1>
      <form className={classes.authForm} onSubmit={register}>
        <label htmlFor="name">
          Full Name:
          <input name="name" type="text" placeholder="Full Name" required />
        </label>
        <label htmlFor="email">
          email:
          <input name="email" type="email" placeholder="email" required />
        </label>
        <br />
        <label htmlFor="password">
          password:
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />
        <button type="submit" >Register</button>
        <Link to='/login'>
          <button>login</button>
        </Link>
      </form>
    </div>
  );
}

export default Register;