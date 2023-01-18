import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import loginImg from '../../assest/images/login-img2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { googleSignIn,login } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [submitError, setsubmitError] = useState('');
    const provider = new GoogleAuthProvider()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
    }

    const handleSignIn = (data)=>{
        setsubmitError(' ')
        login(data.email, data.password)
        .then(result =>{
            // const user = result.user;
            toast.success('login successful')
            document.getElementById('loginForm').reset()
            navigate(from, { replace: true });
        })
        .catch(err =>{
            console.log(err)
            setsubmitError(err.message)
        })
    }

    
    return (
        <section className=" p-16">
            <div className="px-6 text-gray-800">
                <div className="flex justify-center items-center  g-6" >

                    <div className=" p-6 w-full lg:w-1/2 border shadow-md">
                        <div className="w-full lg:w-1/3 mx-auto pb-4"  >
                            <img
                                src={loginImg}
                                className="w-full"
                                alt="Sample"
                            />
                        </div>
                        <h2 className='text-2xl font-bold text-color mb-6'>Please Login</h2>
                        <form onSubmit={handleSubmit(handleSignIn)} id='loginForm'>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="email" {...register("email", {
                                    required: true
                                })} className="input input-bordered w-full " />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Password</span></label>
                                <input type="password" {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                })} className="input input-bordered w-full " />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>

                            <div className="text-center lg:text-left">
                                <input className='btn primary-color border-0 w-full my-4' value="Login" type="submit" />
                                {submitError && <p className='text-red-600'>{submitError}</p>}
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <Link to='/register' className="text-amber-500 hover:text-red-700 transition duration-200 ease-in-out"
                                    > Register</Link
                                    >
                                </p>
                            </div>
                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="flex flex-col items-center justify-center ">
                                <p className="text-xl font-bold m-4">Sign in with</p>
                                <button onClick={handleGoogleSignIn}
                                    type="button"
                                    className="block p-3 primary-color w-1/2 btn font-medium text-xs shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                > Google

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;