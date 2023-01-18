import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/logo/computer-plus-logo-01.png'
import profile from '../../../assest/images/profile.jpg'
import { ApiContext } from '../../../context/ApiProvider/ApiProvider';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SubCategorie from '../../CategoriMenu/SubCategorie';
import cartIcon from '../../../assest/images/cart-icon.jpg'
import './Header.css';
import { CartContext } from '../../../context/CartProvider/CartProvider';

const Header = () => {
    const { mainCategories, } = useContext(ApiContext)
    const { user, logOut } = useContext(AuthContext);
    const { carts } = useContext(CartContext);
    // console.log(carts);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

    // console.log(user);
    return (
        <div className='sticky z-50 top-0'>
            <div className="navbar bg-base-100 flex-row lg:flex md:flex justify-around ">
                <div className=" ">

                    <marquee className=""> Call for any inquary 01869628411</marquee>
                </div>
                <div className="navbar-center gap-2 bg-dark">
                    
                    {user ?
                        <div className="dropdown dropdown-end ml-10">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user.photoURL ? <img src={user.photoURL} alt='' /> : <img src={profile} alt='' />}
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/dashboard/user' className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to='/login' className='btn btn-sm'>Login</Link>
                    }

                    <div className="indicator">
                        {
                        
                             <span className="indicator-item badge badge-info text-white">{carts.length}</span>
                        }
                        <Link to='/cart'><img className='w-8' src={cartIcon} alt="" /></Link>
                    </div>
                </div>
            </div>
            {/* nav-secend */}
            <div className="navbar  px-6 primary-color ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow primary-color rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Categories
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className='menu primary-color px-1'>
                                    {
                                        mainCategories.map(categorieMenu =>
                                            <li key={categorieMenu._id} tabIndex={0}>
                                                <Link to={`/categorie/products/${categorieMenu._id}`}>
                                                    {categorieMenu.name}
                                                </Link>
                                                {
                                                    <SubCategorie id={categorieMenu._id}></SubCategorie>
                                                }
                                            </li>
                                        )
                                    }
                                </ul>
                            </li>
                            <li><Link> Offers</Link></li>
                            <li><Link> About</Link></li>
                            <li><Link> Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="bg-white ml-8 px-4 rounded"><img className='w-10 h-10' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Categories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className='menu primary-color px-1'>
                                {
                                    mainCategories.map(categorieMenu =>
                                        <li key={categorieMenu._id} tabIndex={1}>
                                            <Link to={`/categorie/products/${categorieMenu._id}`}>
                                                {categorieMenu.name}
                                            </Link>
                                            {
                                                <SubCategorie id={categorieMenu._id}></SubCategorie>
                                            }
                                        </li>
                                    )
                                }
                            </ul>
                        </li>
                        <li><Link>Offers</Link></li>
                        <li><Link> About</Link></li>
                        <li><Link> Contact</Link></li>
                    </ul>
                </div>
                
                <div className="navbar-end">
                <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <Link className='btn btn-sm btn-bg-gray invisible  lg:visible' to='/dashboard/admin'>Dashboard</Link>
                </div>
            </div>
        </div>

    );
};

export default Header;