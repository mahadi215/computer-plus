import { useQuery } from '@tanstack/react-query';
// import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { ApiContext } from '../../context/ApiProvider/ApiProvider';
import ProductsCard from './ProductsCard/ProductsCard';

const ProductsByCategorie = () => {
    // const {products, isLoading } = useContext(ApiContext)
    const { id } = useParams()
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categorie/products`);
            const data = res.json();
            return data;
        }
    })
    console.log(id);
    const filters = products.filter(x=> x.cateID === id || x.subCateID === id)
    console.log(products);
    if (isLoading)
        return <progress className="progress w-56 ml-40 my-20"></progress>;

    return (
        <section className=' m-10 p-10 pt-0 bg-base-200 w-full '>
            <h2 className='text-color text-3xl font-bold py-10'>This Categorie Has {filters.length} Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto '>
                {
                    filters.map(product => <ProductsCard product={product} key={product._id}></ProductsCard>

                    )
                }
            </div>
        </section>
    );
};

export default ProductsByCategorie;