import React from "react";

const Btns = ({ cartsCount, switchToCart, confirmCount, confirmOrder }) => {
  return (
    <div className="buttons">
      <button onClick={switchToCart}> {cartsCount} Cart</button>
      <button onClick={confirmOrder}> {confirmCount} Orders </button>
    </div>
  );
};

export default Btns;
