import { createContext, useContext, useState } from "react";

const OrderIdContext = createContext([]);

export const useOrderIdContext = () => useContext(OrderIdContext);

export const OrderIdContextProvider = ({ children }) => {
  const [idOrder, setIdOrder] = useState([]);

  const addIdOrder = (idOrderValue) => setIdOrder({ id: idOrderValue });

  return (
    <OrderIdContext.Provider
      value={{
        idOrder,
        addIdOrder,
      }}
    >
      {children}
    </OrderIdContext.Provider>
  );
};
