import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1>404</h1>
      <p>La página que buscás no existe.</p>
      <Link to="/" className="btn btn-dark">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;