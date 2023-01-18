// import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiProvider/ApiProvider';
import SubCategorie from './SubCategorie';

const CategoriMenu = () => {
    const { mainCategories, isLoading } = useContext(ApiContext)
    // const [subcateId, setSubcateId] = useState()
    
// console.log(subCategories);
    if (isLoading)
        return <progress className="progress w-56 m-auto my-20"></progress>;

    return (
            <ul className="menu menu-compact bg-base-200 w-56 h-full rounded-box">
                <h2 className='text-2xl p-2 text-center primary-color rounded'>CATEGORIES</h2>
                {
                    mainCategories.map(categorieMenu =>
                        <li key={categorieMenu._id} tabIndex={0}>
                            <Link to={`/categorie/products/${categorieMenu._id}`}>
                                {categorieMenu.name}
                            </Link>
                            {
                             <SubCategorie id={categorieMenu._id}></SubCategorie>
                            }
                        </li>
                    )
                }
            </ul>
    );
};

export default CategoriMenu;