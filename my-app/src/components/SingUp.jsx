import React from 'react'

function SingUp({setIsRegister,isRegister}) {
  return (
     <div>
       <div className='login'>
      <div className='formulario'>
       <h2>Registro</h2>
      
       <div className='form'>
        <div><input className='w-75' type="email" placeholder='E-mail'/></div>
        <div><input className='w-75' type="password" placeholder='Password' /></div>
        <div><input className='w-75' type="password" placeholder='Confirm Password' /></div>
        <div><a className='pt-3' href="">¿Problema para Registrarse?</a></div>
        <button className='w-75'>Registrarse</button>
        <p className='pt-3'>-Registro con-</p>
        <span>
          <a href=""><i class="bi bi-google"></i>Google</a>
          <a href=""><i class="bi bi-apple"></i>Apple ID</a>
          <a href=""><i class="bi bi-facebook"></i>Facebook</a>
        </span>
        <p className='pt-3'>¿Ya tienes una Cuenta?<a style={{cursor:"pointer"}} onClick={() => setIsRegister(!isRegister)}><b>Ingresar</b></a></p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default SingUp
