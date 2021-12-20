import React, { useState, useEffect, useContext } from 'react'
import { PokemonDataContext } from '../../PokemonDataContext'
import { useParams } from 'react-router-dom'
import { getPokemonsDataByName } from '../../PokeAPI/Api'
import styles from './PokemonStatsPage.module.css'

export default function PokemonStatsPage() {
  const { name } = useParams()

  const { caughtPokemonList } = useContext(PokemonDataContext)

  const [loading, setLoading] = useState(true)
  const [pokemonsStats, setPokemonsStats] = useState([])
  const [caughtPokemonsDate, setCaughtPokemonsDate] = useState()

  useEffect(() => {
    getPokemonsDataByName(name).then((result) => {
      setPokemonsStats(result)

      const selectedPokemon = result

      const caughtPokemonsDate = caughtPokemonList.get(selectedPokemon.id)
      setCaughtPokemonsDate(
        caughtPokemonsDate
          ? 'Was caught ' + caughtPokemonsDate
          : `The ${name} is not caught`
      )
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  function goBack() {
    // eslint-disable-next-line no-restricted-globals
    history.back()
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.pokemon__card}>
          <li className={styles.card__id}>#{pokemonsStats.id}</li>

          <li className={styles.card__name}>{pokemonsStats.name} </li>

          <div className={styles.card__body}>
            <img
              className={styles.card__image}
              src={
                pokemonsStats.sprites.other['official-artwork'].front_default
              }
              alt={pokemonsStats.name}
            />

            <ul className={styles.card__description}>
              <li>
                {pokemonsStats.abilities.length > 1
                  ? 'Abilities: '
                  : 'Ability: '}
                {pokemonsStats.abilities
                  .map((item) => item.ability.name)
                  .join(', ')}
              </li>
              <li>
                {pokemonsStats.types.length > 1 ? 'Types: ' : 'Type: '}
                {pokemonsStats.types.map((item) => item.type.name).join(', ')}
              </li>
              <li>Weight: {pokemonsStats.weight / 10}kg</li>
              <li>Height: {pokemonsStats.height * 10}cm</li>
              <li>{caughtPokemonsDate}</li>

              <div className={styles.goBackBtn}>
                <button onClick={goBack}>
                  <i className="fas fa-arrow-alt-circle-left"></i> Get Back
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
