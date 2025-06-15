export const getNews = async (limit = 10) => {
    const response = await fetch(`http://localhost:3001/everything`, {
        credentials: "include",
        method: "GET"
    })
    const data = await handleResponse( response )
    return data //.slice(0, limit)
}

export const getNewsFilter = async (pais = '', categoria = "")  => {

    const url = new URL("http://localhost:3001/top-headlines-dummy")
    if(pais !== '') url.searchParams.append("country", pais)
    if(categoria !== '') url.searchParams.append("category", categoria)
    const response = await fetch(url, {
        credentials: "include",
        method: "GET"
    })
    const data = await handleResponse(response)
    return data
}


function handleResponse(response){
    if(response.ok){
        return response.json()
    } else {
        console.error("Ocorreu um erro na requisição dos dados");
        return [];
    }
}