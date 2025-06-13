import React, { useContext, useState } from 'react'
import {AppContextV} from '../context/AppContext'
import ProductCard from './ProductCard'

function ProductSection() {
    const {productList,Categories}=useContext(AppContextV)
    const [render,setRender]=useState([])
  

    const best=productList.filter(b=>b.rating > 4.7)

    const category=(category)=>{
      console.log("Categorías en productList:", productList.map(p => p.category));
      console.log(category)
    const filtro=productList.filter(f=>f.category.toLowerCase() === category.toLowerCase())
    console.log(filtro)
    setRender(filtro)
    }
    return (
      <div className='container'>
        
        

    <div className='section-p row'>
      <h1 >Productos Destacados</h1>
      <div className='col-lg-11  categorias'>
        {Categories.slice(0,4).map((c,index)=>(
            <button onClick={()=>category(c.name)} key={index}>{c.name}</button>
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
