import React, {useState, useEffect} from 'react'
import Card from './Card'

const AnimeList = ({data}) => {
  
  return (
    <div className='mt-20 container mx-auto grid grid-cols-5 gap-4 text-floral-white'>
     {
      data && data.map(anime => (<Card data={anime} key={anime.mal_id}/>))
     } 
    </div>
  )
}

export default AnimeList