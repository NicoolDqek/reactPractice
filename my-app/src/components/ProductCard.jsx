import React from 'react'

function ProductCard({product}) {
  return (
    <div className='m-2'>
      <div className="card" >
  <img className="card-img-top" src={product.thumbnail} alt={product.title}></img>
  <div className="card-body">
    <span>-{product.discountPercentage}%</span>
    <h6>{product.price}</h6>
    <p className="card-text">{product.title}</p>
    
  </div>
</div>
    </div>
  )
}

export default ProductCard
