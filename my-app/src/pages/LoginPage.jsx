import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoginFormulario from '../components/LoginFormulario'
import SingUp from '../components/SingUp';
function LoginPage() {

  const [isRegister, setIsRegister] =  useState(false);
  return (
    <div>
       <Navbar/>
        {isRegister ? <SingUp isRegister={isRegister} setIsRegister={setIsRegister}/> : <LoginFormulario setIsRegister={setIsRegister} isRegister={isRegister} />}
      <Footer/>
    </div>
  )
}

export default LoginPage
