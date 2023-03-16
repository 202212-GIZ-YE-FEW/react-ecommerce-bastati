import React from "react";
import useProduct from "./useProduct";

const ProductList = () => {
  const { data } = useProduct();

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>
//   }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;