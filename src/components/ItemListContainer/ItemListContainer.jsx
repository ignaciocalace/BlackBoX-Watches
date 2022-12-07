import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../helpers/dataBase";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting = "default greeting" }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      dataBase()
        .then((data) =>
          setProduct(data.filter((prod) => prod.category === categoryId))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      dataBase()
        .then((data) => setProduct(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="bg-light">
      <h1 className="d-flex justify-content-center">{greeting}</h1>
      <section className="container">
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ItemList products={products} />
        )}
      </section>
    </div>
  );
};

export default ItemListContainer;
