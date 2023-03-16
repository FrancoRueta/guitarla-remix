import { getGuitarras} from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listadoGuitarras";


export function meta(){
  return {
    title: "GuitarLA - Guitarras",
    description: "GuitarLA - Tienda de Guitarras - Venta de guitarras electricas, acusticas, clasicas y bajos de las mejores marcas",
  }

}


export async function loader(){
  const resultado = await getGuitarras();
  return resultado.data;
}


function Tienda() {

  const guitarras = useLoaderData()


  return (
      <ListadoGuitarras guitarras={guitarras} />
  )
}

export default Tienda