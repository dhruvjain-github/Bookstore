import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from "axios"
import toast from 'react-hot-toast';


function Signup() {

    const location=useLocation()
    const from=location.state?.form?.pathname || "/"
    const navigate=useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }

        await axios.post("https://bookstore-wkha.onrender.com/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Singup Successful')
                    setTimeout(() => {
                        navigate(from,{replace:true})
                    }, 1000);
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user))
            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("Error :"+ err.response.data.message)
                }
            })
    };

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Sign up</h3>

                        {/* Name */}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700">Fullname</label>
                            <input
                                type="text"
                                id="signup-name"
                                placeholder="Enter your fullname"
                                className="w-80 px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className="text-xs text-red-600 mt-1 block">This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="signup-email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-xs text-red-600 mt-1 block">This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-2">
                            <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="signup-password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-pink-500"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-xs text-red-600 mt-1 block">This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className="flex justify-around mt-6">
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Sign up
                            </button>
                            <p>
                                Have an account?
                                <button
                                    type="button"
                                    className="underline text-blue-500 cursor-pointer"
                                    onClick={() => {
                                        document.getElementById("my_modal_3").showModal();
                                    }}
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                    {/* Move the Login component outside of the <p> element */}
                    <Login />
                </div>
            </div>
        </div>
    );
}

export default Signup;
