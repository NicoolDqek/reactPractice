import React, {createContext, useEffect, useState } from 'react'
import { BradsJust, getCategories, getProducts } from '../data/Fetchs';

export const AppContextV=createContext()


function AppContext({children}) {
    const [productList,setProductList]=useState([])
    const [Categories,SetCategories]=useState([])
    const [justBrand,setJustBrad]=useState([])
    
  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProductList(data.products);
      })
      .catch((error) => console.error("error:", error));
  }, []);

  useEffect(() => {
    BradsJust()
      .then((data) => {
        console.log(data);
        const uniqueMarcas = Array.from(new Set(data.products.map(p => p.brand)));
        setJustBrad(uniqueMarcas);
        
      })
      .catch((error) => console.error("error:", error));
  }, []);
   useEffect(() => {
    getCategories()
      .then((data) => {
        console.log(data);
        SetCategories(data );
      })
      .catch((error) => console.error("error:", error));
  }, []);
  return (
    <AppContextV.Provider value={{productList,Categories,justBrand}}>
      {children}
    </AppContextV.Provider>
  )
}

export default AppContext
