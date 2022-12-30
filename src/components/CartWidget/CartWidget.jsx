import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCartContext();
  return (
    <div className="m-5 d-flex position-relative">
      <BsCart4 className="fs-1" />

      <p className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
        {totalItems()}
      </p>
    </div>
  );
};

export default CartWidget;
