import { Link } from "react-router-dom";
import "./CategoryBanner.css";

const categories = [
  { id: "varitas", label: "Varitas", image: "/images/varita.jpg" },
  { id: "escobas", label: "Escobas", image: "/images/escoba.jpg" },
  { id: "animal", label: "Mascotas", image: "/images/lechuza.jpg" },
  { id: "pociones", label: "Pociones", image: "/images/pocion.jpg" },
  { id: "accesorios", label: "Accesorios", image: "/images/orbe.jpg" }
];

const CategoryBanner = () => {
  return (
    <div className="category-banner">
      {categories.map((cat) => (
        <Link key={cat.id} to={`/category/${cat.id}`} className="category-banner__item">
          <img src={cat.image} alt={cat.label} className="category-banner__image" />
          <span className="category-banner__label">{cat.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryBanner;