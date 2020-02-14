import React from "react";

function Product(props) {
  return (
    <div>
      <img value={props.inventory.img} alt="" />
      <h2>{props.inventory.name}</h2>
      <p>{props.inventory.price}</p>
    </div>
  );
}

export default Product;
