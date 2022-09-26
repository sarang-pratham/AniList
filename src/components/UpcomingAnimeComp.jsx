import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const UpcomingAnimeComp = () => {
  const [upcomingAnimeData, setUpcomingAnimeData] = useState([])

  const getUpcomingAnimeData = async()=>{
    const response = await fetch('https://api.jikan.moe/v4/seasons/upcoming')
    const data = await response.json()
    setUpcomingAnimeData(data) 
  }

  useEffect(()=>{
    getUpcomingAnimeData()
  }, [])

  return (
    <div className='p-5'>
      <Link to='/more/upcoming'>
        <span className='text-2xl font-bold inline-block p-2 mb-3 hover:text-flame-orange'>
          Upcoming &gt;&gt;&gt;
        </span>
      </Link>
      <Cards data={upcomingAnimeData.data}/>
    </div>
  )
}

export default UpcomingAnimeComp