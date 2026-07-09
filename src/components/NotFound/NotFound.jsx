import { Link } from "react-router-dom";

   const NotFound = () => (
     <div style={{ textAlign: "center", padding: "4rem" }}>
       <h2>404 - Página no encontrada</h2>
       <p>Parece que este hechizo no existe.</p>
       <Link to="/">Volver al catálogo</Link>
     </div>
   );

   export default NotFound;