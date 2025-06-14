import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function WishCard() {
  return (
    <>
     <tr className='targeta'>
      <th scope="row">
  <div className="d-flex align-items-center p-2 tarjetas">
    <i class="bi bi-x"></i>
    <img
      className="rounded"
      src="https://images.restaurantfurniture.net/image/upload/c_lpad,dpr_1.0,f_auto,h_1000,q_auto,w_1000/rfnet/media/catalog/product/u/s/us-255-dm-b-vnl-t37ocg-s-vnl-t37ocg-1.png"
      alt=""
      style={{ width: '60px', height: 'auto' }}
    />
    <h6 className="mb-0">nombre</h6>
  </div>
</th>

      <td className='pt-5'>2000</td>
      <td className='pt-5'>22/06/2025</td>
      <td className='pt-5'>2000</td>
      <td className='pt-5 pr-3'><button>Add To Cart</button></td>
    </tr>
      
     
    </>
  )
}

export default WishCard
