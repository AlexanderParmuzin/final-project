import React, { useContext, useEffect, useState } from 'react'
import { PokemonDataContext } from '../../PokemonDataContext'
import PokemonCard from '../../shared/Components/PokemonCard/PokemonCard'
import styles from './CatchedPokemons.module.css'

export default function CatchedPokemonsPage() {
  const { caughtPokemonList, caughtPokemon, pokemons, releasePokemon } =
    useContext(PokemonDataContext)

  const [caughtPokemons, setCaughtPokemons] = useState([])

  useEffect(() => {
    const caught = pokemons.filter((pokemon) => {
      return caughtPokemonList.has(pokemon.id)
    })

    setCaughtPokemons(caught)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caughtPokemonList])

  return (
    <>
      <div className={styles.container}>
        {caughtPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            isSelected={caughtPokemonList.has(pokemon.id)}
            name={pokemon.name}
            image={pokemon.sprites.other['official-artwork'].front_default}
            onCaughtPokemon={caughtPokemon}
            onReleasePokemon={releasePokemon}
          />
        ))}
      </div>
    </>
  )
}
