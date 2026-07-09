import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

const newProducts = [ 
     {
  name: "Felix Felicis",
  description: "Quien la beba sea extremadamente afortunado durante un tiempo determinado",
  price: 110000,
  stock: 6,
  category: "pociones",
  imageURL: "/images/felix_felicis.jpg" 
  },
  {
    name: "Gira Tiempo",
    description: "Imagina que el tiempo es una línea recta. Si das 3 vueltas al reloj, viajas 3 horas al pasado. Es igual a retroceder una película que ya viste. ",
    price: 25000,
    stock: 3,
    category: "accesorios",
    imageURL: "/images/gira_tiempo.jpg" 
  },
  {
    name: "Libro de Hechizos",
    description: "Guia enfocada al uso de la varita",
    price: 19000,
    stock: 6,
    category: "libros",
    imageURL: "/images/libros_hechizos.jpg"
  },
  {
    name: "Nimbus 2000",
    description: "Escoba más veloz del mercado hasta la creación de la Saeta de Fuego..",
    price: 120000,
    stock: 6,
    category: "escobas",
    imageURL: "/images/nimbus_2000.png"
  },
  {
    name: "Antídoto para las picaduras de billywig",
    description: "Contrarresta los efectos de la picadura de un billywig.",
    price: 76000,
    stock: 14,
    category: "pociones",
    imageURL: "/images/pocion2.jpg"
  },
  {
    name: "Tunica Gryffindor",
    description: "Tunica de la casa de Godric Gryffindor.",
    price: 200000,
    stock: 6,
    category: "accesorios",
    imageURL: "/images/tunica_gryffindor.jpg" 
  },
  {
    name: "Tunica Hufflepuff",
    description: "Tunica de la casa de Helga Hufflepuff.",
    price: 200000,
    stock: 6,
    category: "accesorios",
    imageURL: "/images/tunica_hufflepuff.jpg" 
  },
  {
    name: "Tunica Revenclaw",
    description: "Tunica de la casa de Rowena Revenclaw.",
    price: 200000,
    stock: 6,
    category: "accesorios",
    imageURL: "/images/tunica_revenclaw.jpg"
  },
  {
    name: "Tunica Slytherin",
    description: "Tunica de la casa de Salazar Slytherin.",
    price: 11000,
    stock: 6,
    category: "accesorios",
    imageURL: "/images/tunica_slytherin.jpg"
  },
  {
    name: "Saeta de Fuego",
    description: "La escoba de competición más rápida del mundo mágico, reconocida por su velocidad, estabilidad y excelente maniobrabilidad.",
    price: 250000,
    stock: 3,
    category: "escobas",
    imageURL: "/images/saeta_de_fuego.jpg"
  },
  {
    name: "Varita de Acebo",
    description: "Varita de madera de acebo, ideal para magos valientes y decididos. Destaca por su precisión y gran poder en los hechizos.",
    price: 25000,
    stock: 6,
    category: "varitas",
    imageURL: "/images/varita3.jpg"
  },
  {
    name: "Varita de Vid",
    description: "Elegante varita de madera de vid, conocida por su afinidad con la magia avanzada y su excelente equilibrio en el lanzamiento de hechizos.",
    price: 25700,
    stock: 6,
    category: "varitas",
    imageURL: "/images/varita4.jpg"
  },
]

export const uploadNewProducts = async () => {
  try {
    const productsRef = collection(db, "products");

    for (const product of newProducts) {
      await addDoc(productsRef, product);
    }

    console.log("Productos nuevos cargados correctamente.");
  } catch (error) {
    console.error(error);
  }
};