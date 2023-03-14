import React from 'react'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/ProductPage.css'
function Card({ productId, productImage, productTitle, productPrice }) {
  return (
    <>
      <div className="col-md-6 col-lg-4 mb-4 col-sm-12 rounded" key={productId}>
        <div className="card">
          <div className='d-flex justify-content-between p-3'>
          <div className='text-center '>
              <div className='cardImage'>
            
              <img src={productImage} className="card-img-top" />
              </div>
              <div className="card-body">
            <p className=' title fs-5 p-2 h-25 '>{productTitle}</p>
                <p className='text-black-50 p-2 small'>{productPrice}$</p>
                <button className='cartBtn border-0 text-white rounded px-3'>
               
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping"/>add to cart</button>
            </div>
          </div>
        </div>
        </div>
      </div></>
  )
}

export default Card