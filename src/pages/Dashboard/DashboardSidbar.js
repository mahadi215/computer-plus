import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import AdminDashboard from './AdminDashboard/AdminDashboard';

const Dashboard = () => {
    return (
                <div className=" w-auto mr-16 bg-gray-800 ">
                    <ul className="menu p-4 bg-base-400  text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link>Orders</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 shadow bg-gray-800">
                                <li><Link to={'/dashboard/allProducts'} className=' px-4 rounded '>All Products</Link></li>
                                <li><Link to={'/dashboard/addProduct'} className=' px-4 rounded'>Add Product</Link></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link>
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 shadow bg-gray-800">
                                <li><Link to='/dashboard/categoriesList' className=' px-4 '>Categories list</Link></li>
                                <li><Link to='/dashboard/addCategories' className=' px-4 '>Main categories</Link></li>
                                <li><Link to='/dashboard/addSubCategories' className='px-4 '>Sub Categories</Link></li>
                            </ul>
                        </li>
                        <li><Link>users</Link></li>
                    </ul>

                </div>
    );
};

export default Dashboard;