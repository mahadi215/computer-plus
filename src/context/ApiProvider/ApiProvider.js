import { useQuery } from '@tanstack/react-query';
import React, { createContext } from 'react';

export const ApiContext = createContext();

const ApiProvider = ({children}) => {

    
    // main categorie api
    const {data: mainCategories = [], refetch, isLoading} = useQuery({
        queryKey: ['mainCategories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categoriesMenu');
            const data = res.json();
            return data;
        },
      
    })

   
     // sub categorie api
     const {data: subCategories = []} = useQuery({
        queryKey: ['subCategories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/subCategories');
            const data = res.json();
            return data;
        },
      
    });

    const { data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allProducts');
            const data = res.json();
            return data;
        }
    })
   

    

    const apiInfo ={
        mainCategories,
        isLoading,
        refetch,
        subCategories,
        products
    }

    return (
        <ApiContext.Provider value={apiInfo}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiProvider;