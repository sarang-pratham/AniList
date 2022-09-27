import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AnimeList from './AnimeList'


const SearchResults = () => {
    const [data, setData] = useState([])
    const {query} = useParams()
    const [pageNum, setPageNum] = useState(1)
    const [hasNextPage, setHasNextPage] = useState(false)

    const getSearchResults = async(query, pageNum)=>{
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&page=${pageNum}`)
        const data = await response.json()
        setData(data.data)
        setHasNextPage(data.pagination.has_next_page)
    }

    useEffect(()=>{
        getSearchResults(query, pageNum)
        console.log(query, pageNum)
    },[query, pageNum])
  return (
    <>
        <AnimeList data={data}/>
        <button onClick={()=> setPageNum(pageNum+1)} disabled={!hasNextPage} className='relative inset-2/4 translate-x-[-50%] hover:bg-floral-white border text-floral-white border-floral-white hover:text-eerie-black p-3 my-5 text-lg font-bold rounded'>Load More</button>
    </>
  )
}

export default SearchResults