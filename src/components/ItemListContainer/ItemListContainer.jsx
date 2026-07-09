import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) return;

    const getProducts = async () => {
      setLoading(true);

      try {
        const productsRef = collection(db, "products");
        const productsQuery = query(productsRef, where("category", "==", categoryId));

        const snapshot = await getDocs(productsQuery);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  if (!categoryId) {
    return (
      <>
        <div className="hero-banner">
          <h1>Bienvenido al Callejón Diagon</h1>
          <p>Todo lo que un mago necesita, a un hechizo de distancia.</p>
        </div>
        <CategoryBanner />
      </>
    );
  }

  if (loading) return <Loader />;

  if (items.length === 0) {
    return (
      <p className="empty-category">
        No encontramos productos mágicos en esta categoría todavía.
      </p>
    );
  }

  return <ItemList products={items} />;
};

export default ItemListContainer;