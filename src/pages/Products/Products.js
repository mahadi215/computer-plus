import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCard from './ProductsCard/ProductsCard';

const Products = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allProducts');
            const data = res.json();
            return data;
        }
    })

    if (isLoading)
        return <progress className="progress w-56 ml-40 my-20"></progress>;


    return (
        <section className=' my-10 p-10 bg-base-200 w-full '>
            <h2 className='text-color text-3xl font-bold my-6'>All Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto '>
                {
                    products.map(product => <ProductsCard product={product} key={product._id}>

                    </ProductsCard> )
                }
            </div>
        </section>
    );
};

export default Products;