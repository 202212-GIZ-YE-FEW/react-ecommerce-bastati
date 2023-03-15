import React from 'react'
import { useParams } from 'react-router-dom'
import { ImageMagnify } from '../components/ImageMagnify';

function ProductDetailsPage() {
  const params = useParams();
  return (
        <ImageMagnify />
    // <h2>
    //   Product Details {params.productId}
    // </h2>
  )
}

export default ProductDetailsPage
