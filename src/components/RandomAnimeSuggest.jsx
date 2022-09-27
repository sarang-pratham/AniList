import React, {useState, useEffect} from 'react'
import AnimeInfo from './AnimeInfo'


const RandomAnimeSuggest = () => {
    const [data, setData] = useState(null)
    const [isClicked, setIsClicked] = useState(0)

    const getRandomAnime = async()=> {
        const response = await fetch('https://api.jikan.moe/v4/random/anime')
        const data = await response.json()
        setData(data.data)
    } 
    
    const handleClick = ()=>{
      if(isClicked){
        setIsClicked(0)
      }else{
        setIsClicked(1)
      }
    }

    useEffect(()=>{
        getRandomAnime()
    },[isClicked])

  return (
    <div className='mt-20 '>
      <button className='bg-floral-white p-3 rounded text-eerie-black font-semibold relative left-[92%] mb-2 hover:shadow-lg' onClick={handleClick}>Next &gt;</button>
      {data && <AnimeInfo data={data} />}
    </div>
  )
}

export default RandomAnimeSuggest