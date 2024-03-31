import Movie from "../../components/movie"
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    //timeout
    //await new Promise(resolve => setTimeout(resolve, 1000));
    return fetch(API_URL).then(response => response.json());
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map(movie =>
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    poster_path={movie.poster_path} 
                    vote_average={movie.vote_average.toFixed(1)}
                />
            )}
        </div>
    );
}