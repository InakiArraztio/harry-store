import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const categories = [
    { id: "varitas", label: "Varitas" },
    { id: "pociones", label: "Pociones" },
    { id: "escobas", label: "Escobas" },
    { id: "libros", label: "Libros" },
    { id: "accesorios", label: "Accesorios" }
  ];

  return (
    <nav className="navbar-hogwarts">
      <Link to="/" className="navbar-hogwarts__brand">🪄 Hogwarts Shop</Link>

      <div className="navbar-hogwarts__links">
        {categories.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.id}`} className="navbar-hogwarts__link">
            {cat.label}
          </Link>
        ))}
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;