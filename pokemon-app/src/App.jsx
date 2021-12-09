import React, { useState, useEffect } from 'react'
import styles from './App.module.css'
import axios from 'axios'
import PokemonCard from './Components/PokemonCard/PokemonCard'

function App() {
  const headerTitle =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
  const defaultApiLimit = 20
  const [offset, setOffset] = useState(0)
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon`
  const [pokemons, setPokemons] = useState([])

  const getLimitParams = (newLimit) => {
    return `?limit=${newLimit || defaultApiLimit}`
  }

  const getPokemons = (newLimit) => {
    return axios
      .get(`${pokemonUrl}?offset=${offset}&${getLimitParams(newLimit)}`)
      .then((response) => {
        return response.data.results
      })
  }

  const getPokemonDesc = (name) => {
    return axios.get(`${pokemonUrl}/${name}`).then((response) => response.data)
  }

  const getPokemonsDescList = (pokemonlist) => {
    const getPokemonDescPromise = pokemonlist.map((name) =>
      getPokemonDesc(name)
    )

    return Promise.all(getPokemonDescPromise)
  }

  // App.js

  useEffect(() => {
    getPokemons()
      .then((pokemons) => pokemons.map((p) => p.name))
      .then((pokemonsList) => getPokemonsDescList(pokemonsList))
      .then((result) => {
        setOffset(offset + 20)
        setPokemons(result)
      })
  }, [])

  const onLoadMorePokemon = () => {
    getPokemons()
      .then((pokemons) => pokemons.map((p) => p.name))
      .then((pokemonsList) => getPokemonsDescList(pokemonsList))
      .then((result) => {
        setOffset(offset + 20)
        setPokemons((oldArray) => [...oldArray, ...result])
      })
  }

  return (
    <div>
      <header className={styles.header}>
        <img className={styles.title} src={headerTitle} alt="PokeAPI" />
      </header>

      <div>
        <div className={styles.container}>
          {pokemons.map((pokemon, index) => {
            return (
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other['official-artwork'].front_default}
                key={index}
              />
            )
          })}
        </div>
      </div>
      <div className={styles.loadMore__button}>
        <button onClick={onLoadMorePokemon}>Load more</button>
      </div>
    </div>
  )
}

export default App
