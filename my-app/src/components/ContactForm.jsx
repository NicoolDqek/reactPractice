import React, { useContext } from 'react'
import { AppContextV } from '../context/AppContext'

function ContactForm() {

    const {Categories}=useContext(AppContextV)
  return (
  
    <div className='pt-5'>
    <div>
<h1 className='pt-5 pl-5 ml-2 tt' >Contacto</h1>
       <div className='container'>
       <div className='row'>
        <div className="col-lg-6 col-md-5 col-sm-11 boderRight">
         <h6>Send Message</h6>
         <p>Ingresa tus datos de contacto, nos comunicaremos por los difeentes medios de atencion</p>
        <form className='formulario'>
  <div class="form-row">
    <div class="col-5">
        <label htmlFor="name">Nombre</label>
      <input type="text" class="form-control " placeholder="name"></input>
    </div>
    <div class="col-5">
        <label htmlFor="Last name">E-mail</label>
      <input type="email" class="form-control" placeholder="e-mail"></input>
    </div>
  </div>
   <div class="form-row">
    <div class="col-5">
      <label htmlFor="First name">Interes</label>
      <select className='col-10'>
            {Categories.map((c,index)=>(
                <option key={index}>{c.name}</option>
            ))}
      </select>
            
    </div>
    <div class="col-5">
        <label htmlFor="">Numero telefono</label>
      <input type="text" class="form-control" placeholder="numero fr telefono"></input>
    </div>
  </div>
  <div class="form-row">
    <div class="col-10 message">
        <label htmlFor="message">Mensaje</label>
      <input type="text" class="form-control" placeholder="menssage"></input>
    </div>
    
  </div>
    <div class="form-row">
    <div class="col-10 message">

        <button>Enviar</button>
    </div>
    
  </div>
</form>
 
        </div>
        <div className="data-container col-lg-4 col-md-5 col-sm-11">
         <div className="data">
            <h5>Contacto</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, perferendis </p>
            <span><i class="bi bi-telephone-fill"></i>3118713672</span>
         </div>
         <div className="data">
         <h5>Visistanos</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, perferendis </p>
            <span><i class="bi bi-geo-alt-fill"></i>Cll 134-#345-54</span>
         </div>
         <div className="data">
            <h5>Live Chat</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, perferendis </p>
            <span><i class="bi bi-chat-left-quote-fill"></i>Start Chat</span>
         </div>
        </div>
       </div>
       </div>
</div>


<div className=' container section_2'>

    <div className='row map'>
    <div className='col'>
    
    </div>
    </div>
   
   <div className='row acor'>
    <div className="col-lg-4 col-md-5 col-sm-11 acordeon-1">
    <h1>Preguntas Frecuentes</h1>
    </div>
    <div className="col-lg-7 col-md-5 col-sm-11 acordeon-2">

    <h6>Tienes Dudas sobre nuestros servicios o productos?</h6>
    <p>Resuelve tus dudas de manera rapida y precisa</p>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    </div>
    
</div>

    </div>
      
  )
}

export default ContactForm
