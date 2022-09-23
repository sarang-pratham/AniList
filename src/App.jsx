import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AnimeInfo from './components/AnimeInfo'
import AnimeList from './components/AnimeList'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/animeinfo/:id' exact element={<AnimeInfo/>}/>
        <Route path='/more/:type' exact element={<AnimeList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App