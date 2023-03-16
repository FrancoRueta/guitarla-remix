import { Link } from "@remix-run/react";
import React from "react";
import { formatearFecha } from "~/utils/helpers.js";

function Post({ post }) {

    const {contenido ,imagen, titulo, url, publishedAt} = post;

    return(
        <article className="post">
            <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={titulo} />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                <Link className="enlace" to={`/blog/${url}`}>Leer más</Link>
            </div>
        </article>
    );
}

export default Post;
