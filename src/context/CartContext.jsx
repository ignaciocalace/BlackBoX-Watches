import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    const index = cartList.findIndex((element) => element.id === product.id);

    if (index !== -1) {
      cartList[index].count += product.count;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, product]);
    }
  };

  // Total price
  const totalPrice = () =>
    cartList.reduce((total, prod) => (total += prod.price * prod.count), 0);
  // Total Cant
  const totalItems = () =>
    cartList.reduce((total, prod) => (total += prod.count), 0);
  // clean cart
  const cleanCart = () => setCartList([]);
  // Delete 1 item
  const deleteItem = (id) =>
    setCartList(cartList.filter((prod) => prod.id !== id));

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        totalPrice,
        totalItems,
        cleanCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
