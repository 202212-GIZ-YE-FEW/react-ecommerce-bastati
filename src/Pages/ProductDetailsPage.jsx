import React from 'react'
import { useParams } from 'react-router-dom'
import ImageMagnify from '../components/ImageMagnify';
import { useShoppingCart } from '../context/ShoppingCartContext'
function ProductDetailsPage() {
  const params = useParams();
  const { cartItems } = useShoppingCart()
  return (
    <ImageMagnify cartItems={cartItems}  />
    // <h2>
    //   Product Details {params.productId}
    // </h2>
  )
}

export default ProductDetailsPage
