import React from "react";
import MovieCard from "../Components/MovieCard";
import "../Style/MainPage.scss";

function MainPage({ movies }) {
    return (
        <div className="mainpage_container">
            {movies.map((movie) => (
                <MovieCard
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                />
            ))}
        </div>
    );
}

export default MainPage;
