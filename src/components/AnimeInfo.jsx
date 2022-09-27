import React from 'react'

const AnimeInfo = ({data}) => {
    
  
  return ( data ? 
    
    <div className=' mb-5 px-5 h-1/2 bg-'>
      <div className='bg-eerie-black rounded p-4 flex justify-around'>
        <img src={data.images.jpg.image_url} alt="" className=''/> 
        <div className='border-2 border-pale-silver rounded ml-10'></div>
        <div className='flex flex-col justify-evenly  '>
          <h2 className='text-xl font-bold text-floral-white px-5 text-center '>{data.title_english}</h2>
          <div className='text-pale-silver text-sm leading-7 px-10 text-justify'>
              {data.synopsis}
          </div> 
        </div>  
      </div>
      <div className='text-xl text-pale-silver font-bold flex justify-around text-center bg-eerie-black mt-2 py-2 rounded'>
        <p>Type: <br/>{data.type}</p>
        <p>Source: <br/>{data.source}</p>
        <p>Season: <br/>{data.season}</p>
        <p>Episodes: <br/>{data.episodes}</p>
        <p>Status: <br/>{data.status}</p>
      </div>
      <div className='mt-2 flex justify-between'>
        <div className='bg-eerie-black rounded p-3 w-1/3'>
          <h2 className='text-xl text-floral-white'>Aired</h2>
          <p className='text-pale-silver font-semibold mb-4'>{data.aired.string}</p>
          <h2 className='text-xl text-floral-white'>Rank</h2>
          <p className='text-pale-silver font-semibold mb-4'>{data.rank}</p>
          <h2 className='text-xl text-floral-white'>Score</h2>
          <p className='text-pale-silver font-semibold mb-4'>{data.score}</p>
          <h2 className='text-xl text-floral-white'>Duration</h2>
          <p className='text-pale-silver font-semibold mb-4'>{data.duration}</p>
          <h2 className='text-xl text-floral-white'>Genres</h2>
          <div className='flex flex-wrap'>
          {[...data.genres, ...data.explicit_genres, ...data.themes, ...data.demographics].map((genre)=>(
            <span className='text-pale-silver font-semibold mr-3 last:mr-0'>{genre.name}</span>
          ))}
          </div>
        </div>
        <div className='bg-eerie-black rounded p-3 mx-3 w-1/3'>
           <h2 className='text-xl text-floral-white mb-2'>Trailer</h2> 
           {data.trailer.url == null? <p className='text-pale-silver text-xl'>Not Available</p>: (<iframe src={data.trailer.embed_url} className="" frameBorder="0" allowFullScreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"  msallowfullscreen="msallowfullscreen"  oallowfullscreen="oallowfullscreen"  webkitallowfullscreen="webkitallowfullscreen"></iframe>)}
           <h2 className='text-xl text-floral-white mt-6 '>Streaming On</h2>
           {data.streaming? data.streaming.map((site)=>(
            <a href={site.url} className='text-pale-silver font-semibold mr-3 last:mr-0 hover:text-flame-orange' target="_blank">{site.name}</a>
           )): <p className='text-pale-silver text-xl'>Not Available</p>}
        </div>
        <div className='bg-eerie-black rounded p-3 w-1/3'>
          <h2 className='text-xl text-floral-white'>Studios</h2>
          {data.studios.map((studio)=>(
            <span className='text-pale-silver font-semibold mr-3 last:mr-0'>{studio.name}</span>
          ))}
          <h2 className='text-xl text-floral-white mt-4'>Producers</h2>
          {data.producers.map((producer)=>(
            <span className='text-pale-silver font-semibold mr-3 last:mr-0'>{producer.name}</span>
          ))}
          <h2 className='text-xl text-floral-white mt-4'>Licensors</h2>
          {data.licensors.map((licensor)=>(
            <span className='text-pale-silver font-semibold mr-3 last:mr-0'>{licensor.name}</span>
          ))}
        </div>
      </div>
    </div>
    
    : 'Loading...'
  )
}

export default AnimeInfo