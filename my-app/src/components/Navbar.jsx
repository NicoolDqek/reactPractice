import React, { useContext, useState } from 'react';
import "../styles/main.css";
import { Link } from 'react-router';
import { AppContextV } from '../context/AppContext';

function Navbar() {

  const {productList}=useContext(AppContextV);
const { buscar, inputBuscar } = useContext(AppContextV);
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to={"/"} className="navbar-brand">PlussMark</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/products"} className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to={"/contacto"} className="nav-link" href="#">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link to={"/cuenta"} className="nav-link" href="#">Cuenta</Link>
            </li>
          </ul>

          <div className="d-flex section-links ml-auto gap-2 mr-5 pr-5">
            <input
              type="text"
              className="form-control mr-2 "
              placeholder="🔎"
              onChange={(e)=>inputBuscar(e)}
              style={{ maxWidth: '200px',height:"20px" }}
            />
            <Link to={"/login"} className="nav-link">
              <i className="bi bi-person-circle"></i>
            </Link>
            <Link to={"/cart"} className="nav-link">
              <i className="bi bi-cart"></i>
            </Link>
            <Link to={"/wish"} className="nav-link">
             <i class="bi bi-bag-heart"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
