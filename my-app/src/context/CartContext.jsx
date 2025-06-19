import React, { createContext, useState } from 'react'



export const ContextCart=createContext()


function CartContext({children}) {

const [carrito,setCarrito]=useState([])

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
const existe=carrito.find(p => p.id === producto.id);
if (existe){
  const eliminar=carrito.filter(p=> p.id !==producto.id)
  setCarrito(eliminar)
}
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
