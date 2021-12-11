import React, { useState, useEffect } from 'react'
import styles from './AllPokemonsPage.module.css'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { getPokemonsData } from '../../PokeAPI/Api'

export default function AllPokemonsPage() {
  const [offset, setOffset] = useState(0)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemonsData({ offset }).then((result) => {
      setOffset(offset + 20)
      setPokemons(result)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onLoadMorePokemon = () => {
    getPokemonsData({ offset }).then((result) => {
      setOffset(offset + 20)
      setPokemons((oldArray) => [...oldArray, ...result])
    })
  }

  return (
    <div>
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
