import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-5 bg-light">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <Nav className="px-1 d-flex justify-content-between align-items-center col-4">
          <NavLink
            to="/"
            className="text-decoration-none text-reset p-1 text-muted"
          >
            Home
          </NavLink>
          <NavLink
            to="/men"
            className="text-decoration-none text-reset p-1 text-muted"
          >
            Men
          </NavLink>
          <NavLink
            to="/women"
            className="text-decoration-none text-reset p-1 text-muted"
          >
            Women
          </NavLink>
          <NavLink
            to="/kids"
            className="text-decoration-none text-reset p-1 text-muted"
          >
            Kids
          </NavLink>
        </Nav>
      </ul>
      <p className="text-center text-muted">© Created by Ignacio Calace</p>
    </footer>
  );
};

export default Footer;
