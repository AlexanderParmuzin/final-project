import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './Components/Header/Header'

import PokemonStatsPage from './Pages/PokemonStatsPage/PokemonStatsPage'
import CatchedPokemonsPage from './Pages/CatchedPokemons/CatchedPokemonsPage'
import AllPokemonsPage from './Pages/AllPokemonsPage/AllPokemonsPage'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllPokemonsPage />} />

        <Route path="/stats" element={<PokemonStatsPage />} />

        <Route path="/catched" element={<CatchedPokemonsPage />} />
      </Routes>
    </div>
  )
}

export default App
