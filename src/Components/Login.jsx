import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [firstName, setFirstName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
  };

  return (
    <div>
      <div className='w-full bg-white shadow-lg mt-40 max-w-md p-8 space-y-3 rounded-xl mx-auto dark:text-gray-600'>
        <h1 className='text-2xl font-bold text-center'>Login</h1>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div className='space-y-1 text-sm'>
            <label htmlFor='username' className='block dark:text-gray-400'>
              Username: {firstName}
            </label>
            <input
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
              name='username'
              id='username'
              placeholder='Username'
              className='w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
            />
          </div>

          <button
            type='submit'
            className='block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
