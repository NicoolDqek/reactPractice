import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextCart } from '../context/CartContext'
import { ContextWish } from '../context/WishContext'
 
function ProductCard({product}) {

const {agregar}=useContext(ContextCart)
const {agregarW}=useContext(ContextWish)




  return (
    <div className='m-2'>
      <div className="card" >
        <div className="botones">
          <button  onClick={()=>agregarW(product)} className='heart'><i className="bi bi-bag-heart"></i></button>
        <button onClick={()=>agregar(product)}  className='cart'><i className="bi bi-cart"></i></button>
        </div>
        
  <img className="card-img-top" src={product.thumbnail} alt={product.title}></img>
  <div className="card-body">
    <span>-{product.discountPercentage}%</span>
    <h6>${product.price}</h6>
    <p className="card-text">{product.title}</p>
    <Link  to={`/products/${product.id}`}><button>Comprar</button></Link>

  </div>
</div>
    </div>
  )
}

export default ProductCard
