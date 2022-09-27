import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <nav className='bg-eerie-black text-floral-white flex justify-between items-center p-3 absolute inset-x-0 top-0'>
        <Link to='/'><h1 className='font-bold text-2xl'>AniList</h1></Link>
        <input type="text" className='p-3 rounded w-1/2 bg-black-olive' placeholder='Search Anime...'/>
        <Link to='/random'><button 
          className='p-2 hover:bg-flame-orange border border-flame-orange rounded px-6 py-2 flex items-center text-xl'
          title='Suggest random anime'>
            <ion-icon name="shuffle"></ion-icon>
        </button></Link>
    </nav>
  )
}

export default Navbar