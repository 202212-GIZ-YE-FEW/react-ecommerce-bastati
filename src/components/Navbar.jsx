
import React from 'react'
import logo from '../assets/images/logo.png'
function Navbar() {
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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>


          </ul>
          <div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <div className='cart-icon'>
                <i class="fa-solid fa-cart-shopping"></i>
                <div className='cart-Counetr'><p>0</p></div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar