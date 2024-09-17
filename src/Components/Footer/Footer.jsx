import React from 'react'
import './Footer.css'
import Xlogo from '../../assets/Footer/x-twitter-light-grey-logo-5694251.webp'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer flex items-center justify-between text-white py-8 px-20 min-w-full'>

      <div className='d-flex flex-col'>
        <img className='w-24' src={logo} alt="" />
        <p className='text-xs my-3'>© 2024 NuFlix. All rights reserved.</p>
      </div>

      <div className='grid grid-cols-3 gap-2.5'>
          
      </div>

      <div className='flex items-center flex-col'>
          <p>Contact Us On : </p>
          <img className='w-12' src={Xlogo} alt="" />
      </div>


    </div>
  )
}

export default Footer