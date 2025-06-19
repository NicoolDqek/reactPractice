 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import AppContext from './context/AppContext.jsx';
import CartContext from './context/CartContext.jsx';
import WishContext from './context/WishContext.jsx';
 


createRoot(document.getElementById('root')).render(
  
 <CartContext>
  <WishContext>
  <AppContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext>
  </WishContext>
</CartContext>
)
