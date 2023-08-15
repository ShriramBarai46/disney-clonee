/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";

const movieBaseUrl = "https://api.themoviedb.org/3";


const movieByGenreBaseURL =
    "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";


const api_key = "c20ecb0d9505f752069c6c19e9e41fc5";
// https://api.themoviedb.org/3/movie/550?api_key=c20ecb0d9505f752069c6c19e9e41fc5


const getTrendingVideos = axios.get(
    movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
    getTrendingVideos,
    getMovieByGenreId,
};
