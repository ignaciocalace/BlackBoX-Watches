import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../helpers/dataBase";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productRes, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    dataBase()
      .then((respProd) =>
        setProduct(respProd.find((prod) => prod.id === productId))
      )
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ItemDetail productDet={productRes} />
    </div>
  );
};

export default ItemDetailContainer;
