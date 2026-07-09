import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "./config";

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data()
  }));
};

export const getProductsByCategory = async (categoryId) => {
  const q = query(collection(db, "products"), where("category", "==", categoryId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data()
  }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;

  return { id: docSnap.id, ...docSnap.data() };
};