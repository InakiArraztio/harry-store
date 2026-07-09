import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { name, description, price, stock, imageURL } = product;
  const [addedQuantity, setAddedQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAddedQuantity(quantity);
  };

  return (
    <div className="container item-detail my-4">
      <div className="row">
        <div className="col-md-5">
          <div className="item-detail__image-wrapper">
            <img src={imageURL} alt={name} className="item-detail__image" />
          </div>
        </div>

        <div className="col-md-7">
          <h2>{name}</h2>
          <p>{description}</p>
          <h4>${price}</h4>

          {stock === 0 && (
            <p className="text-danger fw-bold">Sin stock disponible</p>
          )}

          {stock > 0 && addedQuantity === 0 && (
            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
          )}

          {addedQuantity > 0 && (
            <div className="alert alert-success">
              Agregaste {addedQuantity} unidad(es) al carrito. 
              <Link to="/cart" className="ms-2">Ver carrito</Link>
              {" · "}
              <Link to="/">Seguir comprando</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;