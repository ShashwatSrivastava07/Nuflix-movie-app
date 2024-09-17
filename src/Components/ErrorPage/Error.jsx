import React from 'react'
import './Error.css'
import '../../assets/login_bg_1920.jpg'
import '../../assets/login_bg_768.jpg'
import errorimg from '../../assets/Error-Page/error-sadness.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className='error h-screen flex flex-col items-center justify-center gap-8'>

                <div className='flex items-center justify-center gap-8'>
                    <img className='w-50' src={errorimg} alt="error-sadness" />
                    <h1 className='font-extrabold text-9xl tracking-tighter text-white my-2 text-center'>404</h1>
                </div>

                <div className='error__content relative flex flex-col items-center gap-7'>

                    <p className='font-bold text-5xl tracking-tighter text-white my-5 text-center'>Lost in the movie maze? This page is missing, but the show goes on!</p>

                    <Link to={'/home'}>

                        <Button  text={'Go to Home'}/>

                    </Link>

                </div>

            </div>

        </>
    )
}

export default Error