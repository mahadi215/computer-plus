import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../../../context/ApiProvider/ApiProvider';

const CategoriesList = () => {
    const { mainCategories, subCategories, refetch } = useContext(ApiContext)
    return (
        <div>
             <div className="overflow-auto w-full h-96 border">
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
                        {subCategories.map((subCategorie, i) => <tr key={i}>
                            <th>{i}</th>
                            <td>{subCategorie.name}</td>
                            <td>{subCategorie.categorie_id}</td>
                            <td><Link className='btn btn-xs'>edit</Link></td>

                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoriesList;