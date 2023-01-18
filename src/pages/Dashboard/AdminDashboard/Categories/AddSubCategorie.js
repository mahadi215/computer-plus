import React, { useContext, } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../../../context/ApiProvider/ApiProvider';


const AddSubCategorie = () => {
    const { mainCategories, subCategories, refetch } = useContext(ApiContext)

    // const subs = mainCategories.filter(sub => sub.subCategorie)
    // const sub = subs.map(x=> x.subCategorie).map(y=> y)
    // const x = sub.map(x=>x)
    // console.log(sub);
    const { register, handleSubmit } = useForm()
    // add subcategorie 
    const handleSubCategorieAdd = (data) => {
        const product = {
            name: data.subCategorie,
            categorie_id: data.Categorie,
        }
        console.log(product);
        fetch('http://localhost:5000/subCategories/addsub', {
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
                    toast.success('Categorie Added confirmed');
                    document.getElementById('form').reset()
                    // navigate('/dashboard/myproduct')
                    refetch()
                }
                else {
                    toast.error(PostData.message);
                }
            })
    }

    // delete subcategorie 
    // const handleDeleteCate = cate => {
    //     fetch(`http://localhost:5000//delete/${cate._id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             // authorization: `bearer ${localStorage.getItem('access token')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {

    //                 toast.success(`${cate.name} deleted successfully`)
    //                 refetch()
    //             }
    //         })
    // }
    return (
        <section className='my-8 flex justify-between'>
            <div className='flex justify-center items-center m-10'>
                <div className='w-100 border-2 font-bold p-7'>
                    <h2 className='text-center text-color font-bold'>Add Sub Categorie</h2>
                    <form onSubmit={handleSubmit(handleSubCategorieAdd)} id='form'>
                        <div className='lg:grid lg:grid-cols-2 gap-6 my-2'>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Select Main Categorie</span></label>
                                <select className="select select-bordered w-full max-w-xs"
                                    {...register("Categorie", {
                                        required: "Product Categorie is Required"
                                    })}
                                >
                                    {mainCategories.map((mainCategorie, index) => <option
                                        key={index}
                                        value={mainCategorie._id}>{mainCategorie.name}</option>)}
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Sub Categorie</span></label>
                                <input className="input input-bordered w-full max-w-xs"
                                    {...register("subCategorie", {
                                        required: "Product Sub Categorie is Required"
                                    })} >

                                </input>
                            </div>
                        </div>
                        <input className='btn primary-color border-0 w-full  mt-4' value="Add" type="submit" />
                    </form>
                </div>
            </div>

            <div className="overflow-auto w-1/2 h-96 border">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Main Categorie</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subCategories.map((Cate, i) => <tr key={i}>
                            <th>{i}</th>
                            <td>{Cate.name}</td>
                            <td>{Cate.categorie_id}</td>
                            <td><Link className='btn btn-xs'>edit</Link> 
                            {/* <button onClick={()=>{handleDeleteCate(subCategorie)}} className='btn btn-xs btn-warning'>Delete</button> */}
                            </td>

                        </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default AddSubCategorie;