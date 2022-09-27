import React from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import AnimeList from './components/AnimeList'
import RandomAnimeSuggest from './components/RandomAnimeSuggest'
import PAnimeInfo from './components/PAnimeInfo'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/animeinfo/:id' exact element={<PAnimeInfo/>}/>
        <Route path='/more/:type' exact element={<AnimeList/>}/>
        <Route path='/random' exact element={<RandomAnimeSuggest />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App