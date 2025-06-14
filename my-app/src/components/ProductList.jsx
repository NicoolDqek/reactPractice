import React, { useState } from 'react'
import { AppContextV } from '../context/AppContext'
import { useContext } from 'react'
import ProductCard from './ProductCard'
import FiltrosSection from './FiltrosSection'


function ProductList() {
const { productList, buscado, buscar } = useContext(AppContextV);
const [filtrado,setFiltrado]=useState([]);

const ordenar = (e) => {
  const valor=e.target.value.toLowerCase()
  if (valor === "alfabeto") {
    const ordenado = [...productList].sort((a, b) => a.title.localeCompare(b.title));
    setFiltrado(ordenado);
  } else if (valor === "precio") {
    const ordenado = [...productList].sort((a, b) => a.price - b.price);
    setFiltrado(ordenado);
  } else {
    setFiltrado(productList); // sin orden
  }
};

 

  return (
    <div>
      

      <div className='filtros  container'>
        
        <div className='titulo text-center'>Productos Disponibles</div>
        <div ><span><b>Sort by:</b></span>
        <select onChange={(e)=>ordenar(e)} name="orden" id="orden">
          <option value="">Filtrar</option>
          <option value="alfabeto">Alfabeto</option>
          <option value="precio">Precio</option>
        </select>
        </div>
        <div> 
          <span>View:</span>
          <i class="bi bi-list"></i>
          <i class="bi bi-grid-3x2-gap-fill"></i>
        </div>
      </div>
     <div style={{paddingTop:"5rem"}} className='container  justify-content-start   d-flex flex-wrap'>
      <div className='row'>
<div className='col-lg-3 col-md-2 col-sm-11'>
        <FiltrosSection/>
      </div>
      <div className='col-lg-8  col-md-9 col-sm-11 d-flex  justify-content-center flex-wrap'>

        {buscado.length === 0 && buscar.length > 0 ?(
          <div className='d-flex align-items-center  flex-column  col-lg-8 col-md-9 col-sm-11'><p>No se encontraron coincidencias.</p>
          <img className='h-50 w-50' src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" alt="" />
          </div>
          
        ):((buscar.length > 0  ? buscado : filtrado.length > 0 ? filtrado : productList).map(p=>(
        <div key={p.id}>
          <ProductCard product={p}/> 
        </div>
    )))}
     </div>
      </div>
      
      </div>
      
    </div>
  )
}

export default ProductList
