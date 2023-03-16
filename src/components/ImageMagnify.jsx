import React, { useState, useEffect } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




 const ImageMagnify = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [productId]);
   const productImg = product.image
   // const rates = product.rating.rate


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='rounded float-start'>
          <ReactImageMagnify {...{
              smallImage: {
                alt: '',
                isFluidWidth: true,
                src: productImg
              },
              largeImage: {
                src: productImg,
                width: 2100,
                height: 2100
              }
            }} />
          </div>
        </div>
        <div className='col-lg-6'>
          <h2 className='title'>{product.title}</h2>
          <Rating
                    initialRating={5}
                    readonly
                  />{product.rating.rate}

          <div className="d-flex">
            <div className="price">
              <p>Old</p>
              <p className="">
                {product.price + product.price * 0.25} $
              </p>
            </div>
            <div className="">
              <p>New</p>
              <p>{product.price} $</p>
            </div>
          </div>
          <div className='description'>
            <p>{product.description}</p>
          </div>
          <div className="quantity">
            <h2 className="">QTY.</h2>
            <div>
              <button className="btn btn-light" onClick={() => setCount(count + 1)}> + </button>
              <span>{count}</span>
              <button className="btn btn-light" onClick={() => setCount(count - 1)}> - </button>
              <button className="btn btn-primary" onClick={() => addtocartFun(product.id)}>ADD TO CART</button>
            </div>
            
            
            
            
        </div>
        </div>
      </div>
    </div>
  )
}
export default ImageMagnify