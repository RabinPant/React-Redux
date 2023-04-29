import React from "react";

const Cart = () => {
  const cart = [
    { pName: "Apple", price: 10 },
    { pName: "Orange", price: 20 },
  ];
  return (
    <div className="customDiv">
      <h1>Cart Component</h1>
      <hr />

      <ul>
        {cart.map((product, index) => {
          return <li key={index}>{product.pName}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;
