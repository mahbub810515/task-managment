import React, { useState } from 'react'
import { Link } from 'react-router'

const SignUp = () => {
    const [details, setDetails] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange=(e)=>{
        setDetails(
           { ...details,[e.target.name]: e.target.value}
        )
        
    }
console.log(details)
    return (
        <div className="bg-black flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-indigo-500 border-2 rounded py-2">
                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">
                    Sign Up for your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm  border-2 border-indigo-500 rounded p-3">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label
                            htmlFor="UserName"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                            User Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}
                                id="username"
                                type="text"
                                name="username"
                                required=""
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-100"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}
                                id="email"
                                type="email"
                                name="email"
                                required=""
                                autoComplete="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}
                                id="password"
                                type="password"
                                name="password"
                                required=""
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-400">
                    already have an account?
                    <Link
                        to="/signin"
                        className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>


    )
}

export default SignUp
