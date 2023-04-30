import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Total = () => {
  const Total = useSelector((state) => state.total);
  return (
    <div className="customDiv">
      <h1>Total Component</h1>
      <hr />
      <h2>Total : {Total}</h2>
    </div>
  );
};

export default Total;
