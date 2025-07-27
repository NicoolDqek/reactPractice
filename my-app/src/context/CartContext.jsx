import React, { createContext, useEffect, useState } from 'react'



export const ContextCart=createContext()


function CartContext({children}) {

const [carrito,setCarrito]=useState(()=>{
  try {
    const UpCart=localStorage.getItem("cart");
    return UpCart ? JSON.parse(UpCart) : [];
  } catch (error) {
    console.log("error en localSotrange Get",error)
    return [];
  }
})



// actualizar localStorange

useEffect(()=>{
  try {
    localStorage.setItem("cart",JSON.stringify(carrito))
  } catch (error) {
    console.error("error al actulizar data localSotrage",error)
  }
},[carrito])



//agregar producto 
const agregar = (producto) => {
  const existe = carrito.find(p => p.id === producto.id);
  if (!existe) {
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  } else {
    setCarrito(
      carrito.map(p =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + 1 }  
          : p
      )
    );
  }
};









// quitar producto

const quitar=(producto)=>{
  setCarrito(carrito.map(p=> p.id === producto.id ? {...p,cantidad:p.cantidad-1}
    :p).filter(p=> p.cantidad > 0))

}
// cantidad

const cantidad=carrito.reduce((total,p)=> total + p.cantidad,0)

// subtotal

const subtotal = carrito.reduce((total, p) => total + (p.price * p.cantidad), 0);

// descuento
const descuento = carrito.reduce((total, p) => total + (p.price), 0);

  return (
    <ContextCart.Provider value={{carrito,agregar,quitar,subtotal,cantidad}}>
{children}
    </ContextCart.Provider>
  )
}

export default CartContext;
