# 🧙 Hogwarts Shop

**Hogwarts Shop** es un e-commerce desarrollado con **React** y **Firebase**, inspirado en el universo de Harry Potter. La aplicación permite explorar un catálogo de productos mágicos, filtrarlos por categoría, agregarlos al carrito y finalizar la compra generando una orden almacenada en Firestore.

---

## 📌 Características

- Catálogo de productos obtenido desde Firebase Firestore.
- Filtrado de productos por categorías.
- Vista detallada de cada producto.
- Carrito de compras utilizando Context API.
- Checkout con generación de órdenes.
- Actualización del stock luego de una compra.
- Navegación mediante React Router.
- Manejo de estados de carga y página 404.

---

## 🛍️ Categorías

El catálogo está compuesto por productos inspirados en el mundo mágico de Harry Potter.

| Categoría | Descripción |
|-----------|-------------|
| 🪄 Varitas | Varitas mágicas de diferentes magos |
| 🧪 Pociones | Pociones e ingredientes mágicos |
| 🧹 Escobas | Escobas voladoras |
| 📚 Libros | Libros y material de estudio |
| 👕 Túnicas | Vestimenta de Hogwarts |
| 🐾 Mascotas | Compañeros mágicos |

### Ejemplos de productos

| Producto | Categoría | Precio | Stock |
|----------|-----------|-------:|------:|
| Varita de Saúco | Varitas | $15.000 | 3 |
| Poción Multijugos | Pociones | $8.000 | 10 |
| Nimbus 2000 | Escobas | $45.000 | 5 |
| Capa de Invisibilidad | Accesorios | $60.000 | 1 |
| Libro de Hechizos Avanzados | Libros | $3.500 | 20 |

---

# 🛠️ Tecnologías utilizadas

- React
- React Router DOM
- Firebase
  - Firestore Database
- Context API
- CSS

---

# 📁 Estructura del proyecto

```
src/
│
├── assets/
│
├── components/
│   ├── Cart/
│   ├── CartItem/
│   ├── CartWidget/
│   ├── CheckoutForm/
│   ├── Item/
│   ├── ItemCount/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   ├── ItemList/
│   ├── ItemListContainer/
│   ├── Loader/
│   ├── NavBar/
│   └── NotFound/
│
├── context/
│   └── CartContext.jsx
│
├── services/
│   └── firebase/
│       ├── config.js
│       ├── products.js
│       └── orders.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🔥 Base de datos (Firestore)

## Colección `products`

Cada documento contiene la siguiente información:

```javascript
{
  name: "Varita de Saúco",
  description: "La varita más poderosa jamás creada.",
  price: 15000,
  stock: 3,
  category: "varitas",
  imageURL: "https://..."
}
```

---

## Colección `orders`

Al finalizar una compra se genera automáticamente una orden.

```javascript
{
  buyer: {
    name: "Harry Potter",
    email: "harry@hogwarts.edu",
    phone: "1122334455"
  },
  items: [
    {
      id: "...",
      name: "Varita de Saúco",
      quantity: 1,
      price: 15000
    }
  ],
  total: 15000,
  date: serverTimestamp()
}
```

---

# 🧭 Rutas de la aplicación

| Ruta | Descripción |
|------|-------------|
| `/` | Catálogo completo |
| `/category/:categoryId` | Productos filtrados por categoría |
| `/item/:itemId` | Detalle de un producto |
| `/cart` | Carrito de compras |
| `/checkout` | Finalización de la compra |
| `*` | Página 404 |

---

# 🛒 Funcionamiento del carrito

El carrito está implementado mediante **Context API**, permitiendo compartir su estado entre todos los componentes de la aplicación.

### Funciones principales

- `addToCart()`
- `removeItem()`
- `clearCart()`
- `getTotalQuantity()`
- `getTotalPrice()`
- `isInCart()`

---

# ⚙️ Flujo de la aplicación

### Catálogo

- Obtiene los productos desde Firestore.
- Permite filtrarlos por categoría.

### Detalle del producto

- Consulta un producto por su ID.
- Muestra un contador respetando el stock disponible.
- Agrega el producto al carrito.

### Carrito

- Visualiza todos los productos agregados.
- Calcula subtotales y total de la compra.
- Permite eliminar productos o vaciar el carrito.

### Checkout

- Solicita los datos del comprador.
- Genera una orden en Firestore.
- Actualiza el stock de los productos.
- Vacía el carrito.
- Devuelve el ID de la compra realizada.

---

# ▶️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/usuario/hogwarts-shop.git
```

Ingresar al proyecto:

```bash
cd hogwarts-shop
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` con las credenciales de Firebase.

Ejecutar el proyecto:

```bash
npm run dev
```

---

# 📷 Capturas

Se pueden agregar imágenes de:

- Home
- Detalle del producto
- Carrito
- Checkout

---

# 👨‍💻 Autor

Proyecto desarrollado como entrega final del curso de **React JS**.