import { useCartContext } from "../../context/CartContext";
const CartItems = ({ product }) => {
  const { deleteItem } = useCartContext();

  return (
    <section className="mx-5">
      {
        <div className="card py-3 w-50 shadow p-3 mb-5 bg-body rounded">
          <div className="row g-0">
            <div className="col-md-2 ">
              <img className="w-100" src={product.picture} />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">U$S {product.price}</p>
                <div className="text-muted">Cant: {product.count}</div>
              </div>
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-danger"
                onClick={() => deleteItem(product.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

export default CartItems;
