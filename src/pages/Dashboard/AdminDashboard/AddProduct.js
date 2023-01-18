import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ApiContext } from '../../../context/ApiProvider/ApiProvider';

const AddProduct = () => {
    const { mainCategories, subCategories} = useContext(ApiContext)

    const [cateValue, setCateValue] = useState()
    const [subCateValue, setSubCateValue] = useState()
    const filters = subCategories.filter(x => x.categorie_id === cateValue)
   
    const { register, handleSubmit } = useForm()
    const imgKey = process.env.REACT_APP_imgbb_apiKey;

    const handleProductAdd = (data) => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        // console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    const product = {
                        cateID: cateValue,
                        subCateID: subCateValue,
                        name: data.name,
                        img: imgData.data.url,
                        price: data.price,
                        brand: data.brand,
                        desc: data.description
                    }
                    // console.log(product);
                    fetch('http://localhost:5000/allProducts/add', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(PostData => {
                            console.log(PostData);
                            if (PostData.acknowledged) {
                                toast.success('Added confirmed');
                                document.getElementById('form').reset()
                                document.getElementById('select').reset()
                            }
                            else {
                                toast.error(PostData.message);
                            }

                        })
                }
            })




    }
    return (
        <section>
            <div className='flex justify-center items-center my-10'>
                {/* categorie select section  */}
                <div className='w-100 border-2 font-bold p-7'>
                    <h2 className='text-center text-color font-bold'>Select Category</h2>
                    <form id='select'>
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Select Main Categorie</span></label>
                                {/* <h2>{cateValue}</h2> */}
                                <select value={cateValue} onChange={(e) => setCateValue(e.target.value)}
                                    className="select select-bordered w-full max-w-xs">
                                    <option>please select</option>
                                    {mainCategories.map((mainCategorie, index) => <option
                                        key={index}
                                        value={mainCategorie._id && mainCategorie._id}>{mainCategorie.name}</option>)}
                                </select>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Select Sub Categorie</span></label>
                                {/* <h2>{subCateValue}</h2> */}
                                <select value={subCateValue} onChange={(e) => setSubCateValue(e.target.value)}
                                    className="select select-bordered w-full max-w-xs">
                                    <option>please select</option>
                                    {filters && filters.map((subCate, index) => <option
                                        key={index} name='sub'
                                        value={subCate._id}>{subCate.name}</option>)}
                                </select>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
            {/* product form */}
            <div className='flex justify-center items-center my-10'>
                <div className='w-100 border-2 font-bold p-7'>
                    <h2 className='text-center text-color font-bold'>Add a Product</h2>
                    <form onSubmit={handleSubmit(handleProductAdd)} id='form' >
                        <div className='lg:grid lg:grid-cols-3 gap-6 my-2'>


                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Product Name</span></label>
                                <input type="text" {...register("name", {
                                    required: "Product Name is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Product Image</span></label>
                                <input type="file" {...register("img", {
                                    required: "Product Image is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Product Price</span></label>
                                <input type="text" {...register("price", {
                                    required: "Product Price is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>

                            {/* <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">cpu</span></label>
                                <input type='text' className="input input-bordered w-full max-w-xs"
                                    {...register("CPU", {
                                        required: "CPU is Required"
                                    })} >
                                   
                                </input>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Storage</span></label>
                                <input type="number" {...register("Storage", {
                                    required: "Storage  is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Screen</span></label>
                                <input type="text" {...register("Screen", {
                                    required: "Screen size is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div> */}


                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Brand</span></label>
                                <input type="text" {...register("brand", {
                                    required: "Brand is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Description</span></label>
                                <input type="text" {...register("description", {
                                    required: "Description is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div>
                            {/* <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Others Details</span></label>
                                <input type="text" {...register("other", {
                                    required: "Others Details is Required"
                                })} className="input input-bordered w-full max-w-xs" />
                            </div> */}

                        </div>
                        <input className='btn primary-color border-0 w-full  mt-4' value="Add" type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;