import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../components/LoginValidation';
import axios from 'axios';

export default function Login() {
  const [values, setValues] = useState({
    name: '',
    password: '',
  })

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.password === ""){
      axios.post('http://localhost:8081/rock', values)
      .then (res => {
        /*navigate('/admin');*/
        if(res.data === "Success") {
          navigate('/admin');
        }
        else {
          alert("No record as input entered exists");
        }
      })
      .catch(err => console.log(err));
    }
  }

  return (
    <>
      <div>
        <img src="./src/icons/logo.png" alt="Ice Drop" />
        <h5>A SACHET WATER COMPANY INVENTORY SYSTEM</h5>
        <br />

        <form action="" onSubmit={handleSubmit}>
          <div class="form-outline">
            <label class="form-label" for="username_input">
              Username
            </label>
            <br />
            <input type="text" onChange={handleInput} class="form-control" name='name' id="username_input" />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>
          <br />

          <div class="form-outline ">
            <label class="form-label" for="password_input">
              Password
            </label>
            <br />
            <input type="password" onChange={handleInput} class="form-control" name='password' id="password_input" />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <br />
          <br />

          <button 
            type="submit"
            class="submit-btn"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </>
  );
}
