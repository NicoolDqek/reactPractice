import React, { Children, createContext, useEffect, useState } from 'react'
import { getProducts } from '../data/Fetchs';

export const AppContextV=createContext()


function AppContext({children}) {
    const [productList,setProductList]=useState([])

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProductList(data.products);
      })
      .catch((error) => console.error("error:", error));
  }, []);


  return (
    <AppContextV.Provider value={{productList}}>
      {children}
    </AppContextV.Provider>
  )
}

export default AppContext
