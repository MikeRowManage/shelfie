import React from "react";

function Product(props) {
  return (
    <div style={{ height: "100px", width: "200px"}}>
      <img value={props.inventory.img} alt="" style={{ height: "20px", width: "20px"}} />
      <h2 style={{ height: "20px", width: "20px", color: "black"}}>{props.inventory.name}</h2>
      <p style={{ height: "20px", width: "20px"}}>{props.inventory.price}</p>
      <button onClick={props.deleteProduct(props.inventory.id)}>Delete</button>
    </div>
  );
}

export default Product;
