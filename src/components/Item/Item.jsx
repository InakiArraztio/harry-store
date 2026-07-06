import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, name, price, imageURL } = product;

  return (
    <div className="item-card">
      <img src={imageURL} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;