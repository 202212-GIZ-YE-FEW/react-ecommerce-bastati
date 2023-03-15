import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom";
import { useShoppingCart } from '../context/ShoppingCartContext';
function Navbar() {
  const { cartQuantity, cartItems } = useShoppingCart()
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid px-5 py-2">

        <img className="navbar-brand" src={logo} height="48px" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={() => { setSearch(e.target.value) }} />
          </form>
          <div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <NavLink to="/cart" className="">
                <div className='cart-icon'>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <div className='cart-Counetr'><p>{cartItems.length}</p></div>
                </div>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar