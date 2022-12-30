import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./context/CartContext";
import { OrderIdContextProvider } from "./context/OrderIdContext";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import CartContainer from "./containers/CartContainer/CartContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <OrderIdContextProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"It's your time"} />}
            />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route
              path="/ItemDetail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </OrderIdContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
