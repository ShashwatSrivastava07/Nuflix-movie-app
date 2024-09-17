import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import paramount from '../../assets/Intros/paramount.svg'
import marvel from '../../assets/Intros/marvel.webp'
import disney from '../../assets/Intros/disney.png'
import lion from '../../assets/Intros/lion.png'
import pixar from '../../assets/Intros/pixar.svg'

const Categories = () => {
    return (
        <>

            <Navbar />

            <div className="category h-screen bg-black p-20 pt-32">

                <div className="category__cards grid gap-2 grid-cols-5">

                    <div className="card flex items-center p-8 bg-zinc-500 rounded cursor-pointer hover:scale-110 hover:bg-sky-800 ease-outs duration-200">
                        <img className='w-full' src={marvel} alt="marvel logo" />
                    </div>

                    <div className="card flex items-center p-8 bg-zinc-500 rounded cursor-pointer hover:scale-110 hover:bg-sky-800 ease-outs duration-200">
                        <img className='w-full' src={paramount} alt="marvel logo" />
                    </div>

                    <div className="card flex items-center p-8 bg-zinc-500 rounded cursor-pointer hover:scale-110 hover:bg-sky-800 ease-outs duration-200">
                        <img className='w-full' src={disney} alt="marvel logo" />
                    </div>

                    <div className="card flex items-center p-8 bg-zinc-500 rounded cursor-pointer hover:scale-110 hover:bg-sky-800 ease-outs duration-200">
                        <img className='w-full' src={lion} alt="marvel logo" />
                    </div>

                    <div className="card flex items-center p-8 bg-zinc-500 rounded cursor-pointer hover:scale-110 hover:bg-sky-800 ease-outs duration-200">
                        <img className='w-full' src={pixar} alt="marvel logo" />
                    </div>
                </div>

            </div>

            <Footer />

        </>
    )
}

export default Categories