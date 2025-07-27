import React, { createContext, useEffect, useState } from 'react'
export const ContextWish=createContext()

function WishContext({children}) {

const [wish,setwish]=useState(()=>{

  try {
    const UpWish=localStorage.getItem("wish");
    return UpWish ? JSON.parse(UpWish) : [];

  } catch (error) {
    console.error("error en peticion GET de Wish List",error);
    return [];
  }
})


// actulizar wish List Local


useEffect(()=>{
  try {
    localStorage.setItem("wish",JSON.stringify(wish))
  } catch (error) {
    console.error("error en actualizar wish list",error)
  }
})



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
