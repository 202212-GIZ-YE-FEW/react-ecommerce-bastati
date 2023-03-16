import React, { useContext } from "react";
import "@fortawesome/fontawesome-svg-core";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "../assets/css/ProductPage.css";
import { Link } from "react-router-dom";

function Card({ productId, productImage, productTitle, productPrice }) {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(productId);
  return (
    <div className="col-md-6 col-lg-4 mb-4 col-sm-12">
      <div className="card">
        <p className="save">SAVE 25%</p>
        <Link to={`/products/${productId}`}>
          <div className="cardImage">
            <img src={productImage} className="card-img-top" />
          </div>
          <div className="card-body">
            <div className="title-container">
              <p className="title fs-5 p-2">{productTitle}</p>
            </div>
            <p className="text-black-50 small">{productPrice}$</p>
          </div>
        </Link>
        <button
          className="cartBtn border-0 text-white rounded px-3 py-2"
          onClick={() => increaseCartQuantity(productId)}
        >
          <i class="fa-solid fa-cart-plus px-2"></i>add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
