import React from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Carousel from '../components/Carousel'
import ProductSection from '../components/productSection'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


function HomePage() {
  
  return (
    <>
  <Navbar/>
 <Carousel/>
 <ProductSection/>
 <Banner/>
 <Footer/>
    
    </>
  )
}

export default HomePage
