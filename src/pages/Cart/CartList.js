
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiProvider/ApiProvider';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { CartContext } from '../../context/CartProvider/CartProvider';
import CartItem from './CartItem';

const Cart = () => {
    const { isLoading, user } = useContext(AuthContext)
    const { products } = useContext(ApiContext)
    const { carts, setCarts, quantity, cartItems, setCartItems } = useContext(CartContext)
    
    // const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        let addedCart = [];
        for (const id of carts) {

            const filterCart = products.find(x => x._id === id.product_id)
            if (filterCart) {
                filterCart.quantity = id.quantity
                addedCart.push(filterCart)
            }
        }
        setCartItems(addedCart)
        console.log(cartItems);
    }, [products, quantity])

    let totalItems = 0;
    let totalPrice = 0;
    let shipping = 10;
    // let subtotal = totalPrice + shipping;
    
    for(const product of cartItems){
        totalPrice = totalPrice + product.price * product.quantity;
        totalItems = totalItems + product.quantity;
    }
    const subTotal = totalPrice + shipping;
    const handleRemove = (id)=>{
    //     console.log(id);
    //     let rest;
    //     const filterCart = carts?.filter(x => x.product_id !== id)
    //     if(filterCart){
    //         // rest.push(filterCart)
    //         rest = [rest]
    //     }
    //    setCarts(rest)
    }

    if (isLoading)
        return <progress className="progress w-56 ml-40 my-20"></progress>;

    return (
        <div>
        {
            carts.length? <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className="overflow-auto  m-10 col-span-2">
                <table className="table w-full px-10 border">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map(product => <CartItem
                                key={product._id}
                                product={product}
                                handleRemove={handleRemove}>
                            </CartItem>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className='bg-base-200 p-10 m-10'>
                <h2 className='text-center mb-2 text-2xl font-bold'>Order Summary</h2>
                <ul className='font-bold'>
                    <li className='mb-2'>Total Items: {totalItems}</li>
                    <li>total Price: {totalPrice}</li>
                    <li className='my-2'>Shipping: {shipping}</li>
                    <li>Sub Total: {subTotal}</li>
                </ul>
                <Link to='/checkOut'
                // {`${user?.email ? '/checkOut' : '/login' }`}  
                className='btn mt-4 primary-color w-full'>Check Out</Link>
            </div>
        </div> 
        : 
        <div className='p-16'>
            <h2 className='text-color text-3xl font-bold'>Your cart is empty!</h2>
        </div>
        }
        </div>

    );
};

export default Cart;