import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';

const API_KEY = '6610da2ce6211d5c612f80c97cc6ad5f';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w45'; // Base URL for the logo images

export const WatchMovie = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [watchprovider, setWatchprovider] = useState([]);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        const fetchProviders = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`);
                const data = await response.json();
                setWatchprovider(data.results?.IN?.flatrate || []); // Fetching providers for India (IN) region
            } catch (error) {
                console.error('Error fetching movie Providers:', error);
            }
        };

        fetchMovieDetail();
        fetchProviders();
    }, [id]);

    if (!movie) return <div>
        <img className='w-full h-full' src='../../assets/loader.gif' alt="Loading..." />
    </div>;

    return (
        <>
            <Navbar />

            <div className='main_container min-h-screen scroll-smooth p-20'>
                <h1 className='text-5xl text-white my-10'>{movie.title}</h1>

                <ul className="flex flex-wrap gap-4">
                    {watchprovider.length > 0 ? (
                        watchprovider.map(provider => (
                            <li key={provider.provider_id} className="text-white flex items-center gap-2">
                                <img 
                                    src={`${IMAGE_BASE_URL}${provider.logo_path}`} 
                                    alt={provider.provider_name} 
                                    className="w-10 h-10" 
                                />
                                <span>{provider.provider_name}</span>
                            </li>
                        ))
                    ) : (
                        <li className="text-white">No providers available.</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default WatchMovie;
