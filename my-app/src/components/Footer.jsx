import React from 'react'

function Footer() {
  return (
    <div className='footer container'>
      <div className=' row bnn'>
        <div className='col-lg-5 bg-dark-md col-md-4 col-sm-11 bnn1'>
        <h5>MORE INFORMATION</h5>
        <p>Si quieres conocer de nuestro productos y ofertas contactenos</p>
        </div>
        <div className='col-lg-5 bnn2 col-md-4 col-sm-11'>
        <h5>CONTACTO</h5>
        <p>recibe descuentos y notificaciones a tu bandeja de entrada</p>
        <div className='bar'><input type="text" placeholder='Entr your e-mail'/><button>Enviar</button></div>
        
        </div>
      </div>
      <div className='row ftr'>
        <div className='col-lg-3   text-center'>
            <h1>PlussMark</h1>
            <h6>We Are Open All Day Of The Week!</h6>
            <p>Open Time 8:00Am -5:00pm</p>
            <img src="https://www.paypal-community.com/t5/image/serverpage/image-id/56084iFE8EEC50D9040CCB?v=v2" alt="" />
        </div>
        <div className='col-lg-2  '>
            <ul>
                <li><b>USEFUL LINKS</b></li>
                <li>Terms & Conditions</li>
                <li>New Products</li>
                <li>Secure Payment</li>
                <li>Services</li>
            </ul>
        </div>
          <div className='col-lg-2  '>
            <ul>
                <li><b>INFORMATION</b></li>
                <li>About Store</li>
                <li>New Collection</li>
                <li>Contact Us</li>
                <li>Delivery</li>
            </ul>
        </div>
          <div className='col-lg-2'>
            <ul>
                <li><b>CONTACT</b></li>
                <li>cll 154a-#145-66</li>
                <li>PlussMark@gmail.com</li>
                <li>+57 3118713672</li>
                <div className='mt-4'>
                 <i className="bi bi-facebook"></i>   
                 <i className="bi bi-whatsapp"></i>
                <i className="bi bi-instagram"></i> 
                <i className="bi bi-pinterest"></i>
                </div>
                <li><footer>© Copyright 2025 NQEK</footer>
</li> 
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
