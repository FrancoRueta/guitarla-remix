import { Link } from "@remix-run/react";

function Guitarra({ guitarra }) {
  const { precio, imagen, descripcion, url, nombre } = guitarra;

  return (
    <div className="guitarra">
        <img
          className="imagen"
          src={imagen.data.attributes.url}
          alt={`imagen guitarra ${nombre}`}
        />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <div className="precio-enlace">
          <p className="precio">${precio}</p>
          <Link className="enlace" to={`/guitarras/${url}`}>
            Ver Guitarra
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Guitarra;
