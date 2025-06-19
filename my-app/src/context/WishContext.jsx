import React, { createContext, useState } from 'react'
export const ContextWish=createContext()

function WishContext({children}) {

const [wish,setwish]=useState([])

// agregar  

const agregarW=(product)=>{
   const existe=wish.find(p=>p.id === product.id)
   if(!existe){
    setwish([...wish,{...product,fecha:new Date().toLocaleDateString()
}])
console.log("producto agregado",product)
   }
}
// quitar


const quitar=(product)=>{
     const existe=wish.find(p=>p.id === product.id)
   if(existe){
    const eliminar=wish.filter(p=>p.id !== product.id)
    setwish(eliminar)
}
}



  return (
    <ContextWish.Provider value={{agregarW,wish,quitar}}>
      {children}
    </ContextWish.Provider>
  )
}

export default WishContext
