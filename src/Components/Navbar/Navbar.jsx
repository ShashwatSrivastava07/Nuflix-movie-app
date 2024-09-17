import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IconButton } from '@chakra-ui/react';
import { SearchIcon, BellIcon, AddIcon } from '@chakra-ui/icons';
import { Avatar } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import './Navbar.css'

const Navbar = () => {

  const toast = useToast()

  return (
    <>

      <nav className='fixed top-0	min-w-full p-5 bg-black backdrop-blur-sm px-20 flex justify-between items-center z-50'>

        <div>
          <img className='w-20' src={logo} alt="" />
        </div>

        <ul className='flex gap-14'>
          <Link to={'/home'}>
            <li className='text-lg text-white hover:text-sky-400'>Home</li>
          </Link>
          <Link to={'/tvseries'}>
            <li className='text-lg text-white hover:text-sky-400'>TV Series</li>
          </Link>
          <Link to={'/categories'}>
            <li className='text-lg text-white hover:text-sky-400'>Categories</li>
          </Link>
          <Link to={'/plans'}>
            <Badge fontSize="xs" colorScheme="blue" className='cursor-pointer'>Subscribe</Badge>
          </Link>
        </ul>

        <div className='flex items-center gap-10'>

          <div className='flex items-center gap-5'>

            <IconButton className="white-icon" aria-label='Search database' icon={<SearchIcon boxSize={5} />} variant="ghost" colorScheme="whiteAlpha" />
            <IconButton className="white-icon" aria-label="Notifications" icon={<BellIcon boxSize={7} />} size="lg" variant="ghost" colorScheme="whiteAlpha"
            />

          </div>

          <Avatar onClick={() =>
            toast({
              title: 'Profile Feature Coming Soon..',
              status: 'info',
              duration: 4000,
              isClosable: true,
            })
          }
            className='nav__profile--avatar cursor-pointer' name='Shashwat Srivastava' bg="#38bdf8" color="black" src='https://bit.ly/dan-abramov' />

        </div>




      </nav>

    </>
  )
}

export default Navbar