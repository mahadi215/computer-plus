import React from 'react';
import ConfirmeModal from './ConfirmeModal';

const PaymentType = () => {
    return (
        <div className='p-16'>
            <div className="flex flex-col w-full lg:w-1/3 border mx-auto p-6 py-16 shadow">
                <h2 className='text-2xl font-bold text-color mb-6'>Please Select Payment Type</h2>
                <button className="grid h-20 card primary-color font-bold rounded-box place-items-center btn">Pay with Card</button>
                <div className="divider">OR</div>
                {/* <button className="grid h-20 card primary-color font-bold rounded-box place-items-center"> */}
                    <label htmlFor="my-modal-3"
                     className="btn grid h-20 card primary-color font-bold rounded-box place-items-center">Cash On Delivery</label>
                    {/* </button> */}
            </div>

            <ConfirmeModal></ConfirmeModal>
        </div>
    );
};

export default PaymentType;