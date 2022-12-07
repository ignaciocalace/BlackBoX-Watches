import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productDet = [] }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
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
          <div className="card-footer w-50">
            <ItemCount stock={productDet.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
