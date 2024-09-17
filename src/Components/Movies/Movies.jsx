import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Movies.css'

const API_KEY = '6610da2ce6211d5c612f80c97cc6ad5f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [nowplaying, setnowplaying] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        fetchMovies();
        fetchNowplayingMovies();
        fetchUpcoming();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&region=IN&language=en-US&page=1`);
            const data = await response.json();
            if (data.results) {
                setMovies(data.results);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const fetchNowplayingMovies = async () => {
        try {
            const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&region=IN&language=en-US&page=1`);
            const data = await response.json();
            if (data.results) {
                setnowplaying(data.results);
            }
        } catch (error) {
            console.error('Error fetching upcoming movies:', error);
        }
    };

    const fetchUpcoming = async () => {
        try {
            const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&watch_region=IN&language=en-US&page=1`);
            const data = await response.json();
            if (data.results) {
                setUpcoming(data.results);
            }
        } catch (error) {
            console.error('Error fetching upcoming movies:', error);
        }
    };

    var sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        lazyLoad: true,
        slidesToScroll: 2
    };

    const genreMap = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    };


    return (
        <div className='movie-section mt-10'>

            <h2 className='text-[#e1e6f0] my-6 text-xl'>Blockbuster Showcase</h2>
            <Slider {...sliderSettings}>
                {nowplaying.map(movie => (

                    <div className='relative mx-2 overflow-hidden transition-transform duration-300 ease-in-out group' key={movie.id}>
                        <Link to={`/movie/${movie.id}/${encodeURIComponent(movie.title)}`}>
                            <img
                                className='max-h-80 max-w-96 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />

                            <div className='absolute z-40 inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4'>
                                <div className='text-center'>
                                    <h3 className='text-lg font-bold'>{movie.title}</h3>
                                    <p className='text-sm'>{new Date(movie.release_date).getFullYear()}</p>
                                    <p className='text-sm'>{movie.genre_ids.map(id => genreMap[id]).join(', ')}</p>
                                    <Link to={`/watch/${movie.id}/${encodeURIComponent(movie.title)}`}>
                                        <button className="mt-2 bg-[#0445e7] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#3170ee]">
                                            Watch Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                ))}
            </Slider>

            <h2 className='text-[#e1e6f0] my-6 text-xl'>Fresh Flicks</h2>
            <Slider {...sliderSettings}>
                {movies.map(movie => (
                    <div className='relative mx-2 overflow-hidden transition-transform duration-300 ease-in-out group' key={movie.id}>
                        <Link to={`/movie/${movie.id}/${encodeURIComponent(movie.title)}`}>
                            <img
                                className='max-h-80 max-w-96 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />

                            <div className='absolute z-40 inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4'>
                                <div className='text-center'>
                                    <h3 className='text-lg font-bold'>{movie.title}</h3>
                                    <p className='text-sm'>{new Date(movie.release_date).getFullYear()}</p>
                                    <p className='text-sm'>{movie.genre_ids.map(id => genreMap[id]).join(', ')}</p>
                                    <Link to={`/watch/${movie.id}/${encodeURIComponent(movie.title)}`}>
                                        <button className="mt-2 bg-[#0445e7] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#3170ee]">
                                            Watch Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>

            <h2 className='text-[#e1e6f0] my-6 text-xl'>Future Flicks</h2>
            <Slider {...sliderSettings}>
                {upcoming.map(movie => (
                    <div className='relative mx-2 overflow-hidden transition-transform duration-300 ease-in-out group' key={movie.id}>
                        <Link to={`/movie/${movie.id}/${encodeURIComponent(movie.title)}`}>
                            <img
                                className='max-h-80 max-w-96 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105'
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />

                            <div className='absolute z-40 inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4'>
                                <div className='text-center'>
                                    <h3 className='text-lg font-bold'>{movie.title}</h3>
                                    <p className='text-sm'>{movie.genre_ids.map(id => genreMap[id]).join(', ')}</p>
                                    <Link to={`/watch/${movie.id}/${encodeURIComponent(movie.title)}`}>
                                        <button className="mt-2 bg-[#0445e7] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#3170ee]">
                                            Watch Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>

        </div>
    );
};
