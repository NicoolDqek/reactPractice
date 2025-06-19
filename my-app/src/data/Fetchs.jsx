import React from 'react'
import urlBase from './Api';

export async function getProducts() {
  
    try {
          const res=await urlBase.get('/products');
          return res.data
    } catch (error) {
       console.error("error en el get de productos", error)
       throw error;
    }

    
}

export async function getCategories() {
  
    try {
          const res= await urlBase.get('/products/categories'); 
          return res.data
    } catch (error) {
        throw new Error("error en el get de productos", error)
    }

    
}

export async function BradsJust() {
  try {
          const res= await urlBase.get('https://dummyjson.com/products?limit=100&select=brand')
          return res.data
    } catch (error) {
        throw new Error("error en el get de brands", error)
    }
  
}


export async function getProductsById(id) {
  
    try {
          const res= await urlBase.get(`/products/${id}`)
          return res.data
    } catch (error) {
        throw new Error("error en el get de productos por id", error)
    }

    
}

export async function getByCategory(category) {
  try {
    const res = await urlBase.get(`/products/category/${category}`);
    return res.data.products;
  } catch (error) {
    console.error("Error en el get de categoria:", error);
    throw error;
  }
}



function Fetchs() {
  return (
    <>
    </>
  )
}

export default Fetchs
