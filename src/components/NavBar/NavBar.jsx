import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const categories = [
    { id: "varitas", label: "Varitas" },
    { id: "pociones", label: "Pociones" },
    { id: "escobas", label: "Escobas" },
    { id: "libros", label: "Libros" },
    { id: "accesorios", label: "Accesorios" }
  ];

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <Link to="/" className="navbar-brand">
        🪄 Hogwarts Shop
      </Link>

      <div className="d-flex gap-3">
        {categories.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.id}`} className="nav-link text-white">
            {cat.label}
          </Link>
        ))}
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;