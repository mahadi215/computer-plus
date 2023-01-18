
import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';


export const CartContext = createContext()
const CartProvider = ({ children }) => {
    const [Address, setAddress] = useState()
    const [quantity, setQuantity] = useState(1)
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("items")) || []);
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(carts));
        // console.log(`Saved ${carts.length} carts to localstorage`);
      }, [carts, quantity]); //dependency is carts

    const handleAddToCart = (product) => {
        const cartInfo = {
            product_id: product._id,
            quantity: 1
        }
        console.log(cartInfo);
        let newCart;
        const existingItem = carts?.find(x => x.product_id === product._id);

        if (existingItem) {
            toast.error('item already added! you can incress quantity in cart')
            
        } 
        else{ newCart = [...carts, cartInfo]
        setCarts(newCart)
        }
       
       
    }

    const increment = (id) => {
        // let newCart;
        const qty = carts.find(x => x.product_id === id)
        if (qty) { 
          setQuantity(quantity + 1)
          qty.quantity += 1
        }
        console.log(qty);
        // console.log(cartItems);
     }
     const decrement = (id) => {
        const qty = carts.find(x => x.product_id === id)
        if (qty) { 
          setQuantity(quantity - 1)
          qty.quantity -= 1
        }
        console.log(qty);
     }
    let total = 0;
    // for (const product of carts) {
    //     total = parseInt(total) + parseInt(product.price);
    // }
    const cartValue = {
        carts,
        setCarts,
        handleAddToCart,
        total,
        increment,
        decrement,
        quantity,
        Address,
        setAddress,
        cartItems,
         setCartItems
    }
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;