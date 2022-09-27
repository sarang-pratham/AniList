import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const handleClick = ()=>{
    navigate(`/search/${value}`)
  }

  const handleKeyDown = (e)=>{
    if(e.code === 'Enter'){
      handleClick()
    }
  }

  return (
    <nav className='bg-eerie-black text-floral-white flex justify-between items-center p-3 absolute inset-x-0 top-0'>
        <Link to='/'><h1 className='font-bold text-2xl'>AniList</h1></Link>
        <div className='relative w-1/2'>
          <input type="text" value={value} className='p-3 rounded w-full bg-black-olive' placeholder='Search Anime...' onChange={(e)=> setValue(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)}/>
          <button className="absolute text-3xl right-px hover:bg-pale-silver hover:bg-opacity-10 h-full p-2 rounded-r" onClick={handleClick}><ion-icon name="search" ></ion-icon></button>
        </div>
        <Link to='/random'><button 
          className='p-2 hover:bg-flame-orange border border-flame-orange rounded px-6 py-2 flex items-center text-xl'
          title='Suggest random anime'>
            <ion-icon name="shuffle"></ion-icon>
        </button></Link>
    </nav>
  )
}

export default Navbar