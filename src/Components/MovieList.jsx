import { useEffect, useState } from "react";
import { fetchMovies } from "../Services/api";
import MovieCard from "./MovieCard";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieData = await fetchMovies();
                setMovies(movieData);
            } catch (error) {
                console.error("TMdb API로부터 데이터를 가져오는 도중 에러가 발생하였습니다.", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
