import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './shared/Components/Header/Header'

import { getPokemonsData } from './PokeAPI/Api'
import { PokemonDataContext } from './PokemonDataContext'
import PokemonStatsPage from './Pages/PokemonStatsPage/PokemonStatsPage'
import CatchedPokemonsPage from './Pages/CatchedPokemons/CatchedPokemonsPage'
import AllPokemonsPage from './Pages/AllPokemonsPage/AllPokemonsPage'

function App() {
  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [caughtPokemons, setCaughtPokemons] = useState([])

  useEffect(() => {
    getPokemonsData({ offset }).then((result) => {
      setOffset(offset + 20)
      setPokemons((oldArray) => [...oldArray, ...result])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PokemonDataContext.Provider
        value={{
          offset,
          setOffset,
          pokemons,
          setPokemons,
          caughtPokemons,
          setCaughtPokemons,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<AllPokemonsPage />} />

          <Route path="/pokemon-stats/:name" element={<PokemonStatsPage />} />

          <Route path="/catched" element={<CatchedPokemonsPage />} />
        </Routes>
      </PokemonDataContext.Provider>
    </>
  )
}

export default App
