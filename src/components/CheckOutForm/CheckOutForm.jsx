import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { createOrder } from "../../services/firebase/orders";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!/^\d{6,15}$/.test(form.phone)) {
      newErrors.phone = "Ingresá solo números (6 a 15 dígitos)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const order = {
      buyer: form,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: new Date().toISOString()
    };

    const id = await createOrder(order);

    setOrderId(id);
    setLoading(false);
    clearCart();
  };

  if (cartItems.length === 0 && !orderId) {
    return (
      <div className="checkout-empty">
        <h2>No hay productos para comprar</h2>
        <p>Agregá algo al carrito antes de finalizar la compra.</p>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra confirmada! 🦉</h2>
        <p>Tu orden fue generada con éxito.</p>
        <p className="checkout-success__id">ID de tu orden: <strong>{orderId}</strong></p>
        <button className="checkout-success__btn" onClick={() => navigate("/")}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>

      <div className="checkout-form__field">
        <label htmlFor="name">Nombre completo</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange}/>
        {errors.name && <span className="checkout-form__error">{errors.name}</span>}
      </div>

      <div className="checkout-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}/>
        {errors.email && <span className="checkout-form__error">{errors.email}</span>}
      </div>

      <div className="checkout-form__field">
        <label htmlFor="phone">Teléfono</label>
        <input id="phone" name="phone" type="text" value={form.phone} onChange={handleChange}/>
        {errors.phone && <span className="checkout-form__error">{errors.phone}</span>}
      </div>

      <p className="checkout-form__total">Total a pagar: ${getTotalPrice()}</p>

      <button type="submit" className="checkout-form__submit" disabled={loading}>
        {loading ? "Procesando..." : "Confirmar compra"}
      </button>
    </form>
  );
};

export default CheckoutForm;