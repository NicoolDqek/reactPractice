import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import ProductsBanner from '../components/ProductsBanner'

function ProductPage() {
  return (
    <div>
  <Navbar/>
  <ProductsBanner/>
  <ProductList/>
  <Footer/>
    </div>
  )
}

export default ProductPage
