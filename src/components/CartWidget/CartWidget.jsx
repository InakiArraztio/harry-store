import { Link } from "react-router-dom";

const CartWidget = () => {
  // Por ahora hardcodeado, después vendrá del CartContext
  const totalQuantity = 0;

  return (
    <Link to="/cart" className="text-white text-decoration-none d-flex align-items-center">
      🛒
      <span className="ms-1">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;