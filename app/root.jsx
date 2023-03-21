import {useState, useEffect} from 'react'
import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link } from '@remix-run/react'
import { Toaster } from 'react-hot-toast';
import styles from '~/styles/index.css'
import Header from '~/components/header.jsx'
import Footer from '~/components/footer'


export function meta() {
    return (
        {
            charset: "utf-8",
            title: "GuitarBA - Tienda de guitarras y accesorios",
            viewport: "width=device-width, initial-scale=1"
        }
    )
}

export function links() {
    return[
        {
            rel: "stylesheet",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: "stylesheet",
            href: styles
        },{
            rel : 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel : 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "anonymous"
        },{
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
        }
    ]
}


export default function App(){

    const carritoLS = typeof window != 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
    const [carrito, setCarrito] = useState(carritoLS);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])

    const agregarCarrito = (guitarra) => {
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            // Actualizar el carrito para guardar la nueva cantidad
            const nuevoCarrito = carrito.map(guitarraState => {
                if(guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad;
                }
                return guitarraState;
            })
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, guitarra]);
        }
    }

    const actualizarCantidad = guitarra => {
        const nuevoCarrito = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad;
            }
            return guitarraState
        })  
        setCarrito(nuevoCarrito);
    }

    const eliminarGuitarra = id => {
        const nuevoCarrito = carrito.filter(guitarra => guitarra.id !== id);
        setCarrito(nuevoCarrito);
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                        background: '#3d4242',
                        color: '#fff',
                      }
                }}
                
            />
        </Document>
    )
}


function Document({children} ) {
    return(
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores */
export function CatchBoundary(){
    const error = useCatch();
    return (
        <Document>
            <p className='error'><span className='error-rojo'>ERROR {error.status}</span>: {error.statusText}.</p>
            <Link className="error-enlace" to='/'>Volver al inicio</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className='error'><span className='error-rojo'>ERROR {error.status}</span>: {error.statusText}.</p>
            <Link to='/'>Volver al inicio</Link>
        </Document>
    )
}

