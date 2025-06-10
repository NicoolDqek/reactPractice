import React from 'react'

export async function getProducts() {
  
    try {
          const res= await fetch("https://dummyjson.com/products")
          const data= await res.json()
          return data
    } catch (error) {
        throw new Error("error en el get de productos", error)
    }

    
}

export async function getCategories() {
  
    try {
          const res= await fetch("https://dummyjson.com/products/categories")
          const data= await res.json()
          return data
    } catch (error) {
        throw new Error("error en el get de productos", error)
    }

    
}

export async function BradsJust() {
  try {
          const res= await fetch('https://dummyjson.com/products?limit=100&select=brand')
          const data= await res.json()
          return data
    } catch (error) {
        throw new Error("error en el get de productos", error)
    }
  
}


export async function getProductsById(id) {
  
    try {
          const res= await fetch(`https://dummyjson.com/products/${id}`)
          const data= await res.json()
          return data
    } catch (error) {
        throw new Error("error en el get de productos", error)
    }

    
}




function Fetchs() {
  return (
    <>
    </>
  )
}

export default Fetchs
