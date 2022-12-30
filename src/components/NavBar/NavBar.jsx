import BrandName from "../BrandName/BrandName";
import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="text-decoration-none text-reset col-8">
            <BrandName />
          </NavLink>
        </Navbar.Brand>
        <Nav className="px-1 d-flex justify-content-between align-items-center col-4">
          <NavLink to="/" className="text-decoration-none text-reset p-1">
            Home
          </NavLink>
          <NavLink to="/men" className="text-decoration-none text-reset p-1">
            Men
          </NavLink>
          <NavLink to="/women" className="text-decoration-none text-reset p-1">
            Women
          </NavLink>
          <NavLink to="/kids" className="text-decoration-none text-reset p-1">
            Kids
          </NavLink>

          <NavLink to="/cart" className="text-decoration-none text-reset p-1">
            <CartWidget />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
