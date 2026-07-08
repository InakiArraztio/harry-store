import { useCart } from "../../context/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { id, name, price, quantity, imageURL } = item;
  const { removeItem } = useCart();

  const subtotal = price * quantity;

  return (
    <div className="cart-item">
      <img src={imageURL} alt={name} className="cart-item__image" />

      <div className="cart-item__info">
        <h4 className="cart-item__name">{name}</h4>
        <p className="cart-item__detail">
          {quantity} x ${price} = <strong>${subtotal}</strong>
        </p>
      </div>

      <button className="cart-item__remove" onClick={() => removeItem(id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;