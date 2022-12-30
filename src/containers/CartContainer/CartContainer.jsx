import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartItems from "../../components/CartItems/CartItems";
import ModalForm from "../../components/ModalForm/ModalForm";
import { useCartContext } from "../../context/CartContext";
import { useOrderIdContext } from "../../context/OrderIdContext";

const CartContainer = () => {
  const { cartList, totalPrice, cleanCart } = useCartContext();
  const { idOrder } = useOrderIdContext();
  {
    idOrder.id != undefined
      ? toast.info(`Your order id is: ${idOrder.id}`, {
          position: "bottom-center",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : {};
  }

  return (
    <section className="vh-50 bg-light">
      {idOrder.id != undefined ? (
        <ToastContainer
          position="bottom-center"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      ) : (
        <></>
      )}
      {cartList.length !== 0 ? (
        <>
          {cartList.map((product) => (
            <CartItems key={product.id} product={product} />
          ))}
          <div className="card-text bg-light">Total: U$S {totalPrice()}</div>
          <button className="btn btn-danger mx-2" onClick={cleanCart}>
            Clean Cart
          </button>
          <ModalForm />
        </>
      ) : (
        <div className="bg-light">
          <h5 className="py-3 d-flex justify-content-center">Empty Cart</h5>
          <Link to="/" className="d-flex justify-content-center">
            <button className="btn btn-primary m-1 ">Keep Buying</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default CartContainer;
