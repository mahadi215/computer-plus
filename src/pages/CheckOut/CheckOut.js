import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { CartContext } from '../../context/CartProvider/CartProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const { setAddress, Address } = useContext(CartContext)
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [submitError, setsubmitError] = useState('');
    const handleAddress = (data) => {
        setAddress(data);
        
        // console.log(Address);
        navigate('/paymentType')
    }
    return (
        <div>
            <div></div>
            <div className='p-10 mx-10 lg:mx-32 '>
                <h2 className='m-4 text-2xl text-color font-bold'>Add Your Shipping Address</h2>
                <form onSubmit={handleSubmit(handleAddress)} id='AddressForm' className=' '>
                    <div className="form-control w-full lg:w-1/3 mx-auto ">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                         defaultValue={user?.email} readOnly
                        {...register("Email", {required: true})}
                         className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className='w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input type="text" {...register("Name", {
                                required: "Name is required",
                            })} className="input input-bordered w-full " />
                            {errors.Name && <p className='text-red-500'>{errors.Name.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Phone</span></label>
                            <input type="number" {...register("Phone", {
                                required: "Phone is required",
                            })} className="input input-bordered w-full " />
                            {errors.Phone && <p className='text-red-500'>{errors.Phone.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Country</span></label>
                            <input type="text" {...register("Country", {
                                required: "Country is required",
                            })} className="input input-bordered w-full " />
                            {errors.Country && <p className='text-red-500'>{errors.Country.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">City</span></label>
                            <input type="text" {...register("City", {
                                required: "City is required",
                            })} className="input input-bordered w-full " />
                            {errors.City && <p className='text-red-500'>{errors.City.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Thana</span></label>
                            <input type="Phone" {...register("Thana", {
                                required: "Thana is required",
                            })} className="input input-bordered w-full " />
                            {errors.Thana && <p className='text-red-500'>{errors.Thana.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"> <span className="label-text">Post Code</span></label>
                            <input type="number" {...register("Postcode", {
                                required: "Post Code is required",
                            })} className="input input-bordered w-full " />
                            {errors.Postcode && <p className='text-red-500'>{errors.Postcode.message}</p>}
                        </div>
                    </div>


                    <div className="text-center">
                        <input className='btn primary-color border-0 px-16  my-4' value="Next" type="submit" />
                        {submitError && <p className='text-red-600'>{submitError}</p>}

                    </div>



                </form>
            </div>
        </div>
    );
};

export default CheckOut;