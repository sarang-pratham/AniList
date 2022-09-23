import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <Link to={`/animeinfo/${data.mal_id}`}>
    <div className='relative flex h-72'>
        <img src={data.images.jpg.image_url} alt="" className='object-cover'/>
        <p className='absolute bottom-0 left-0 right-0 bg-slate-900 p-2 text-sm'>{data.titles[0].title}</p>
    </div>
    </Link>
  )
}

export default Card