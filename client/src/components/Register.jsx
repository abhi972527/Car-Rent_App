import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../services/carRent';

const Register = () => {
    const navigate = useNavigate();
    const [signUp, { data: userData, error: userDataError, isLoading },] = useSignUpMutation();
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const register = async () => {
        console.log("🚀 ~ file: Register.jsx:13 ~ Register ~ input:", input)
        try {
            // const formData = new FormData();
            // formData.append('name', input.name);
            // formData.append('email', input.email);
            // formData.append('password', input.password);

            // console.log("🚀 ~ file: Register.jsx:26 ~ register ~ formData:", formData)
            const response = await signUp({
                "name": input.name,
                "email": input.email,
                "password": input.password
            });
            console.log("🚀 ~ file: Register.jsx:30 ~ register ~ response:", response)
            if(response.data.status == 200) {
                navigate("/login")
            }
        } catch (error) {
            console.log("🚀 ~ file: Register.jsx:26 ~ register ~ error:", error)
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (userDataError) {
        return <div>An error occurred</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center bg-white p-6 mx-auto">
            <div className="flex items-center">
                {/* <button
                    type="button"
                    className="flex p-2.5 text-lg border-2 hover:border-primary rounded-full"
                >
                    <BiLeftArrowAlt className="text-sm sm:text-2xl hover:text-primary" />
                </button> */}
                <span className="text-sm sm:text-2xl ml-4">
                    We are happy to join us !{' '}
                    <Link to="/" className="text-primary underline underline-offset-8">
                        Go Renting
                    </Link>
                </span>
            </div>
            <div className="mx-0 sm:mx-16">
                {/* login section */}
                <div className="flex-col">
                    <div className="w-full bg-white-100 rounded-lg shadow p-8 my-12">
                        <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl ">
                                Register Your Account
                            </h1>

                            {/* <form
                                onSubmit={handleSubmit(submitForm)}
                                className="space-y-4 md:space-y-6"
                            > */}
                            {/* {error && <Error>{error}</Error>} */}
                            {/* {customError && <Error>{customError}</Error>} */}
                            <div className="form-group">
                                <label
                                    htmlFor="firstName"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Name
                                    <input onChange={handleInputChange}
                                        type="text" name="name" value={input.name}
                                        className="form-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                        required
                                        placeholder="First Name"
                                    />
                                </label>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Your email
                                    <input onChange={handleInputChange}
                                        type="mail" name="email" value={input.email}
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
                            <div className="form-group">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Confirm Password
                                    <input onChange={handleInputChange}
                                        type="password" name="confirmPassword" value={input.confirmPassword}
                                        required
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5"
                                    />
                                </label>
                            </div>
                            <button
                                type="submit" onClick={register}
                                className="button w-full text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Register
                            </button>
                            {/* </form> */}
                            <p className="text-sm font-light text-gray-500">
                                Already have an account?{' '}
                                <Link
                                    to="/login"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;