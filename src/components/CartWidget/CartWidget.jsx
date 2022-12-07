import React from "react";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="m-5 d-flex">
      <BsCart4 className="fs-1" />

      <p>3</p>
    </div>
  );
};

export default CartWidget;
