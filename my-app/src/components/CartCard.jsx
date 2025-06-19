import { useContext } from "react";
import { ContextCart } from "../context/CartContext";

function CartCard({ producto }) {

  const {quitar}=useContext(ContextCart)
  return (
    <tr className='targeta'>
      <th scope="row">
        <div className="d-flex align-items-center p-2 tarjetas">
         <button style={{padding:"0", margin:"0", backgroundColor:"white",color:"black"}} onClick={()=>quitar(producto)}><i className="bi bi-x"></i></button>
          <img
            className="rounded"
            src={producto.thumbnail}
            alt={producto.title}
            style={{ width: '60px', height: 'auto' }}
          />
          <h6 className="mb-0">{producto.title}</h6>
        </div>
      </th>
      <td className='pt-5'>${producto.price}</td>
      <td className='pt-5'>
        <input className='w-75 ml-3' type="number" value={producto.cantidad} readOnly />
      </td>
      <td className='pt-5'>${producto.price * producto.cantidad}</td>
    </tr>
  );
}

export default CartCard;