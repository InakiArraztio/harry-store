import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <p>Todavía no agregaste ningún objeto mágico.</p>
        <Link to="/" className="cart-empty__link">Ver catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Tu carrito</h2>

      <div className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart__summary">
        <button className="cart__clear-btn" onClick={clearCart}>Vaciar carrito</button>

        <h3 className="cart__total">Total: ${getTotalPrice()}</h3>

        <Link to="/checkout" className="cart__checkout-btn">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;