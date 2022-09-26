import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <Link to={`/animeinfo/${data.mal_id}`}>
    <div className='relative h-72 w-52 flex flex-col m-2 rounded overflow-hidden'>
        <img src={data.images.jpg.image_url} alt="" className='object-fit h-full'/>
        <p className=' absolute bottom-0 left-0 right-0 bg-eerie-black p-2 text-sm'>{data.titles[0].title}</p>
    </div>
    </Link>
  )
}

export default Card