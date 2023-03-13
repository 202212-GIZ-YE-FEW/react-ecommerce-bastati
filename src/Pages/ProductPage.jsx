import React from 'react'
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import Card from '../components/Card';
function ProductPage({ productId, productImage, productTitle, productPrice }) {
  // Queries
  const { data, isError, isFetching, isSuccess } = useQuery(['products'], () => {
    return Axios.get('https://fakestoreapi.com/products')
      .then(res => res.data)
  });
  return (
    <>
      <div>ProductPage</div>
      <div>{isFetching && 'Background Updating...'}</div>
      <div>{isError && 'Error'}</div>
      <div className="container">
        <div className="row d-flex justify-content-evenly">
          {isSuccess && data?.map(product =>
            <Card key={product.id} productId={product.id}
              productImage={product.image}
              productTitle={product.title}
              productPrice={product.price}
            />
          )}
        </div>

      </div>


    </>
  )
}

export default ProductPage