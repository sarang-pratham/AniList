import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

const TopAnimeComp = () => {
  const [topAnimeData, setTopAnimeData] = useState([])
  const getTopAnimeData = async()=>{
    const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=5')
    const data = await response.json()
    setTopAnimeData(data)
  }

  useEffect(()=>{
    getTopAnimeData()
  },[])

  return (
    <div>
      <h3 className='text-2xl p-2'>Top Anime</h3>
      <Cards data={topAnimeData.data}/>
      <Link to='/topanimelist'><button><ion-icon name="arrow-round-forward"></ion-icon></button></Link>
    </div>
  )
}

export default TopAnimeComp