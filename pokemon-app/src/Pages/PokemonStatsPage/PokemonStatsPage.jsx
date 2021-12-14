import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonsDataByName } from '../../PokeAPI/Api'
import styles from './PokemonStatsPage.module.css'

export default function PokemonPage() {
  const { name } = useParams()

  const [loading, setLoading] = useState(true)

  const [pokemonsStats, setPokemonsStats] = useState([])
  const [pokemonsWeight, setPokemonsWeight] = useState()
  const [pokemonsHeight, setPokemonsHeight] = useState()

  useEffect(() => {
    getPokemonsDataByName(name).then((result) => {
      setPokemonsStats(result)
      setPokemonsWeight(result.weight / 10)
      setPokemonsHeight(result.height * 10)
      setLoading(false)
    })
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
            <li>Is it catched ?</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
