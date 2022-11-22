const ItemListContainer = ({ greeting = "default greeting" }) => {
  return (
    <div className="text-align-center">
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
