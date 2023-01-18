import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderAdmin = () => {
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/orders/admin');
            const data = res.json();
            return data;
        }
    })
    if (isLoading)
    return <progress className="progress w-56 ml-40 my-20"></progress>;
    return (
        <div>
            <div className="overflow-auto  m-10 col-span-2">
                <table className="table w-full px-10 border">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Order id</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order._id}>
                                    <td>
                                       {order._id}
                                    </td>
                                    <td>
                                       {}
                                    </td>
                                    <td className='text-blue-500 font-bold'>
                                       {}Processing
                                    </td>
                                    <th>
                                        <Link to={`/dashboard/orderDetails/${order._id}`} className="btn btn-warning btn-xs">View</Link>
                                        <button className="btn bg-red-500 ml-2 btn-xs">Delete</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default OrderAdmin;