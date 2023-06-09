import React, { useEffect, useState } from 'react'
import '../assets/css/ProductPage.css'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Axios from 'axios';
import Rating from 'react-rating';



function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getLast()
  }, [])

  async function getLast() {
    return Axios.get('https://fakestoreapi.com/products?limit=5')
      .then(res => setProducts(res.data))
  }

  return (
    <>
      <Carousel />
      <div className='container'>
        <div className='row'>
          <div className="col-12">
            <h1 className='py-2'>Last Products</h1>
          </div>
          <div className="row">
            {products?.map(product =>
              <Card key={product.id} productId={product.id}
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
                productRating={product.rating && product.rating.rate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage