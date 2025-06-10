import React from 'react'
import "../styles/main.css";
import { Link } from 'react-router';
function Navbar() {
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light ">
  <Link to={"/"} className="navbar-brand" href="#">PlussMark</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to={"/"} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to={"/products"} className="nav-link" href="#">Productos</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link  " href="#">Disabled</a>
      </li>
      <div className='section-links'>
        <li>
        <a href=""><i class="bi bi-search"></i></a>
      </li>

      <li>
        <a href="">
            <i class="bi bi-person-circle"></i>
      </a>
      </li>
        

      <li>
        <a href="">
            <i class="bi bi-cart"></i>
        </a>
      </li>
      </div>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
