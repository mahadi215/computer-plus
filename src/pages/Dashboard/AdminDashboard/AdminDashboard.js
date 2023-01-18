import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../../context/ApiProvider/ApiProvider';
import OrderAdmin from './OrderAdmin/OrderAdmin';

const AdminDashboard = () => {

    const { mainCategories, products } = useContext(ApiContext)
    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/orders/admin');
            const data = res.json();
            return data;
        }
    })
    return (
        <section className='mx-10 my-4 w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 m-6'>
                {/* <div className='p-8 primary-color text-center rounded-md'>
                <h2 className='text-center font-bold mb-6'>USER </h2>
                <Link className='btn btn-sm px-4 rounded'>See Details</Link>
            </div> */}
            <div className='p-8 primary-color text-center rounded-md'>
                <h2 className='text-center font-bold mb-6'>Products : {products.length} </h2>
                <Link to='/dashboard/allProducts' className='btn btn-sm px-4 rounded'>See Details</Link>
                <Link to='/dashboard/addProduct' className='btn btn-sm px-4  ml-4 rounded'>Add Product</Link>
            </div>
            {/* <div className='p-8 primary-color text-center rounded-md'>
                <h2 className='text-center font-bold mb-6'>Categores : {mainCategories.length}</h2>
                <Link to='' className='btn btn-sm px-4 rounded'>See Details</Link>
            </div> */}
            <div className='p-8 primary-color text-center rounded-md'>
                <h2 className='text-center font-bold mb-6'>Orders {orders.length}</h2>
                <Link className='btn btn-sm px-4 rounded'>See Details</Link>
            </div>
            </div>

            <OrderAdmin></OrderAdmin>
           
        </section>



    );
};

export default AdminDashboard;