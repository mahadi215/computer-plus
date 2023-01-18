// import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../context/ApiProvider/ApiProvider';

const SubCategorie = ({id}) => {
    const {subCategories}=useContext(ApiContext)
    //  sub categorie api...... 
    const filterSubCate = subCategories.filter(x => x.categorie_id === id)
    //  const {data: subCategories = []} = useQuery({
    //     queryKey: ['subCategories'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/subCategories/${id}`);
    //         const data = res.json();
    //         return data;
    //     },
      
    // });
    
    // console.log(subCategories);
    return (
        <ul className="p-2 shadow primary-color">
            {/* {subCategories? subCategories.map(subCtaegorie=> <li key={subCtaegorie._id}><Link>{subCtaegorie.name}</Link></li>): <></>} */}
            {filterSubCate && filterSubCate.map(subCate=> <li key={subCate._id}><Link to={`/categorie/products/${subCate._id}`}>{subCate.name}</Link></li>)}
       
        
    </ul>
    );
};

export default SubCategorie;