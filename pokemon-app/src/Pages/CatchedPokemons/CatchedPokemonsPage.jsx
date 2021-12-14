import React, { useContext, useEffect, useState } from 'react'
import { PokemonDataContext } from '../../PokemonDataContext'
import PokemonCard from '../../shared/Components/PokemonCard/PokemonCard'

export default function CatchedPokemonsPage(props) {
  const { caughtPokemonList, caughtPokemon, pokemons } =
    useContext(PokemonDataContext)

  const [caughtPokemons, setCaughtPokemons] = useState([])

  useEffect(() => {
    let catchedPokemonIds = Object.keys(caughtPokemonList)

    console.log('catchedIds', catchedPokemonIds)
    const caught = pokemons.filter((pokemon) => {
      // console.log(pokemon.id)
      return catchedPokemonIds.includes(pokemon.id)
    })

    console.log('caught', caught)
    setCaughtPokemons(caught)
  }, [])

  return (
    <>
      {caughtPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other['official-artwork'].front_default}
          onCaughtPokemon={caughtPokemon}
        />
      ))}
    </>
  )
}
