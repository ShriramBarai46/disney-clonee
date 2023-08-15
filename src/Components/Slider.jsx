/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

function Slider() {
    const [moviesList, setMovieList] = useState([]);

    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then((resp) => {
            console.log(resp.data);
            setMovieList(resp.data.results);
        });
    };

    const sliderRight = (element) => {
        element.scrollLeft += innerWidth - 110;
    };
    const sliderLeft = (element) => {
        element.scrollLeft -= innerWidth - 110;
    };

    return (
        <div>
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[275px] cursor-pointer"
                onClick={() => sliderLeft(elementRef.current)}
            />
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[275px] cursor-pointer right-0"
                onClick={() => sliderRight(elementRef.current)}
            />
            <div
                className="flex overflow-x-auto w-full px-16 py-16 scrollbar-hide scroll-smooth"
                ref={elementRef}
            >
                {moviesList.map((item) => (
                    <img
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className="min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
