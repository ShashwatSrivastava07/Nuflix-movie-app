import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const API_KEY = '6610da2ce6211d5c612f80c97cc6ad5f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const MovieInfo = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [similar, setSimilar] = useState([]);

    const [review, setReview] = useState([]);

    const bannerUrl = movie && movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
        : 'default-banner.jpg';


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

        const fetchCast = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setCast(data.cast);
            } catch (error) {
                console.error('Error fetching movie credits:', error);
            }
        };

        const fetchSimilarMovies = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setSimilar(data.results);
            } catch (error) {
                console.error('Error fetching movie credits:', error);
            }
        };

        const fetchReview = async () => {
            try {
                const response = await fetch(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
                const data = await response.json();
                setReview(data.results);
            } catch (error) {
                console.error('Error fetching movie credits:', error);
            }
        };

        fetchMovieDetail();
        fetchCast();
        fetchSimilarMovies();
        fetchReview();

    }, [id]);

    if (!movie) return <div>
        <img className='w-full h-full' src='../../assets/loader.gif'></img>
    </div>;


    return (

        <>
            <Navbar />

            <div className='main_container min-h-screen scroll-smooth'>

                <div className='flex gap-10 items-center mt-20 items-center justify-center' style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 1) 100%), url(${bannerUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '700px',
                }}>
                    <img className='w-72' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className='max-w-prose'>
                        <h1 className='text-5xl text-white my-10'>{movie.title}</h1>
                        <p className='text-white my-8'>{movie.overview}</p>
                        <p className='text-white my-1'>{new Date(movie.release_date).getFullYear()}</p>
                        <p className='text-white'>{movie.genres.map(genre => genre.name).join(' , ')}</p>
                        <button className="mt-5 bg-[#0445e7] text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:shadow-[0_0_15px_#3170ee]">
                            Watch Now
                        </button>
                    </div>
                </div>

                <div className='cast-section p-20 py-0'>
                    <h2 className="text-[#e1e6f0] my-6 text-5xl">Cast</h2>
                    <div className="grid gap-1 grid-cols-9">
                        {cast.slice(0, 7).map((actor) => (
                            <div key={actor.cast_id} className="cast-member text-white">
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                    alt={actor.name}
                                    className="w-32 h-48 object-cover rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                                <div className="mt-2">
                                    <p className="text-sm font-semibold">{actor.name}</p>
                                    <p className="text-xs mt-1 text-gray-400">{actor.character}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='similar-movies p-20'>
                    <h2 className='text-[#e1e6f0] my-6 text-5xl'>Movies you might also like !</h2>
                    <div className='grid gap-1 grid-cols-8'>
                        {similar.slice(0, 6).map((movie) => (
                            <div key={movie.id} className='transition-transform duration-300 ease-in-out hover:scale-110'>

                                <Link to={`/movie/${movie.id}/${encodeURIComponent(movie.title)}`}>
                                    <img
                                        className='max-h-60 max-w-80 cursor-pointer'
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>

                <div className='review-section px-20 pb-20'>
                    <h2 className='text-[#e1e6f0] my-6 text-5xl'>Reviews</h2>
                    <div className='flex flex-col gap-6'>
                        {review.length === 0 ? (
                            <p className='text-gray-400'>No reviews available.</p>
                        ) : (
                            review.slice(0,3).map((review) => (
                                <div key={review.id} className='review-item bg-gray-50 p-5 rounded-md border border-gray-200 relative'>
                                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0445e7] to-transparent opacity-10 rounded-md'></div>
                                    <h3 className='text-xl font-bold text-gray-900 relative'>{review.author}</h3>
                                    <p className='text-gray-800 mt-2 relative'>{review.content}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </div>

        </>

    )
}
