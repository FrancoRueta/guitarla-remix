import { useLoaderData } from '@remix-run/react'
import { getPostByUrl } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'

export async function loader({ params }) {
    const { postUrl } = params

    const post = await getPostByUrl(postUrl)
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }
     return post
}

export function meta({data}) {
    if(!data){
      return {
        title: 'GuitarLA - Post no encontrado',
        description: 'GuitarLA - Post no encontrado'
      }
    }
    return {
      title: `GuitarLA - ${(data.data[0].attributes.titulo)}`,
      description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`
    };
  }


function PostUrl() {
    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
    
    return (
        <article className="post mt-3">
            <img className="imagen" src={imagen.data.attributes.url} alt={titulo} />
            <div className="contenido">
                <h3 className="titulo">{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
  )
}

export default PostUrl