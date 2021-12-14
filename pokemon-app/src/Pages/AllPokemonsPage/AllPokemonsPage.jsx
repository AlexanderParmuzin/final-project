import React, { useContext } from 'react'
import styles from './AllPokemonsPage.module.css'

import { PokemonDataContext } from '../../PokemonDataContext'

import PokemonCard from '../../shared/Components/PokemonCard/PokemonCard'
import { getPokemonsData } from '../../PokeAPI/Api'
import BtnLoadMore from '../../shared/Components/Buttons/LoadMoreBtn/BtnLoadMore'
import { PokemonCardContext } from '../../PokemonCardContext'

export default function AllPokemonsPage() {
  const { offset, setOffset, pokemons, setPokemons, caughtPokemons, setCaughtPokemons } = useContext(PokemonDataContext)

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
          {pokemons.map((pokemon, index) => (
            <div key={pokemon.id}>
              <PokemonCardContext.Provider
                value={{
                  id: pokemon.id,
                  name: pokemon.name,
                  image:
                    pokemon.sprites.other['official-artwork'].front_default,
                    toggleCatch: () => {
                      const date = new Date();
    
                      setCaughtPokemons([
                        ...caughtPokemons,
                        {
                          ...pokemon,
                          date: date.toUTCString(),
                          isCaught: true,
                        },
                      ]);
                    },
                }}
              >
                <PokemonCard  />
              </PokemonCardContext.Provider>
            </div>
          ))}
        </div>
      </div>
      <BtnLoadMore onClick={onLoadMorePokemon} />
    </div>
  )
}
