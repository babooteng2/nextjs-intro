"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
    id: string;
    title: string;
    poster_path: string;
    vote_average: string;
}

export default function Movie({ id, title, poster_path, vote_average }: IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`);
    }
    return (
        <div className={styles.movie}>
            <img 
                src={poster_path}
                alt={title} 
                onClick={onClick}
            />
            <Link href={`/movies/${id}`}>
                <span>{title}</span>
                <span>⭐ {vote_average}</span>
            </Link>            
        </div>
    )
}