import React, { } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/DashboardSidbar';
import Footer from '../pages/shared/Footer/Footer';
import Header from '../pages/shared/Header/Header';

const AdminLayout = () => {
    return (
        <section className=''>
            <Header></Header>
           <div className='flex'>
           <Dashboard></Dashboard>
            <div className='flex justify-center w-full my-4'>
            <Outlet className=''></Outlet>
            </div>
           </div>
            <Footer></Footer>
        </section>
    );
};

export default AdminLayout;