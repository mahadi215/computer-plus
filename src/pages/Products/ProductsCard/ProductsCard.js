import React, { useContext } from 'react';
// import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { CartContext } from '../../../context/CartProvider/CartProvider';

const ProductsCard = ({ product }) => {
    // const { user } = useContext(AuthContext)
    const {handleAddToCart} = useContext(CartContext)
    // console.log(carts);
    const { productName, image, price, _id } = product
   


return (
    <div className="card card-compact w-full bg-base-100 shadow">
        <Link to={`/product/details/${_id}`}> <figure className='m-2 rounded '><img src={image} className='h-40' alt="Shoes" /></figure></Link>
        <div className="card-body">
            <Link to={`/product/details/${_id}`}><h2 className=" font-bold hover:text-blue-800">{productName}</h2></Link>
            <p className='font-bold'>Price: {price} $</p>
            {/* <p>{cpu}</p> */}
            <div className="card-actions justify-center">
                <button onClick={() => handleAddToCart(product)} className="btn-sm rounded primary-color w-full">Add To Cart</button>
                {/* <button className="btn-sm rounded primary-color">Buy Now</button> */}
            </div>
        </div>
    </div>
);
};

export default ProductsCard;