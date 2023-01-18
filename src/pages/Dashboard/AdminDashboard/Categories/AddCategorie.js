import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
// import { Link } from 'react-router-dom';
import { ApiContext } from '../../../../context/ApiProvider/ApiProvider';


const AddCategorie = () => {
    const { mainCategories, refetch } = useContext(ApiContext)
    const { register, handleSubmit } = useForm()

    const handleCategorieAdd = (data) => {
        const product = {
            categorie: data.Categorie,
        }
        // console.log(product);
        fetch('http://localhost:5000/categoriesMenu', {
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
                    refetch()
                }
                else {
                    toast.error(PostData.message);
                }
            })
    }

    // delete categorie 
    const handleDeleteCate = cate => {
        fetch(`http://localhost:5000/mainCategorie/delete/${cate._id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `bearer ${localStorage.getItem('access token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {

                    toast.success(`${cate.name} deleted successfully`)
                    refetch()
                }
            })
    }

    return (
        <section className=' my-8'>
            <div className='flex justify-center mb-10 '>
                <div className='w-full border-2 font-bold p-7'>
                    <h2 className='text-center text-color font-bold'>Add Categorie</h2>
                    <form onSubmit={handleSubmit(handleCategorieAdd)} id='form'>
                        <div className='lg:grid lg:grid-cols-1 gap-6 my-2'>

                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Main Categorie</span></label>
                                <input className="input input-bordered w-full max-w-xs"
                                    {...register("Categorie", {
                                        required: "Product Categorie is Required"
                                    })} >

                                </input>
                            </div>

                        </div>
                        <input className='btn primary-color border-0 w-full  mt-4' value="Add" type="submit" />
                    </form>
                </div>
            </div>

            <div className="overflow-x-auto w-full border">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mainCategories.map((mainCategorie, i) => <tr key={i}>
                            <th>{i}</th>
                            <td>{mainCategorie.name}</td>
                            <td><button className='btn btn-xs'>edit</button> <button onClick={()=>{handleDeleteCate(mainCategorie)}} className='btn btn-xs btn-warning'>Delete</button></td>

                        </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </section>
    );
};

export default AddCategorie;