import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetailsPage() {
  const params = useParams();
  return (
    <>
      <h2>
        Product Details {params.productId} {first}
      </h2>
    </>

  )
}

export default ProductDetailsPage
