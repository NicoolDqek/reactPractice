import React from 'react'

function CartCard() {
  return (
    <> 
      <tr className='targeta  '>
      <th scope="row">
  <div className="d-flex align-items-center p-2 tarjetas">
    <i class="bi bi-x"></i>
    <img
      className=" rounded"
      src="https://images.restaurantfurniture.net/image/upload/c_lpad,dpr_1.0,f_auto,h_1000,q_auto,w_1000/rfnet/media/catalog/product/u/s/us-255-dm-b-vnl-t37ocg-s-vnl-t37ocg-1.png"
      alt=""
      style={{ width: '60px', height: 'auto' }}
    />
    <h6 className="mb-0">nombre</h6>
  </div>
</th>

      <td className='pt-5'>2000</td>
      <td className='pt-5'><input className='w-75 ml-3' type="number" /></td>
      <td className='pt-5 '>2000</td>
    </tr>
    </>
  )
}

export default CartCard
