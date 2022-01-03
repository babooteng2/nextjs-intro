import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home() {    
    const [movies, setMovies] = useState();
    useEffect(()=>{        
        (async()=>{
            const { results } = await (
                await fetch(
                    /* `${BASE_URL}/movie/popular?api_key=${API_KEY}` */
                    `/api/movies`
                )
            ).json();
            setMovies( results );
        })();
    },[]);
    return (
        <div>   
            <Seo title="Home"/>
            {!movies && <h4>Loading...</h4>}
            {movies?.map(movie=>(
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
        </div>
    );
}