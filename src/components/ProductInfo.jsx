import React from "react";

const ProductInfo = () => {
  const products = {
    pName: "Laptop",
    price: 1200,
    availability: "In Stock",
  };

  return (
    <div>
      <h2>Name: {products.pName}</h2>
      <h3>Peice: {products.price}</h3>
      <h3>Availability: {products.availability}</h3>
    </div>
  );
};

export default ProductInfo;
