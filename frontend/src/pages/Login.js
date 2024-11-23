


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2000/login', { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data.message === 'Login successful') {
          navigate('/home');
        } else {
          alert(result.data.error || 'Login failed');
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className='signup'>
       <h2 className='signuptitle'>Hello there Welcome Back!</h2>
      <h3 className='signuptitle'>Login</h3>
      <form onSubmit={handleSubmit} className='formsignup'>
        <label>Email:</label>
        <input type='text' placeholder='Enter your EmailId' onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <label>Password:</label>
        <input type='password' placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button type='submit' className='signupbutton'>Submit</button>
      </form>
    </div>
  );
}

export default Login;
