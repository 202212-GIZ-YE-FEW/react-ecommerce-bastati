import React from 'react'
import logo from '../assets/images/logo.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'

function Footer() {
  return (

    <footer className='flex h-10 justify-center items-center shadow-inner'>
      <div className="container">
        <div className='first-footer row py-5 justify-content-center align-items-center'>
          <div className='col-sm-12 col-md-6 col-lg-4 about-site'>

            <h1 className='site-name'>Bastati</h1>
            <p className='site-desc'>An E-commerce website that helps you to find a new cheap items with one click</p>
            <div className='soc-icons'>
              <i className="fb fa-brands fa-facebook-f"></i>
              <i className="twitter fa-brands fa-twitter"></i>
              <i className="insta fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4 footer-links  pt-sm-4'>
            <h5 className='footer-title'>
              Links
            </h5>
            <ul className='footer-links navbar-nav'>
              <li>
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li>
                <a className="nav-link" aria-current="page" href="#">Products</a>
              </li>
              <li>
                <a className="nav-link" aria-current="page" href="#">My Cart</a>
              </li>
              <li>
                <a className="nav-link" aria-current="page" href="#">About</a>
              </li>

            </ul>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-4 pt-sm-4'>
            <h5 className='footer-title'>
              Download App
            </h5>
            <div className='row'>
              <img className="navbar-brand" src={google} />
            </div>
            <div className='row'>
              <img className="navbar-brand" src={apple} />
            </div>

          </div>

        </div>
      </div>
      <div className='last-footer'>
        <p>Copyright &copy; 2023 By Bastati</p>
      </div>
    </footer>
  )
}

export default Footer