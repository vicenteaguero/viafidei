// src/components/Nav.jsx

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <Link to="/" className="nav-link">
        Reflexiones
      </Link>
      <Link to="/mapa" className="nav-link">
        Mapa de Iglesias
      </Link>
      <Link to="/apologetica" className="nav-link">
        Apologética Moderna
      </Link>
      <Link to="/elcaminodelafe" className="nav-link">
        ¿Qué es Via Fidei?
      </Link>
    </nav>
  );
};

export default Nav;
