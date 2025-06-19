import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartPageLayout from '../components/CartPageLayout'


function CartPage() {

  
  return (
    <div>
    <Navbar/>
      <div className='header-cart'  style={{ paddingTop:"7rem"}}> 
        <h1 className='text-center'>Shopping Cart</h1>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb  d-flex align-item-center ">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item" aria-current="page">Data</li>
  </ol>
</nav>  
      </div>
      <CartPageLayout/>
      <Footer/>
    </div>
  )
}

export default CartPage
