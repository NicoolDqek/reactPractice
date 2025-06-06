import React, { useContext, useState } from 'react'
import {AppContextV} from '../context/AppContext'
import ProductCard from './ProductCard'

function ProductSection() {
    const {productList,Categories}=useContext(AppContextV)
  
  

    const best=productList.filter(b=>b.rating > 4.7)
    return (
    <div className='section-p'>
      <h1>Productos Destacados</h1>
       
      <div className='categorias'>
        {Categories.slice(0,8).map((c,index)=>(
            <button key={index}>{c.name}</button>
        ))}
      </div>
      <div className='product-section container'>
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
