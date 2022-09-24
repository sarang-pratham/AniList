import React from 'react'

import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='flex overflow-auto scrollbar'>
        {
            data && data.map((anime)=> (<Card data={anime} key={anime.mal_id}/>))
        }
    </div>
  )
}

export default Cards