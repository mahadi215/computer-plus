import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllProducts = () => {
    const { data: products = [],  isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allProducts');
            const data = res.json();
            return data;
        }
    })

    // delete product ............. 
    const handleDeleteCate = item => {
        fetch(`http://localhost:5000/product/delete/${item._id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('access token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    toast.success(`${item.name} deleted successfully`)
                    refetch()
                }
            })
    }

    if (isLoading)
        return <progress className="progress w-56 ml-40 my-20"></progress>;
    return (
        <div className='m-4 w-full'>
            <h2 className='text-color my-4 font-bold'> Total Products: {products.length}</h2>
            <div className="overflow-auto h-96 w-full">
                <table className="table w-full border">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product=><tr key={product._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {product.productName}
                                </td>
                                <td>{product.brand}</td>
                                <td>{product.price} $</td>
                                <th>
                                    <button onClick={()=>{handleDeleteCate(product)}} className="btn btn-warning btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;