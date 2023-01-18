import React from 'react';
// import UserOrderModal from './UserOrderModal';
const OrderList = ({ order }) => {
    return (
        <>
            <tr >
            <td>
                {order._id}
            </td>
            <td>
                {order.Amount ? order.Amount : 'NaN'}
            </td>
            <td className='text-blue-500 font-bold'>
                {order.Status ? order.Status : 'Processing'}
            </td>
            <td>
                <label htmlFor={`${order._id}`}
                    className="btn btn-sm font-bold rounded-box">View</label>

            </td>
            </tr >
            <div>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id={`${order._id}`} className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative text-center">
                        <label htmlFor={`${order._id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='w-full mx-2'>
                            <h2 className='text-color text-2xl font-bold mb-2'>Order Details</h2>
                            <div className='border shadow'>
                                <br />
                                <h2 className='text-color font-bold mb-2'>Order id: {order._id}</h2>
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
                                        {order.Products.map(product => <tr>
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
                                        <span className='text-color'>Email:</span> {order.Address.Email}<br />
                                        <span className='text-color'>Name:</span> {order.Address.Name}<br />
                                        <span className='text-color'>Phone:</span> {order.Address.Phone} <br />
                                        <span className='text-color'>Country:</span> {order.Address.Country}<br />
                                        <span className='text-color'>City:</span> {order.Address.City}<br />
                                        <span className='text-color'>Thana:</span> {order.Address.Thana}<br />
                                        <span className='text-color'>Post Code:</span> {order.Address.Postcode}<br />
                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;