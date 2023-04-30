import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const deleteHandler = (itemIndex, price) => {
    dispatch({ type: "DELETE", payLoad: { itemIndex, price } });
  };
  return (
    <div className="customDiv">
      <h1>Cart Component</h1>
      <hr />

      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index} onClick={() => deleteHandler(index, product.price)}>
              {product.pName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
