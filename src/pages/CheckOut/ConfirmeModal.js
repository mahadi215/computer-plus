import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider/CartProvider';

const ConfirmeModal = () => {
    const {setCarts,cartItems, Address } = useContext(CartContext)
    const navigate = useNavigate()

    let totalItems = 0;
    let totalPrice = 0;
    let shipping = 10;
    // let subtotal = totalPrice + shipping;
    
    for(const product of cartItems){
        totalPrice = totalPrice + product.price * product.quantity;
        totalItems = totalItems + product.quantity;
    }
    const subTotal = totalPrice + shipping;
    let getProducts = [];
    for(const item of cartItems){
        const a = {
        ProductName:item.productName,
        Price: item.price,
        Image:item.image,
        Quantity:item.quantity
    }
        getProducts.push(a)
    }
    console.log(getProducts);
    const handleConfirm = ()=>{
        const order = {
            Address: Address,
            Products: getProducts
        
        }
        fetch('http://localhost:5000/orders/add', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })
                        .then(res => res.json())
                        .then(PostData => {
                            console.log(PostData);
                            if (PostData.acknowledged) {
                                toast.success('Your Order Is Placed');
                                // localStorage.removeItem('items')
                                // const clearCart = [];
                                setCarts([])
                                navigate('/')
                            }
                            else {
                                toast.error(PostData.message);
                            }

                        })
        console.log(order);
    }
    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-center">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Confirm Your Order</h3>
                    <br />
                    {
                        cartItems.map(item => <div key={item._id}
                        className='flex items-center space-x-6 mb-4 p-2 border-b justify-center' >
                            <div className="flex items-center  space-x-3">
                                <div className="avatar tooltip " data-tip={item.productName}>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                {/* <div> {item.productName}</div> */}
                            </div>
                            <div className='font-bold'>Price <br /> {item.price * item.quantity}</div>
                            <div className='font-bold'>Quantity <br />{item.quantity}</div>
                            
                        </div>)
                    }
                    <div >
                    {/* <div className='font-bold'>Shipping: {shipping}</div> */}
                    <div className='font-bold text-color'>Subtotal: ${subTotal}</div>
                        <br />

                    <button onClick={() => { handleConfirm()}} className="btn mx-auto">Confirm</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmeModal;