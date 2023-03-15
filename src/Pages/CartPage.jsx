import React, { useEffect, useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CartItems from '../components/CartItems'
import Axios from 'axios';
import '../assets/css/Cartitem.css'
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
        <div class="cart">
          <div class="title">
            <div class="row cart-text">
              <div class="col-lg-6"><h4 className='cart-title'><b>Shopping Cart</b></h4></div>
              <div class="col-lg-6 align-self-center text-end font-weight-bold">items <span className='cart-length'>{cartItems.length}</span></div>
            </div>
          </div>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}
          <div className='fs-5 p-3 text-end'>
            <span className='cart-price'>Total</span> : 
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