import { Link } from "react-router-dom";
import "/src/components/Item/item.css";
const Item = ({ product = [] }) => {
  return (
    <div className="col-md-3">
      <div className="card-sl">
        <div className="card-image">
          <img src={product.picture} />
        </div>

        <a className="card-action" href="#">
          <i className="fa fa-heart"></i>
        </a>
        <div className="card-heading">{product.name}</div>
        <div className="card-text text-truncate">{product.text}</div>
        <div className="card-text">U$S {product.price}</div>

        <Link to={`/ItemDetail/${product.id}`}>
          <button className="card-button border-0 text-decoration-none">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
