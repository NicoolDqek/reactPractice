import React, {createContext, useEffect, useState } from 'react'
import { BradsJust, getCategories, getProducts,getByCategory } from '../data/Fetchs';

export const AppContextV=createContext()


function AppContext({children}) {
    const [productList,setProductList]=useState([])
    const [Categories,SetCategories]=useState([])
    const [justBrand,setJustBrad]=useState([])
    const [buscado,setBuscado]=useState([])
    const [buscar, setBuscar] = useState("");   
    const [category, setCategory] = useState("");
    const [categoryLits,setCategoryList]=useState([])

      const inputBuscar=(e)=>{
    const valor=e.target.value.toLowerCase();
    setBuscar(valor);
    const filtrado=productList.filter(f=>f.title.toLowerCase().includes(valor))
    setBuscado(filtrado)
  }
    
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProductList(data.products);
      })
      .catch((error) => console.error("error:", error));
  }, []);

  useEffect(() => {
    BradsJust()
      .then((data) => {
        const uniqueMarcas =(new Set(data.products.map(p => p.brand)));
        setJustBrad(uniqueMarcas);
        
      })
      .catch((error) => console.error("error:", error));
  }, []);


   useEffect(() => {
     if (!category) return;
    getByCategory(category)
      .then((data) => {
        setCategory(data);
      })
      .catch((error) => console.error("error:", error));
  }, [category]);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategoryList(data);
      })
      .catch((error) => console.error("error:", error));
  }, []);


  return (
    <AppContextV.Provider value={{productList,Categories,justBrand,buscar,buscado,categoryLits,inputBuscar}}>
      {children}
    </AppContextV.Provider>
  )
}

export default AppContext
