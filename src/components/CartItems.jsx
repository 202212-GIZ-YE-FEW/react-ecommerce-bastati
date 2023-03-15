
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useShoppingCart } from '../context/ShoppingCartContext'

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
          <div className="row border-top border-bottom">
              <div className="row main align-items-center">
                  <div className="col-2">
                      <img className="img-fluid" src={item.image}/>

                  </div>
                  <div className="col">
                   
                      <div className="row">{item.title} </div>
                      <div className="row text-muted">{item.price}$</div>
                  </div>
                  <div className="col">
                      < span className="fs-6 p-2" onClick={() => decreaseCartQuantity(item.id)}>-</span>
                     
                          <span className="fs-6 p-2" >
                              {quantity}
                          </span>
                    
                      < span className="fs-6 p-2" onClick={() => increaseCartQuantity(item.id)}>+</span>
                  </div>
                  <div className="col">
                      < span className="fs-6 p-2">{item.price * quantity}$</span>
                  </div>
                  <div className="col">
                      <button type="button" class="btn btn-danger" onClick={() => removeFromCart(item.id)}><i class="fa-solid fa-xmark"></i></button>
                
                    </div>
              </div>
          </div>
       
    </div>
  )
}
