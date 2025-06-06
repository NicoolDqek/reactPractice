import React, { useContext, useState } from 'react'
import {AppContextV} from '../context/AppContext'
import ProductCard from './ProductCard'
function ProductSection() {
    const {productList,Categories}=useContext(AppContextV)
  
  

    const best=productList.filter(b=>b.rating > 4.7)
    return (
    <div>
      <h1>Productos Destacados</h1>
      <div>
        {Categories.map((c,index)=>(
            <button key={index}>{c.name}</button>
        ))}
      </div>
      <div>
      {best.map(p=>(
    <div key={p.id}>
        <ProductCard product={p}/>
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default ProductSection
