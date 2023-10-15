import React from "react";

const card = ({productData}) => {
  return (
    <div className="card p-5" style={{ width: "18rem" }} key={productData.key}>
      <img src={productData.image} className="card-img-top" alt="" />
      <p>{productData.title}</p>
      <h3>$ {productData.price}</h3>
    </div>
  );
};

export default card;
