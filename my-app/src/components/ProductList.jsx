import React from 'react'
import { AppContextV } from '../context/AppContext'
import { useContext } from 'react'
import ProductCard from './ProductCard'


function ProductList() {
const {productList}=useContext(AppContextV) 

  return (
    <div  >
     <div style={{paddingTop:"10rem"}} className='container  justify-content-center aling-items-center d-flex flex-wrap'>
      {productList.map(p=>(
        <div  key={p.id}>
          <ProductCard product={p}/> 
        </div>
    ))}</div>
      
    </div>
  )
}

export default ProductList
