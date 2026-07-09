import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      🛒
      {quantity > 0 && (
        <span className="cart-widget__count">
          {quantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;