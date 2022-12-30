import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ItemDetail = ({ productDet }) => {
  //  Context
  const { cartList, addToCart } = useCartContext();
  const [isCant, setCant] = useState(false);
  const [isValidId, setValidId] = useState([true]);

  useEffect(() => {
    productDet.name == undefined ? setValidId(false) : {};
  }, []);

  const captureValue = (count) => {
    addToCart({ ...productDet, count });
    const isOne = count === 1;
    toast.success(
      isOne ? `Added to Cart: ${count} item` : `Added to Cart: ${count} items`,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    setCant(true);
  };

  return (
    <section className="container">
      {isValidId ? (
        <div className="card py-5 border-0 shadow bg-body rounded">
          <div className="row g-0">
            <div className="col-md-4 p-3">
              <img
                src={productDet.picture}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{productDet.name}</h5>
                <p className="card-text">{productDet.text}</p>

                <h6>US$ {productDet.price}</h6>
                <p className="card-text">
                  <small className="text-muted">
                    Designed for {productDet.category}
                  </small>
                </p>
              </div>
              <div className="w-75">
                {isCant ? (
                  <>
                    <Link to="/">
                      <button className="btn btn-primary m-1">
                        Keep Buying
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button className="btn btn-secondary m-1">
                        Go to Cart
                      </button>
                    </Link>
                    <button
                      className="btn btn-success m-1"
                      onClick={() => setCant(false)}
                    >
                      Add more Items
                    </button>
                  </>
                ) : (
                  <ItemCount stock={productDet.stock} onAdd={captureValue} />
                )}
              </div>
            </div>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      ) : (
        <>
          <h5 className="my-3 d-flex justify-content-center">
            This item do not exist
          </h5>
          <Link to="/" className="d-flex justify-content-center">
            <button className="btn btn-primary m-1 ">Keep Buying</button>
          </Link>
        </>
      )}
    </section>
  );
};

export default ItemDetail;
