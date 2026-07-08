import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  const { id, name, price, category, imageURL } = product;

  return (
    <div className="item-card">
      <span className="item-card__category">{category}</span>
      <img src={imageURL} alt={name} className="item-card__image" />
      <h3 className="item-card__name">{name}</h3>
      <p className="item-card__price">${price}</p>
      <Link to={`/item/${id}`} className="item-card__link">Ver detalle</Link>
    </div>
  );
};

export default Item;