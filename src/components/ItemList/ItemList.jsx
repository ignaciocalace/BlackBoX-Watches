import Item from "../Item/Item";

const ItemList = ({ products = [] }) => {
  return (
    <section className="row mx-md-3 justify-content-around g-4 mt-2">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </section>
  );
};

export default ItemList;
