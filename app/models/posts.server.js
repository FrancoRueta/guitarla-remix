export async function getPosts(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    return await respuesta.json()
}

export async function getPostByUrl(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}