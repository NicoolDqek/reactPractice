import React from 'react'
import CartCard from './CartCard'

function CartPageLayout() {
  return (
    <div className='container carrito'>
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-11">
<table class="table ">
  <thead className='thead'>
    <tr>
       <th style={{ width: '40%',textAlign:"start" }}>Producto</th>
      <th style={{ width: '20%' }}>Precio</th>
      <th style={{ width: '20%' }}>Cantidad</th>
      <th style={{ width: '20%' }}>Subtotal</th>
    </tr>
  </thead>
  <tbody > 
     
      <CartCard/>
    
  </tbody>

</table>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-11 total">
         <table class="table  table-bordered ">
  <thead className='border' >
    <tr>
      <th scope="col" style={{color:"black"}}>Orden Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Items</th>
      <td>Mark</td>
    </tr>
     <tr>
      <th scope="row">Subtotal</th>
      <td>Mark</td>
      
       
    </tr>
    <tr>
      <th scope="row">Descuento</th>
      <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">Impuesto</th>
      <td>Mark</td>
      
       
    </tr>
    <tr style={{borderTop:"1px solid gray "}}>
      <th scope="row">Total</th>
      <td>Mark</td>
      
    </tr>
    <tr className=' '>
      <button>Seguir con la compra</button>
      
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}

export default CartPageLayout
