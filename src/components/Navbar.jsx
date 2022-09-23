import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-rich-black text-white flex justify-between items-center p-3'>
        <h1 className='font-bold text-2xl'>AniList</h1>
        <input type="text" className='p-3 rounded w-1/2 bg-oxford-blue' placeholder='Search Anime...'/>
        <button 
          className='p-2 hover:bg-flame-orange border border-flame-orange rounded px-6 py-2 flex items-center text-xl'
          title='Suggest random anime'>
            <ion-icon name="shuffle"></ion-icon>
        </button>
    </nav>
  )
}

export default Navbar