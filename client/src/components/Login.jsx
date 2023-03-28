import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '../services/carRent';
import { setUser } from '../app/features/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [logIn, { data: userData, error: userDataError, isLoading },] = useLoginMutation();
  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const login = async () => {
    console.log("🚀 ~ file: Register.jsx:13 ~ Register ~ input:", input)
    try {
      const response = await logIn({
        "email": input.email,
        "password": input.password
      });
      console.log("🚀 ~ file: Register.jsx:30 ~ register ~ response:", response)
      dispatch(setUser(response.data));
    } catch (error) {
      console.log("🚀 ~ file: Register.jsx:26 ~ register ~ error:", error)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (userDataError) {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 mx-auto">
      <div className="flex items-center">
        <span className="text-sm sm:text-2xl ml-4">
          We are happy to join us !{' '}
          <Link to="/" className="text-primary underline underline-offset-8">
            Go Renting
          </Link>
        </span>
      </div>
      <div className="mx-0 sm:mx-16">
        <div className="flex-col">
          <div className="w-full bg-white-100 rounded-lg shadow p-8 my-12">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl ">
                Login in to your account
              </h1>
              <div className="form-group">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                  <input onChange={handleInputChange}
                    type="email" name="email" value={input.email}
                    className="form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                    required
                    placeholder="Email Address"
                  />
                </label>
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                  <input onChange={handleInputChange}
                    type="password" name="password" value={input.password}
                    required
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                  />
                </label>
              </div>
              <button
                type="submit" onClick={login}
                className="button w-full text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  to="/signUp"
                  className="font-medium text-primary hover:underline "
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;