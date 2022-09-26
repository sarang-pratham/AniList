import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'


const SeasonsNowComp = () => {
  const [nowAiringdata, setNowAiringData] = useState([])
  
  const getNowAiringData = async()=>{
    const response = await fetch('https://api.jikan.moe/v4/seasons/now')
    const data = await response.json()
    setNowAiringData(data)
  }

  useEffect(()=>{
    getNowAiringData()
  }, [])

  return (
    <div className='p-5'>
      <Link to='/more/now'>
        <span className='text-2xl font-bold inline-block p-2 mb-3 hover:text-flame-orange'>
          Now Airing &gt;&gt;&gt;
        </span>
      </Link>
      <Cards data={nowAiringdata.data}/>
    </div>
  )
}

export default SeasonsNowComp