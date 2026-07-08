import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    let ignore = false;

    setLoading(true);

    const timer = setTimeout(() => {
      if (ignore) return;

      const found = products.find((p) => p.id === itemId);
      setProduct(found ?? null);
      setLoading(false);
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [itemId]);

  if (loading) return <Loader />;
  if (!product) return <p>Producto no encontrado.</p>;
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;