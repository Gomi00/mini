import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import movieListData from "./data/movieListData.json";
import movieDetailData from "./data/movieDetailData.json";
import DetailPage from "./Pages/DetailPage";
import MainPage from "./Pages/MainPage";
import "./App.scss";
import "./Style/Reset.scss";

function App() {
    const [movies] = useState(movieListData.results);
    const [details] = useState(movieDetailData);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage movies={movies} />} />
                <Route path="/details/:id" element={<DetailPage details={details} />} />
            </Routes>
        </>
    );
}

export default App;
