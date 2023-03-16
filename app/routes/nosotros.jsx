import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'
import { useOutletContext } from '@remix-run/react'

export function meta(){
  return{
    title: 'GuitarLA - Nosotros',
    description: 'GuitarLA es una tienda de guitarras y accesorios para guitarras'
  }
}

export function links(){

  return [
    {
      rel : 'stylesheet',
      href : styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  const data = useOutletContext();

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className='contenido'>
          <img src={imagen} alt="imagen nosotros" />

          <div>
            <p>En Buenos Aires, somos conocidos como GuitarBA, una tienda de guitarras que ofrece una amplia selección de guitarras de alta calidad y un ambiente acogedor
               para músicos de todo el mundo. Pero para nosotros, nuestros orígenes son mucho más personales.
              En la década de 1970, Carlos, uno de los fundadores de la tienda, era un músico joven que tocaba la guitarra en una banda punki. 
              Carlos estaba cansado de tener que ir a varias tiendas de música diferentes para encontrar las piezas que necesitaba para sus instrumentos. 
              Entonces, decidió abrir su propia tienda de guitarras que ofreciera todo lo que un músico podría necesitar en un solo lugar.</p>

            <p>A lo largo de los años, hemos evolucionado y nos hemos adaptado a medida que la industria de la música ha cambiado. Pero nuestra dedicación a la calidad y 
              la pasión por la música han permanecido constantes. Hoy en día, GuitarBA es una de las tiendas de guitarras más respetadas de Buenos Aires, y estamos orgullosos 
              de ofrecer guitarras únicas, nuestro personal experto y un ambiente acogedor para todos nuestros clientes.</p>
          </div>
      </div>
    </main>
  )
}

export default Nosotros