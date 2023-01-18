import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import OrderList from './OrderList';


const UserDashboard = () => {
    const { user } = useContext(AuthContext)
    const name = user?.displayName;
    const email = user?.email;
    const { data: myorders = [], isLoading } = useQuery({
        queryKey: ['myorders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders/user/${email}`);
            const data = res.json();
            return data;
        }
    })
    console.log(myorders);
    if (isLoading)
        return <progress className="progress w-56 ml-40 my-20"></progress>;
    return (
        <div className=' m-4'>
            <h2 className='text-color text-2xl'>welcome {name}</h2>
            <div className='my-4'>
                <h2 className='text-xl text-center my-4'>My Orders : {myorders?.length}</h2>
                <table className="table w-full lg:w-2/3 mx-auto px-10 border">
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
                            myorders.map(order =>
                                <OrderList key={order._id} order={order}>

                                </OrderList>
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

export default UserDashboard;