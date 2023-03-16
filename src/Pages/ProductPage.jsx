import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCat } from '../utilities/api'
import Axios from 'axios';
import Card from '../components/Card';


function ProductPage({ productId, productImage, productTitle, productPrice }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  function handleSerach(e) {
    setSearch(e.target.value)
  }
  // Queries
  useEffect(() => {
    getAllCat()
  }, [])

  // Get all Fehcing data 
  async function getAllCat() {
    return Axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
  }
  console.log({ products })
  const itemToDisplay = products.filter((item) => {
    return ((item.title.toLowerCase().includes(search.toLowerCase())) || item.price == search)
  }
  );
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
      <div className="container">
        <form className='form-box'>
          <input type="text" name="text" class="input" placeholder="Search..." value={search} onChange={handleSerach} />
        </form>

        <div className='categorie-div'>
          <button className='categorie-btn' onClick={() => getAllCat()}>All</button>
          {isSuccess && quere.data?.map((categorie, index) => {
            return <button key={index} onClick={() => getCatName(categorie)} className='categorie-btn'>{categorie}</button>
          })}
        </div>

        <div className="row justify-content-around">
          {itemToDisplay?.map(product =>
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