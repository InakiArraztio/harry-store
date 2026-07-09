import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

const products = [
  {
    name: "Varita de Saúco",
    description: "La varita más poderosa jamás creada, alguna vez perteneció a Dumbledore.",
    price: 15000,
    stock: 3,
    category: "varitas",
    imageURL: "/images/varita_sauco.jpg"
  },
  {
    name: "Poción Multijugos",
    description: "Permite transformarte temporalmente en otra persona.",
    price: 8000,
    stock: 10,
    category: "pociones",
    imageURL: "/images/pocion.jpg"
  },
  {
    name: "Nimbus 2000",
    description: "Escoba de carreras, veloz y precisa.",
    price: 45000,
    stock: 5,
    category: "escobas",
    imageURL: "/images/escoba.jpg"
  },
  {
    name: "Capa de Invisibilidad",
    description: "Te vuelve completamente invisible. Reliquia de la Muerte.",
    price: 60000,
    stock: 1,
    category: "accesorios",
    imageURL: "/images/capa.jpg"
  },
  {
    name: "Libro de los Hechizos Avanzados",
    description: "Contiene anotaciones del Príncipe Mestizo.",
    price: 3500,
    stock: 20,
    category: "libros",
    imageURL: "/images/libro.jpg"
  },
  {
    name: "Orbe Mágico",
    description: "Esfera mágica utilizada para la adivinación y la canalización de energía.",
    price: 12000,
    stock: 8,
    category: "accesorios",
    imageURL: "/images/orbe.jpg"
  },
  {
    name: "Lechuza Mensajera",
    description: "Fiel compañera y mensajera de los magos.",
    price: 9500,
    stock: 0,
    category: "animal",
    imageURL: "/images/lechuza.jpg"
  }
];

export const uploadProducts = async () => {
  console.log("Botón clickeado, empezando carga...");

  try {
    const productsRef = collection(db, "products");

    for (const product of products) {
      await addDoc(productsRef, product);
      console.log("Producto subido:", product.name);
    }

    console.log("Productos cargados correctamente.");
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
};