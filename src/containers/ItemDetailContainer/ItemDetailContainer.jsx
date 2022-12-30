import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Loading from "../../components/Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productRes, setProduct] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { productId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", productId);
    getDoc(queryDoc)
      .then((resp) => {
        setProduct({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="bg-light">
      {" "}
      {loading ? <Loading /> : <ItemDetail productDet={productRes} />}
    </div>
  );
};

export default ItemDetailContainer;
