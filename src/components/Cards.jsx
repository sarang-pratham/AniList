import React from 'react'

import Card from './Card'

const Cards = ({data}) => {
  return (
    <div className='flex justify-between flex-wrap'>
        {
            data && data.map((anime)=> (<Card data={anime}/>))
        }
    </div>
  )
}

export default Cards