import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderDetails = () => {
    const order = useLoaderData()
    console.log(order);

    return (
        <div className='w-full mx-16'>
            <h2 className='text-color text-2xl font-bold mb-2'>Order Details</h2>


            {
                order.map(details => <div className='border p-2 shadow' key={details._id}>
                    <br />
                    <h2 className='text-color font-bold mb-2'>Order id: {details._id}</h2>
                    <h2 className='text-color font-bold mb-4'>Amount :</h2>
                    <table className="table w-full px-10 border">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            {details.Products.map(product => <tr>
                                <td>{product.ProductName}</td>
                                <td>{product.Price}</td>
                                <td>{product.Quantity}</td>
                                <td>{product.Quantity * product.Price}</td>
                            </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='flex justify-center'>
                        <div className='m-4 p-6  border'>
                            <h2 className='text-color font-bold'>Address</h2>
                            <span className='text-color'>Email:</span> {details.Address.Email}<br />
                            <span className='text-color'>Name:</span> {details.Address.Name}<br />
                            <span className='text-color'>Phone:</span> {details.Address.Phone} <br />
                            <span className='text-color'>Country:</span> {details.Address.Country}<br />
                            <span className='text-color'>City:</span> {details.Address.City}<br />
                            <span className='text-color'>Thana:</span> {details.Address.Thana}<br />
                            <span className='text-color'>Post Code:</span> {details.Address.Postcode}<br />
                        </div>
                        <div className='flex flex-col justify-center items-start my-4'>
                        <button className='btn btn-success text-white mb-4'>Shipping</button>
                        <button className='btn btn-info text-white'>Print Recept</button>
                    </div>
                    </div>
                    

                </div>)
            }
        </div>
    );
};

export default OrderDetails;