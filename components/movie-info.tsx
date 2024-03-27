import { API_URL } from "../app/(home)/page";

async function getMovie(id:String) {
    //console.log(`Fetching videos: ${Date.now()}`)    
    //await new Promise(respose => setTimeout(respose, 3000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}: {id:string}) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}