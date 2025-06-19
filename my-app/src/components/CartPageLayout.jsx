import React, { useContext } from 'react'
import CartCard from './CartCard'
import { ContextCart } from '../context/CartContext'
 

function CartPageLayout() {

 const {carrito,subtotal,cantidad}=useContext(ContextCart)
 console.log("Carrito actual:", carrito);

  return (
    <div className='container carrito'>
      <div className="row">
        <div className="col-lg-8 col-md-7 col-sm-11">
<table className="table ">
  <thead className='thead'>
    <tr>
       <th style={{ width: '40%',textAlign:"start" }}>Producto</th>
      <th style={{ width: '20%' }}>Precio</th>
      <th style={{ width: '20%' }}>Cantidad</th>
      <th style={{ width: '20%' }}>Subtotal</th>
    </tr>
  </thead>
  <tbody > 
     {carrito.map((c,index)=>(
     <CartCard key={index} producto={c} />
     ))}
      
    
  </tbody>

</table>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-11 total">
         <table className="table  table-bordered ">
  <thead className='border' >
    <tr>
      <th scope="col" style={{color:"black"}}>Orden Summary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Items</th>
      <td> {cantidad}</td>
    </tr>
     <tr>
      <th scope="row">Subtotal</th>
      <td>{subtotal}</td>
      
       
    </tr>
 
    <tr style={{borderTop:"1px solid gray "}}>
      <th scope="row">Total</th>
      <td>{subtotal}</td>
      
    </tr>
    <tr className=' '>
       <td colSpan="2">
    <button>Seguir con la compra</button>
  </td>
      
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}

export default CartPageLayout
