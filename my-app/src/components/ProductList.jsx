import React from 'react'
import { AppContextV } from '../context/AppContext'
import { useContext } from 'react'
import ProductCard from './ProductCard'
import FiltrosSection from './FiltrosSection'


function ProductList() {
const {productList}=useContext(AppContextV) 

  return (
    <div>
      

      <div className='filtros  container'>
        
        <div className='titulo text-center'>Productos Disponibles</div>
        <div ><span><b>Sort by:</b></span>
        <select name="orden" id="orden">
          <option value="">Filtrar</option>
          <option value="">Alfabeto</option>
          <option value="">Precio</option>
        </select>
        </div>
        <div> 
          <span>View:</span>
          <i class="bi bi-list"></i>
          <i class="bi bi-grid-3x2-gap-fill"></i>
        </div>
      </div>
     <div style={{paddingTop:"5rem"}} className='container  justify-content-start   d-flex flex-wrap'>
      <div className='w-25'>
        <FiltrosSection/>
      </div>
      <div className='d-flex w-75  justify-content-center flex-wrap'>
     {productList.map(p=>(
        <div key={p.id}>
          <ProductCard product={p}/> 
        </div>
    ))}</div>
      </div>
      
    </div>
  )
}

export default ProductList
