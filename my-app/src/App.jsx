import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'
import ContactPage from './pages/ContactPage'
import CuentaPage from './pages/CuentaPage'
import WishPage from './pages/WishPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
    <>
       <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>
        <Route path="/contacto" element={<ContactPage/>}></Route>
        <Route path="/cuenta" element={<CuentaPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/wish" element={<WishPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
       </Routes>
    </>
  )
}

export default App
