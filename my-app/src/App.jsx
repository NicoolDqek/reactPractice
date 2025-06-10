import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  

  return (
    <>
       <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}></Route>

       </Routes>
    </>
  )
}

export default App
