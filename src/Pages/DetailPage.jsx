import React from "react";
import DetailCard from "../Components/DetailCard";
import "../Style/DetailPage.scss";

function DetailPage({ details }) {
    console.log(details);
    return (
        <div className="detailpage_container">
            <DetailCard
                key={details.id}
                title={details.title}
                backdrop_path={details.backdrop_path}
                vote_average={details.vote_average}
                overview={details.overview}
                genres={details.genres}
            />
        </div>
    );
}
export default DetailPage;
