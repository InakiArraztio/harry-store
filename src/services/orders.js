import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const createOrder = async (order) => {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, {
    ...order,
    date: serverTimestamp()
  });

  return docRef.id;
};