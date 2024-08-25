import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ poster_path, title, vote_average, id }) {
    return (
        <Link to={`/details/${id}`}>
            <div className="movie_container">
                <img
                    className="movie_img"
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`${title} Poster`}
                />
                <h2>{title}</h2>
                <p>평점 : {vote_average}</p>
            </div>
        </Link>
    );
}

export default MovieCard;
