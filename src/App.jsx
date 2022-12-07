import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"It's your time"} />}
        />
        <Route
          path="/:categoryId"
          element={<ItemListContainer greeting={"It's your time"} />}
        />
        <Route
          path="/ItemDetail/:productId"
          element={<ItemDetailContainer />}
        />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
