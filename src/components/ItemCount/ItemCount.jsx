import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => quantity < stock && setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="item-count">
      <button className="item-count__btn" onClick={decrement} disabled={quantity === 1}>-</button>
      <span className="item-count__value">{quantity}</span>
      <button className="item-count__btn" onClick={increment} disabled={quantity === stock}>+</button>
      <button className="item-count__add-btn" onClick={() => onAdd(quantity)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;