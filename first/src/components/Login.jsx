import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Validation from './LoginValidation'; // Adjust the import path if needed

const Login = () => {
  const [values, setValues] = useState({ userid: '', password: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // If there are no validation errors, proceed with the API call
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8000/login', values)
        .then(res => {
          if (res.data === "success") {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', values.userid); // Store username
            navigate('/home');  // Updated path to match the route
          } else if (res.data === "user_not_found") {
            // Handle user not found case
            setErrors({ server: 'User does not exist' });
          } else {
            // Handle other server-side errors
            setErrors({ server: 'Invalid credentials' });
          }
        })
        .catch(err => {
          console.log(err);
          setErrors({ server: 'An error occurred. Please try again later.' });
        });
    }
  };

  const handleReset = () => {
    setValues({ userid: '', password: '' });
    setErrors({});
  };

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/home');  // Updated path to match the route
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <div className='shadow-black bg-green-800 border border-green-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
          <h1 className='text-4xl font-bold text-center text-white mb-6'>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='relative my-4'>
              <input
                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer'
                onChange={handleInput}
                placeholder=" "
                type="text"
                name="userid"
                id="userid"
                value={values.userid}
              />
              <label className='absolute text-sm text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold' htmlFor="userid">User ID</label>
              {errors.userid && <span className='text-xs text-red-700'>{errors.userid}</span>}
            </div>
            <div className='relative my-4'>
              <input
                className='block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-white focus:border-green-600 peer'
                onChange={handleInput}
                placeholder=" "
                type="password"
                name="password"
                id="password"
                value={values.password}
              />
              <label className='absolute text-sm text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-semibold' htmlFor="password">Password</label>
              {errors.password && <span className='text-xs text-red-700'>{errors.password}</span>}
            </div>
            {errors.server && <div className='text-red-700 mb-4'>{errors.server}</div>}
            <button
              type='submit'
              className='w-full bg-green-300 py-2 text-[18px] mt-2 rounded hover:bg-white transition-colors duration-300 font-semibold'
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleReset}
              className='w-full text-[18px] mt-2 rounded bg-green-300 py-2 hover:bg-white transition-colors duration-300 font-semibold'
            >
              Reset
            </button>
          </form>
        </div>
      </main>
      <Footer  className="bg-transparent" />
    </div>
  );
};

export default Login;