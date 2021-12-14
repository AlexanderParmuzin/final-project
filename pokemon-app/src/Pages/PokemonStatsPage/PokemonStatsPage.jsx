import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './PokemonStatsPage.module.css'
import { PokemonDataContext } from '../../PokemonDataContext'

export default function PokemonPage() {
  const { name } = useParams()

  const { pokemons, caughtPokemonList } = useContext(PokemonDataContext)

  const [loading, setLoading] = useState(true)

  const [pokemonsStats, setPokemonsStats] = useState([])
  const [pokemonsWeight, setPokemonsWeight] = useState()
  const [pokemonsHeight, setPokemonsHeight] = useState()
  const [caughtPokemonData, setCaughtPokemonData] = useState()

  useEffect(() => {
    const selectedPokemon = pokemons.find((pokemon) => pokemon.name === name)

    if (!selectedPokemon) {
      return
    }

    setPokemonsStats(selectedPokemon)
    setPokemonsWeight(selectedPokemon.weight / 10)
    setPokemonsHeight(selectedPokemon.height * 10)

    const caughtPokemonData = caughtPokemonList.get(selectedPokemon.id)
    

    setCaughtPokemonData(
      caughtPokemonData ? 'Was catched ' + caughtPokemonData : `The ${name} is not caught`
    )

    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={pokemonsStats.sprites.other['official-artwork'].front_default}
          alt={pokemonsStats.name}
        />
        <div className={styles.pokemon__description}>
          <li className={styles.description__id}>#{pokemonsStats.id} </li>
          <ul>
            <li>{pokemonsStats.name} </li>
            <li>
              {pokemonsStats.abilities.length > 1 ? 'Abilities: ' : 'Ability: '}
              {pokemonsStats.abilities
                .map((item) => item.ability.name)
                .join(', ')}
            </li>
            <li>
              {pokemonsStats.types.length > 1 ? 'Types: ' : 'Type: '}
              {pokemonsStats.types.map((item) => item.type.name).join(', ')}
            </li>
            <li>Weight: {pokemonsWeight}kg</li>
            <li>Height: {pokemonsHeight}cm</li>
            <li>{caughtPokemonData}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
