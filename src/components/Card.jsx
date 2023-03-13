import React from 'react'


function Card({ productId, productImage, productTitle, productPrice }) {
  return (
    <>
      <div className="cart col-md-4 col-sm-6 p-2 shadow-sm rounded" key={productId}>
        <div className='d-flex justify-content-center'>
          <div className='text-center '>
            <img src={productImage} className="w-50" />

            <p className='fs-5 p-2 h-25 '>{productTitle}</p>
            <p className='text-black-50 p-2'>{productPrice}$</p>
            <button className='cartBtn border-0 text-white rounded px-3'>add to cart</button>
          </div>
        </div>
      </div></>
  )
}

export default Card