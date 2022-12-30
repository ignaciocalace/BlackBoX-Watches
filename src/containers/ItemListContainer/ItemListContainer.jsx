import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../../components/ItemList/ItemList";
import Loading from "../../components/Loading/Loading";

const ItemListContainer = ({ greeting }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");

    if (categoryId) {
      const queryFiltred = query(
        queryCollection,
        where("category", "==", categoryId),
        where("isActive", "==", true)
      );
      getDocs(queryFiltred)
        .then((data) =>
          setProduct(
            data.docs.map((products) => ({
              id: products.id,
              ...products.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((data) =>
          setProduct(
            data.docs.map((products) => ({
              id: products.id,
              ...products.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="bg-light">
      <h1 className="d-flex justify-content-center">
        {greeting == undefined ? `Watches for ${categoryId}` : greeting}
      </h1>
      <section className="container">
        {loading ? <Loading /> : <ItemList products={products} />}
      </section>
    </div>
  );
};

export default ItemListContainer;
