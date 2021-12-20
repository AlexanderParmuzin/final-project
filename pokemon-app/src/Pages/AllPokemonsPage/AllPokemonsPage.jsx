import React, { useContext } from 'react'
import styles from './AllPokemonsPage.module.css'

import { PokemonDataContext } from '../../PokemonDataContext'

import PokemonCard from '../../shared/Components/PokemonCard/PokemonCard'
import BtnLoadMore from '../../shared/LoadMoreBtn/BtnLoadMore'

export default function AllPokemonsPage() {
  const {
    pokemons,
    loadMorePokemons,
    catchPokemon,
    releasePokemon,
    caughtPokemonList,
  } = useContext(PokemonDataContext)


  return (
    <div>
      <div>
        <div className={styles.container}>
          {pokemons.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              isSelected={caughtPokemonList.has(pokemon.id)}
              name={pokemon.name}
              image={pokemon.sprites.other['official-artwork'].front_default}
              onCatchPokemon={catchPokemon}
              onReleasePokemon={releasePokemon}
            />
          ))}
        </div>
      </div>
      <BtnLoadMore onClick={loadMorePokemons} />
    </div>
  )
}
