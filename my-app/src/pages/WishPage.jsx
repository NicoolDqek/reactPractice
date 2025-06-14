import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WishCard from '../components/WishCard'

function WishPage() {
  return (
    <>
      <Navbar/>
      <div className="encabezado" style={{ paddingTop:"7rem"}}>
        <h1>Lista de Deseos</h1>
         <div >
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb  d-flex align-item-center ">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item" aria-current="page">Data</li>
  </ol>
</nav>
</div>
</div>

<div className='container lista-deseos'>
  <div className='row'>
    <table class="table col-lg-12 col-md-7 col-sm-4">
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Precio</th>
      <th scope="col">Fecha</th>
      <th scope="col">Stock Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   <WishCard/>
   <WishCard/>
     <WishCard/>
  </tbody>
</table>
</div>
  
</div>
      <Footer/>
    </>
  )
}

export default WishPage
