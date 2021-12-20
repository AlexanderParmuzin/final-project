import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './shared/Components/Header/Header'

import { getPokemonsData } from './PokeAPI/Api'
import { PokemonDataContext } from './PokemonDataContext'
import PokemonStatsPage from './Pages/PokemonStatsPage/PokemonStatsPage'
import CatchedPokemonsPage from './Pages/CaughtPokemons/CaughtPokemonsPage'
import AllPokemonsPage from './Pages/AllPokemonsPage/AllPokemonsPage'

function App() {
  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([])
  const [caughtPokemonList, setCaughtPokemonList] = useState(new Map())

  const catchPokemon = (id) => {
    let date = new Date().toLocaleString('en-US')

    caughtPokemonList.set(id, date)
    setCaughtPokemonList(new Map(caughtPokemonList))
  }

  const releasePokemon = (id) => {
    caughtPokemonList.delete(id)
    setCaughtPokemonList(new Map(caughtPokemonList))
  }

  const loadMorePokemons = () => {
    getPokemonsData({ offset }).then((result) => {
      setOffset(offset + 20)
      setPokemons((oldArray) => [...oldArray, ...result])
    })
  }

  useEffect(() => {
    loadMorePokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PokemonDataContext.Provider
        value={{
          loadMorePokemons,
          pokemons,
          caughtPokemonList,
          catchPokemon,
          releasePokemon,
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
