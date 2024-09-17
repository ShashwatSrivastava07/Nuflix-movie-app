import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Movies } from '../Movies/Movies'


const Home = () => {

  return (
    <>
      <Navbar />
      <div className='main_container bg-black min-h-screen scroll-smooth p-20'>
        <Movies />
      </div>
      <Footer />
    </>

  )
}

export default Home