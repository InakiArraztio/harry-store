import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    let ignore = false; // flag para evitar setState si el efecto ya no es válido

    setLoading(true);

    const timer = setTimeout(() => {
      if (ignore) return; // si cambió categoryId antes de que termine, no hacemos nada

      const filtered = categoryId
        ? products.filter((p) => p.category === categoryId)
        : products;

      setItems(filtered);
      setLoading(false);
    }, 500);

    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [categoryId]);

  if (loading) return <Loader />;

  return <ItemList products={items} />;
};

export default ItemListContainer;