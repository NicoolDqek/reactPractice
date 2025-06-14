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
  <ol class="breadcrumb  d-flex align-item-center ">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item" aria-current="page">Data</li>
  </ol>
</nav>  
      </div>
      <CartPageLayout/>
      <Footer/>
    </div>
  )
}

export default CartPage
