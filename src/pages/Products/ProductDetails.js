import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
// import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider/CartProvider';
// import { ApiContext } from '../../context/ApiProvider/ApiProvider';

const ProductDetails = () => {
    const {handleAddToCart} = useContext(CartContext)
    const {id} = useParams()
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allProducts/${id}`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading)
        return <progress className="progress w-56 ml-40 my-20"></progress>;
    
    // console.log(id);
    const getProduct = products.find(x=> x._id === id)
    console.log(getProduct);
     const {productName, image, price,description,cpu,screen,ram,storage,brand} = getProduct && getProduct
    return (
        <div className='m-10 flex justify-center items-center'>
            <div className=" grid grid-cols lg:grid-cols-2 md:grid-cols-2 items-center bg-base-100 shadow w-full lg:w-2/3 border ">
                <img className='w-80 h-80 m-2' src={image && image} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title text-2xl">{productName}</h2>
                    <p><strong>Price : {price}$</strong></p>
                    {cpu && <p><strong>CPU : {cpu}</strong></p>}
                    {ram && <p><strong>RAM : {ram}</strong></p>}
                    {storage && <p><strong>Storage : {storage}</strong></p>}
                    {screen && <p><strong>Screen : {screen}</strong></p>}
                    {brand && <p><strong>Brand : {brand}</strong></p>}
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-4">
                        <button onClick={() => handleAddToCart(getProduct)} className="btn btn-primary">Add to cart</button >
                        <Link  className="btn btn-primary">Buy Now</Link >
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ProductDetails;