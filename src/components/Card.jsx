import React, { useContext } from 'react'
import '@fortawesome/fontawesome-svg-core'
import { useShoppingCart } from '../context/ShoppingCartContext';
import '../assets/css/ProductPage.css'
import { Link } from 'react-router-dom'

function Card({ productId, productImage, productTitle, productPrice }) {

  const { getItemQuantity, increaseCartQuantity } = useShoppingCart()
  const quantity = getItemQuantity(productId)
  return (
    <>
      <div className="card-container col-md-4 col-lg-3 mb-4 col-sm-12 rounded" key={productId}>
        <Link to={`/products/${productId}`}>
          <div className="card">
            <div className='d-flex justify-content-between p-3'>
              <div className='text-center '>
                <div className='cardImage'>

                  <img src={productImage} className="card-img-top" />
                </div>

                <div className="card-body">
                  <div className='title-container'>
                    <p className=' title fs-5 p-2 h-25 '>{productTitle}</p>
                  </div>

                  <p className='text-black-50 p-2 small'>{productPrice}$</p>
             
                </div>
              </div>
            </div>
          </div>

        </Link>

        <button className='cartBtn border-0 text-white rounded px-3 py-2' onClick={() => increaseCartQuantity(productId)} >

          <i class="fa-solid fa-cart-plus px-2" ></i>add to cart</button>
      </div></>
  )
}

export default Card