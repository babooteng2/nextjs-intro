import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id:String) {
    //console.log(`Fetching videos: ${Date.now()}`)    
    //await new Promise(respose => setTimeout(respose, 3000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}: {id:string}) {
    const movie = await getMovie(id);    
    const homeTxt = movie.homepage ? 
        <a href={movie.homepage}
        target={"_blank"}>
            Home &rarr;
        </a>
        :
        "";
    return (
        <div className={styles.container}>
            <img className={styles.poster} 
                 src={movie.poster_path}
                 alt={movie.title} 
            />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                {homeTxt}
            </div>
        </div>
    );
}