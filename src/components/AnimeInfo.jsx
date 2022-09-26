import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const AnimeInfo = () => {
  const [data, setData] = useState(null)
  const {id} = useParams()
  
  const getAnimeInfo = async(id)=>{
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    const data = await response.json()
    // console.log(data.data)
    setData(data.data)
  }

  useEffect(()=>{
    getAnimeInfo(id)
  }, [])

  return ( data ? 
    
    <div className='mt-20 px-5 h-1/2 bg-'>
      <div className='bg-eerie-black rounded p-4 flex justify-around'>
        <img src={data.images.jpg.image_url} alt="" className=''/> 
        <div className='border-2 border-pale-silver rounded mx-10'></div>
        <div className='flex flex-col justify-evenly'>
          <h2 className='text-xl font-bold text-floral-white px-5 text-center '>{data.title_english}</h2>
          <div className='text-pale-silver text-sm leading-7 px-10 text-justify'>
              {data.synopsis}
          </div> 
        </div>  
      </div>
    </div>
    
    : 'Loading...'
  )
}

export default AnimeInfo