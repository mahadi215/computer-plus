import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CartContext } from '../../context/CartProvider/CartProvider';

const CartItem = ({ product, refetch,quantity, handleRemove}) => {
    const {increment, decrement} = useContext(CartContext)

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div> {product.productName}</div>
                </div>
            </td>
            <td>{product.price} $</td>
            <td className='flex'>
                <button disabled={product.quantity === 1} onClick={()=>{decrement(product._id)}} className='btn btn-xs' >-</button>
                <b className=' mx-2'>{product.quantity}</b>
                <button onClick={()=>{increment(product._id)}} className='btn btn-xs'>+</button>
            </td>
            <td>{product.price * product.quantity} $</td>
            <td>
                <div >
                    <button onClick={() => { handleRemove(product._id) }} className="btn btn-warning btn-xs">Remove</button>
                </div>
            </td>
        </tr >
    );
};

export default CartItem;