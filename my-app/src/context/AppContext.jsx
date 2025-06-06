import React, { Children, createContext, useEffect, useState } from 'react'
import { getCategories, getProducts } from '../data/Fetchs';

export const AppContextV=createContext()


function AppContext({children}) {
    const [productList,setProductList]=useState([])
    const [Categories,SetCategories]=useState([])

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProductList(data.products);
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
    <AppContextV.Provider value={{productList,Categories}}>
      {children}
    </AppContextV.Provider>
  )
}

export default AppContext
