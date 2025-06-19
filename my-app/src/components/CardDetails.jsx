 
   import React, { useContext, useEffect, useState } from 'react'
import { getProductsById } from '../data/Fetchs';
import { useParams } from 'react-router';
import { AppContextV } from '../context/AppContext';
import ProductCard from './ProductCard';
import { ContextCart } from '../context/CartContext';
import { ContextWish } from '../context/WishContext';



function CardDetails() {
  
 
const [product, setProduct] = useState(null);
const [imgPrincipal,setImgPrincipal]=useState("")
const { id } = useParams();
const {productList}=useContext(AppContextV)
const [relatives, setRelative] = useState([]);
const {agregarW}=useContext(ContextWish)
const {agregar}=useContext(ContextCart);




useEffect(() => {
    getProductsById(id)
      .then((data) => {
        setProduct(data);
          if (productList && productList.length > 0) {
        const relacionados = productList.filter(
          (p) => p.category === data.category && p.id !== data.id
        );
        setImgPrincipal(""); 
        setRelative(relacionados);
      }
      })
      .catch((error) => console.error("error:", error));
  }, [id,productList]);

  if (!product) return <p>Cargando usuario...</p>;
 
  
  return (
    <div>
      
      <div className='details container'>
        
        <div className='row '>
            <div className='col-lg-1'>
            {product.images.map(img=>(
                <div className='m-1  gallery' key={img}>
                    <img onClick={()=>setImgPrincipal(img)} className='w-100' src={img} alt="" />
                </div>
            ))}
            </div>
            <div className='image h-75 col-lg-3'>
                <img className='w-100'  src={imgPrincipal === ""  ? product.thumbnail : imgPrincipal} alt={product.title} />
            </div>
            <div className='col-lg-6  dd'>
 <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Inicio</a></li>
    <li className="breadcrumb-item"><a href="#">Biblioteca</a></li>
    <li className="breadcrumb-item active" aria-current="page">Datos</li>
  </ol> 
</nav>
             <h3>{product.title}</h3>
             <h6>${product.price}</h6>
             <span><b>Unidades disponibles:</b> {product.stock} unidades</span>
             <p className='pt-2'>{product.description}</p>
             <p>minima cantidad de orden: <b>{product.minimumOrderQuantity}</b></p>
              <section className='pb-3'>
               <span><i className="bi bi-share"></i>Compartir</span>
              <span><i className="bi bi-heart"></i><button onClick={()=>agregarW(product)} style={{border:"none",backgroundColor:"white"}}>Add To Wish List</button></span>
              <span ><i className="bi bi-cart"></i><button onClick={()=>agregar(product)} style={{border:"none",backgroundColor:"white"}}>Add To Cart</button></span>
              </section>
              <div className='cc'>
                <h4><b>Category: </b>{product.category}</h4>
                <div className='redes'>
                    <ul>
                        <li><b>Share:</b></li>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-pinterest"></i>
                        <i className="bi bi-instagram"></i>
                    </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
 <div className='container more'>
<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Descripcion</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Detalles</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <h4>{product.description}</h4>
  </div>
  <div className="tab-pane container fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
<div className='row detalles'>
<div className='col-lg-2 col-md-3 col-sm-4'>
<h4 className='mm'>{product.brand}</h4>
<h5>{product.category}</h5>

</div>
<div className='col-lg-9 co-md-8 col-sm-7'>

<h5>{product.title}</h5>
 {product.tags.map((t,index)=>(
  <h6 key={index}>{t}</h6>
  ))} 
<p>{product.description}</p>
<p><b>Dimensiones:</b></p>
<table className='tabla'>
  <thead>
    <tr>
      <th>Ancho</th>
      <th>Altura</th>
      <th>Contenido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{product.dimensions.width}</td>
      <td>{product.dimensions.height}</td>
      <td>{product.dimensions.depth}</td>
    </tr>
  </tbody>
</table>
<h6><b>Garantia: </b>{product.warrantyInformation}</h6>
<h6><b>Entrega Informacion: </b>{product.shippingInformation}</h6>
<h6><b>status stock: </b>{product.availabilityStatus}</h6>
<h6><b>politica de devolucion:</b> {product.returnPolicy}</h6>



</div>
</div>
  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    
    {product.reviews.map((r,index)=>(
        <div className='review container' key={index}>
          <div className='row'>
           <div className='col-lg-1'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?20200919003010" alt="" />
           </div>
           <div className='col-lg-6 review-d'>
           <h6>{r.reviewerName}</h6>
           <h5>{r.reviewerEmail}</h5>
           <h4>{r.date}</h4>
           <p>{r.comment}</p>
           </div>
          </div>
        </div>
    ))}
  </div>
</div>
    </div>
    
    <div className='relative container '>
     <div><h3 className='text-center'>Productos Relacionadas</h3></div> 
     <div className='d-flex relate'> 
      {relatives.slice(0,4).map((r)=>(
      <ProductCard key={r.id} product={r}/>
    ))}</div>
     
    
    </div>
    
    </div>
  )
}

export default CardDetails
