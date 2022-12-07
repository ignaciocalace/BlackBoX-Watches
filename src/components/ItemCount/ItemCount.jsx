import { useState } from "react";

const ItemCount = ({ stock = 10, init = 1 }) => {
  const [count, setCount] = useState(init);

  const subtraction = () => {
    if (count > init) {
      setCount(count - 1);
    }
  };

  const addition = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const captureValue = () => {
    console.log(`Adding to Cart: ${count}`);
  };
  return (
    <div className="card ">
      <div className="card-body mx-auto">
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={subtraction}
        >
          -
        </button>
        <label className="fs-3">{count}</label>
        <button className="btn btn-outline-primary btn-sm" onClick={addition}>
          +
        </button>
      </div>
      <div className="card-footer ">
        <button className="btn btn-success" onClick={captureValue}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
