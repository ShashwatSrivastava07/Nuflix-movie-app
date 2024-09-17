import React from 'react'
import '../../assets/login_bg_1920.jpg'
import '../../assets/login_bg_768.jpg'
import logo from '../../assets/logo.png'
import './Login.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <>

            <div id="nuflix__login" className='flex items-center justify-start w-full h-screen bg-no-repeat bg-contain'>

                <div className='login__container max-w-2xl'>
                    <img src={logo} alt="logo" />

                    <div className='login__tagline-wrapper mt-8'>
                        <p className='login__tagline font-extrabold text-7xl tracking-tighter text-white my-2'>Endless Movies.</p>
                        <p className='login__tagline font-extrabold text-7xl tracking-tighter text-white my-2'>Epic Moments.</p>
                        <p className='login__tagline font-extrabold text-7xl tracking-tighter text-white my-2'>A World of Entertainment.</p>

                        <div className=' max-w-xl mb-9'>
                            <p className='text-white my-6'>NuFlix, Where Legends Come to Life.
                                Dive into Unforgettable Stories and Exclusive Premieres.
                                Get Ready for a World of Blockbusters and Hidden Gems.
                            </p>
                        </div>

                    </div>

                    <form name='login__form'>
                        <div className="login__input-wrap flex gap-4 mb-5">

                            <Input type='email' placeholder='Enter Your Email' />
                            <Link to={'/home'}> 
                                <Button text='Subscribe' />
                            </Link>
                        </div>

                        <p className='text-xs text-white my-6'>Nuflix is available in select markets. Content varies by region and subject to change.</p>
                        <p className='text-xs text-white my-6'>&copy; 2024 NuFlix. All rights reserved.</p>



                    </form>

                </div>

            </div>

        </>
    )
}

export default Login