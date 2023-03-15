
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../assets/css/Cartitem.css'
export default function CartItems({ id, quantity }) {
    const [products, setProducts] = useState([])
    const { cartItems, increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart } = useShoppingCart()

    // Queries
    useEffect(() => {
        getAllCat()
    }, [])

    // Get all Fehcing data 
    async function getAllCat() {
        return Axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
    }
    const item = products.find((i) => i.id === id);
    if (item == null) return null;
    return (
        <div>
            <div className="row cart-item">
                <div className="row main align-items-center justify-content-between">
                    <div className="col-lg-2">
                        <img className="cart-item-img" src={item.image} />
                    </div>
                    <div className="col-lg-3">

                        <div className="cart-item-title">{item.title} </div>
                        <div className="cart-item-price">{item.price}$</div>
                    </div>
                    <div className="col-lg-2">
                        < div className="cart-item-decrease" onClick={() => decreaseCartQuantity(item.id)}>-</div>

                        <div className="fs-6 p-2" >
                            {quantity}
                        </div>

                        <div className="cart-item-increase" onClick={() => increaseCartQuantity(item.id)}>+</div>
                    </div>
                    <div className="col-lg-2">
                        < span className="cart-item-totl-price">{item.price * quantity}$</span>
                    </div>
                    <div className="col-lg-3">
                        <button class="btn-delete" onClick={() => removeFromCart(item.id)}>
                            <p class="paragraph"> delete </p>
                            <span class="icon-wrapper">
                                <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
