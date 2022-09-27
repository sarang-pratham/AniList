import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AnimeInfo from './AnimeInfo'

const PAnimeInfo = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()
    
    const getAnimeInfo = async(id)=>{
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      const data = await response.json()
      setData(data.data)
    }

    useEffect(()=>{
      getAnimeInfo(id)
    }, [])

  return (
    <div className='mt-20'>
    {data && <AnimeInfo data={data}/>}
    </div>
  )
}

export default PAnimeInfo