

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import'./Signup.css'

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:2000/register', { name, email, password })
      .then(result => {
        console.log(result.data);
        if (result.data.message) {
          navigate('/login');
        }
      })
      .catch(err => console.error(err));
  };
  const handleview=()=>{
    navigate('/login')
  }

  return (
    <div className='signup'>
      <h3 className='signuptitle'>Register</h3>
      <form onSubmit={handleSubmit} className='formsignup'>
        <label>Name:</label>
        <input type='text'placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} /> <br /><br />
        <label>Email:</label>
        <input type='text' placeholder='Enter your EmailId' onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <label>Password:</label>
        <input type='password' placeholder='Set Password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button type="submit" className='signupbutton'>Sign Up</button>
        <p className='signuppara'>Already have an account?</p>
      <button onClick={handleview} className='signupbutton'>Login</button>
      </form>
      
    </div>
  );
}

export default Signup;
