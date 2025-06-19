import React, { useContext, useState } from 'react'
import {AppContextV} from '../context/AppContext'
import ProductCard from './ProductCard'
import { getByCategory } from '../data/Fetchs'

function ProductSection() {
    const {productList,categoryLits}=useContext(AppContextV)
    const [render,setRender]=useState([])
  
  
    const best=productList.filter(b=>b.rating > 4.7)
    

    const getByCategoryProduct=(categoryName)=>{
      console.log("Fetching category:", categoryName);
      getByCategory(categoryName)
      .then((product)=>setRender(product))
      .catch((error) => console.error("Error:", error));
    }


    return (
      <div className='container'>
        
        

    <div className='section-p row'>
      <h1 >Productos Destacados</h1>
      <div className='col-lg-11  categorias'>
        {categoryLits.slice(0,4).map((c,index)=>(
            <button onClick={()=>getByCategoryProduct(c.slug)} key={index}>{c.name}</button>
        ))}
      </div>
      <div className='col-lg-11  product-section container'>
      {(render.length > 0 ? render : best).slice(0,4).map(p=>(
    <div key={p.id}>
        <ProductCard product={p}/>
        </div>
        
      ))}
      </div>
    </div>
    </div>
  )
}

export default ProductSection
