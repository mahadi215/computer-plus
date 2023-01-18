import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import registerimg from '../../assest/images/registerIMG.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUPError] = useState('');
    const handleSignUp = (data) => {
        const email = data.email;
        const pwd = data.password;
        // console.log(email,pwd);
        createUser(email, pwd)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('rgister succesfull');
            document.getElementById('signUpForm').reset()
        })
        .catch(err =>{
            setSignUPError(err)
        })
    }

    return (
        <div className='my-8 flex justify-center items-center'>
            <div className='w-96 lg:w-1/2 border-2 shadow-md font-bold p-7'>
                <div className="w-full lg:w-1/3 mx-auto pb-4"  >
                    <img
                        src={registerimg}
                        className="w-full"
                        alt="Sample"
                    />
                </div>
                <h2 className='text-2xl text-center mb-2 font-bold text-color'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} id='signUpForm'>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
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
                    <input className='btn primary-color border-0 w-full my-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-amber-500' to="/login">Please Login</Link></p>


            </div>
        </div>
    );
};

export default Register;