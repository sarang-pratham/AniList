import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const TopAnimeComp = () => {
  const [topAnimeData, setTopAnimeData] = useState([])
  const getTopAnimeData = async()=>{
    const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=15')
    const data = await response.json()
    setTopAnimeData(data)
  }

  useEffect(()=>{
    getTopAnimeData()
  },[])

  return (
    <div className='p-5 mt-16'>
      <Link to='/topanimelist'>
        <span className='text-2xl font-bold inline-block p-2 mb-3 hover:text-flame-orange'>
          Top Anime &gt;&gt;&gt;
        </span>
      </Link>
      <Cards data={topAnimeData.data}/>
    </div>
  )
}

export default TopAnimeComp