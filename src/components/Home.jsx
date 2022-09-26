import React from 'react'

import TopAnimeComp from './TopAnimeComp'
import SeasonsNowComp from './SeasonsNowComp'
import UpcomingAnimeComp from './UpcomingAnimeComp'
import GenresComp from './GenresComp'

const Home = () => {
  return (
    <div className='text-floral-white flex flex-col'>
      <TopAnimeComp/>
      <SeasonsNowComp/>
      <UpcomingAnimeComp/>
      {/* <GenresComp/> */}
    </div>
  )
}

export default Home