import React from 'react';

const UserOrderModal = ({order}) => {
console.log(order);
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-center">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Confirm Your Order</h3>
                    <br />

                    <div className='w-full mx-16'>
                        <h2 className='text-color text-2xl font-bold mb-2'>Order Details</h2>


                        
                            {/* // order?.map(details =>  */}
                            <div className='border p-2 shadow' 
                            // key={details._id}
                            >
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
        </>
    );
};

export default UserOrderModal;