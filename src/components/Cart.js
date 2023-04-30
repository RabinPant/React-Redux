import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
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
