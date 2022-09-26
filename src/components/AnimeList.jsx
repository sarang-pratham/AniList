import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'

const AnimeList = () => {
  const {type} = useParams()
  const [animData, setAnimData] = useState([])
  const [pageNum, setPageNum] = useState(1)
  let url = ''

  switch(type){
    case "top":
      url = `https://api.jikan.moe/v4/top/anime?page=${pageNum}`
      break
    case "now":
      url = `https://api.jikan.moe/v4/seasons/now?page=${pageNum}`
      break
    case "upcoming":
      url = `https://api.jikan.moe/v4/seasons/upcoming?page=${pageNum}`
      break 
  }

  const getData = async(url)=>{
    const response = await fetch(url)
    const data = await response.json()
    setAnimData([...animData, ...data.data])
  }
  
  useEffect(()=>{
    getData(url)
  },[pageNum])
  
  return (
    <>
    <div className='mt-20 container mx-auto grid grid-cols-5 gap-4 text-floral-white'>
     {
      animData && animData.map(anime => (<Card data={anime} key={anime.mal_id}/>))
     } 
    </div>
    <button onClick={()=> setPageNum(pageNum+1)} className='relative inset-2/4 translate-x-[-50%] hover:bg-floral-white border text-floral-white border-floral-white hover:text-eerie-black p-3 my-5 text-lg font-bold rounded'>Load More</button>
    
    </>
  )
}

export default AnimeList