import { useEffect, useState} from 'react';
import styles from '~/styles/carrito.css'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'

export function links() {
    return [
        { rel: 'stylesheet', href: styles }
    ]
}

export function meta() {
    return {
        title: 'GuitarLA - Carrito de Compras',
        description: 'Carrito de Compras, GuitarLA, Tienda de guitarras y accesorios, Buenos Aires, Argentina'
    }
}


function Carrito() {

    const {carrito, actualizarCantidad, eliminarGuitarra} = useOutletContext();
    const [total, setTotal] = useState(0);

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach((guitarra) => {
            total += guitarra.precio * guitarra.cantidad;
        })
        return total;
    }

    useEffect(() => {
        setTotal(calcularTotal());
    }, [carrito])

  return (
    <ClientOnly fallback='cargando...'>
        {() => (
    
    <main className="contenedor">
        <h1 className="heading">Carrito de Compras</h1>

        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>

                {carrito?.length === 0 ? <p>No hay articulos en el carrito</p> : (
                    carrito?.map((producto) => (
                        <div key={producto.id} className='producto'>
                            <div>
                                <img src={producto.imagen} alt={producto.nombre} />
                            </div>

                            <div className='datos-carrito'>
                                <p className="nombre">{producto.nombre}</p>
                                <p>Cantidad: {producto.cantidad}</p>

                                <p className="precio"><span>${producto.precio}</span></p>
                                <p className='subtotal'>Subtotal:  <span>${producto.precio * producto.cantidad}</span></p>

                                <select 
                                value={producto.cantidad}
                                className="select"
                                onChange={e => actualizarCantidad({id: producto.id, cantidad: +e.target.value})}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>

                            <button type='button'
                            className='btn_eliminar'
                            onClick={() => eliminarGuitarra(producto.id)}> X
                            </button>
                        </div>
                )))}
            </div>


            <aside className="resumen">
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: ${total}</p>
            </aside>
        </div>

        
    </main>
    )}
    </ClientOnly>
  )
}

export default Carrito