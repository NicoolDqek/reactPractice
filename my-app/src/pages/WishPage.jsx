import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WishCard from '../components/WishCard'
import { ContextWish } from '../context/WishContext'

function WishPage() {

  const {wish}=useContext(ContextWish)

  return (
    <>
      <Navbar/>
      <div className="encabezado" style={{ paddingTop:"7rem"}}>
        <h1>Lista de Deseos</h1>
         <div >
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb  d-flex align-item-center ">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item" aria-current="page">Data</li>
  </ol>
</nav>
</div>
</div>

<div className='container lista-deseos'>
  <div className='row'>
    <table className="table col-lg-12 col-md-7 col-sm-4">
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
  {wish.map((p,index)=>(
    <WishCard  key={index} producto={p} />
  ))}
     
  </tbody>
</table>
</div>
  
</div>
      <Footer/>
    </>
  )
}

export default WishPage
