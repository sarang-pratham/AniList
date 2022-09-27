import React from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import RandomAnimeSuggest from './components/RandomAnimeSuggest'
import PAnimeInfo from './components/PAnimeInfo'
import SearchResults from './components/SearchResults'
import PAnimeList from './components/PAnimeList'

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/animeinfo/:id' exact element={<PAnimeInfo/>}/>
        <Route path='/more/:type' exact element={<PAnimeList/>}/>
        <Route path='/random' exact element={<RandomAnimeSuggest />}/>
        <Route path='/search/:query' exact element={<SearchResults />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App