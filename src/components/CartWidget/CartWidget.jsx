import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      🛒<span className="cart-widget__count">{getTotalQuantity()}</span>
    </Link>
  );
};

export default CartWidget;