import React from 'react'
import { Link } from 'react-router'

function ProductCard({product}) {
  return (
    <div className='m-2'>
      <div className="card" >
        <div className="botones">
          <button className='heart'><i class="bi bi-bag-heart"></i></button>
        <button className='cart'><i class="bi bi-cart"></i></button>
        </div>
        
  <img className="card-img-top" src={product.thumbnail} alt={product.title}></img>
  <div className="card-body">
    <span>-{product.discountPercentage}%</span>
    <h6>${product.price}</h6>
    <p className="card-text">{product.title}</p>
    <button><Link to={`/products/${product.id}`}>Comprar</Link></button>

  </div>
</div>
    </div>
  )
}

export default ProductCard
