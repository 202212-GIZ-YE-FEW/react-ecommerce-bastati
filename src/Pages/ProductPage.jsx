import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCat } from '../utilities/api'
import Axios from 'axios';
import Card from '../components/Card';
function ProductPage({ productId, productImage, productTitle, productPrice }) {
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

  // Quere for Fetching All Categories
  const quere = useQuery({ queryKey: ['categories'], queryFn: getCat });
  const { isSuccess } = quere

  // fatch Categories by Categories Name
  async function getCatName(catname) {
    return Axios.get(`https://fakestoreapi.com/products/category/${catname}`)
      .then(res => setProducts(res.data))
  }
  return (
    <>
      <div className="container p-5">
        <div className='categorie-div'>
          <button className='categorie-btn' onClick={() => getAllCat()}>All</button>
          {isSuccess && quere.data?.map((categorie, index) => {
            return <button key={index} onClick={() => getCatName(categorie)} className='categorie-btn'>{categorie}</button>
          })}
        </div>

        <div className="row">
          {products?.map(product =>
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
};

export default ProductPage