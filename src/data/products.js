import varita_sauco from "../images/varita.jpg";
import pocion from "../images/pocion.jpg";
import nimbus2000 from "../images/nimbus2000.jpg";
import libro from "../images/libro.jpg";
import capa_invisibiliad from "../images/capa_invisibilidad.jpg";
import orbe from "../images/orbe.jpg";
import lechuza from "../images/lechuza.jpg";

export const products = [
  {
    id: "1",
    name: "Varita de Saúco",
    description: "La varita más poderosa jamás creada, alguna vez perteneció a Dumbledore.",
    price: 15000,
    stock: 3,
    category: "varitas",
    imageURL: varita_sauco
  },
  {
    id: "2",
    name: "Poción Multijugos",
    description: "Permite transformarte temporalmente en otra persona.",
    price: 8000,
    stock: 10,
    category: "pociones",
    imageURL: pocion
  },
  {
    id: "3",
    name: "Nimbus 2000",
    description: "Escoba de carreras, veloz y precisa.",
    price: 45000,
    stock: 5,
    category: "escobas",
    imageURL: nimbus2000
  },
  {
    id: "4",
    name: "Capa de Invisibilidad",
    description: "Te vuelve completamente invisible. Reliquia de la Muerte.",
    price: 60000,
    stock: 1,
    category: "accesorios",
    imageURL: capa_invisibiliad
  },
  {
    id: "5",
    name: "El Libro de los Hechizos Avanzados",
    description: "Contiene anotaciones del Príncipe Mestizo.",
    price: 3500,
    stock: 20,
    category: "libros",
    imageURL: libro
  },
    {
    id: "6",
    name: "Orbe Mágico",
    description: "Esfera mágica utilizada para la adivinación y la canalización de energía.",
    price: 3500,
    stock: 20,
    category: "accesorios",
    imageURL: orbe
  },
    {
    id: "7",
    name: "Animal",
    description: "Fiel compañera y mensajera de los magos, capaz de encontrar a su destinatario sin importar la distancia.",
    price: 3500,
    stock: 0,
    category: "animal",
    imageURL: lechuza
  }

];