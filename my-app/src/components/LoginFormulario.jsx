import React from 'react'

function LoginFormulario({setIsRegister,isRegister}) {

  

  return (
    <div>
       <div className='login'>
      <div className='formulario'>
       <h2>Ingresar</h2>
      
       <div className='form'>
        <div><input className='w-75' type="email" placeholder='E-mail'/></div>
        <div><input className='w-75' type="password" placeholder='Password' /></div>
        <div><a className='pt-3' href="">¿Problema para ingresar?</a></div>
        <button className='w-75'>Ingresar</button>
        <p className='pt-3'>-ingresar con-</p>
        <span>
          <a href=""><i class="bi bi-google"></i>Google</a>
          <a href=""><i class="bi bi-apple"></i>Apple ID</a>
          <a href=""><i class="bi bi-facebook"></i>Facebook</a>
        </span>
        <p className='pt-3'>¿no tienes una Cuenta?<a  style={{cursor:"pointer"}} onClick={() =>setIsRegister(!isRegister)}><b>registrar</b></a></p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default LoginFormulario
