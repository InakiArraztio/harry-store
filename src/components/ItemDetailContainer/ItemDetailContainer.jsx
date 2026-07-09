import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/config";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      try {
        const productRef = doc(db, "products", itemId);
        const snapshot = await getDoc(productRef);

        if (snapshot.exists()) {
          setProduct({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);
  if (loading) return <Loader />;
  if (!product) {
    return <h2>Producto no encontrado.</h2>;
  }
  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;