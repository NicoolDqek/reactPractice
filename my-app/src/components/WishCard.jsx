import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ContextCart } from '../context/CartContext'
import { ContextWish } from '../context/WishContext'
function WishCard({producto}) {

  const {agregar}=useContext(ContextCart)
  const {quitar}=useContext(ContextWish)

  return (
    <>
     <tr className='targeta'>
      <th scope="row">
  <div className="d-flex align-items-center p-2 tarjetas">
    <button onClick={()=>quitar(producto)} style={{backgroundColor:"white",color:"black"}}><i class="bi bi-x"></i></button>
    <img
      className="rounded"
      src={producto.thumbnail}
      alt=""
      style={{ width: '60px', height: 'auto' }}
    />
    <h6 className="mb-0">{producto.title}</h6>
  </div>
</th>

      <td className='pt-5'>{producto.price}</td>
      <td className='pt-5'>{producto.fecha}</td>
      <td className='pt-5'>{producto.availabilityStatus}</td>
      <td className='pt-5 pr-3'><button onClick={()=>agregar(producto)}>Add To Cart</button></td>
    </tr>
      
     
    </>
  )
}

export default WishCard
