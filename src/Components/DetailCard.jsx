import React from "react";

function DetailCard({ backdrop_path, title, vote_average, overview, genres }) {
    return (
        <div className="detail_container">
            <img
                className="detail_img"
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                alt={`${title} Poster`}
            />
            <h3 className="detail_title">제목 : {title}</h3>
            <p className="detail_average">평점 : {vote_average}</p>
            <p className="detail_genre">
                장르 :
                {genres.map((genre, index) => (
                    <span key={index}>
                        {genre.name}
                        {index < genres.length - 1 && ","}
                    </span>
                ))}
            </p>
            <p className="detail_overview">줄거리 : {overview}</p>
        </div>
    );
}

export default DetailCard;
