import React, { useEffect, useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItems from '../components/CartItems'
import Axios from 'axios';
function CartPage() {
  const { cartItems } = useShoppingCart()
  const [products, setProducts] = useState([])

  // Queries
  useEffect(() => {
    getAllCat()
  }, [])

  // Get all Fehcing data 
  async function getAllCat() {
    return Axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
  }
  return (
    <>

      <div className="container">
        <div className='categorie-div'></div>
        <div class="col-md-8 cart">
          <div class="title">
            <div class="row">
              <div class="col"><h4><b>Shopping Cart</b></h4></div>
              <div class="col align-self-center text-end font-weight-bold">{cartItems.length}items</div>
            </div>
          </div>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          <div className='fs-5 p-3 text-end'>
            Total :
            {
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            }$
          </div>
        </div>
      </div>

    </>
  )
}

export default CartPage