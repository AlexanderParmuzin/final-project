import axios from 'axios'

const defaultApiLimit = 20
const pokemonUrl = `https://pokeapi.co/api/v2/pokemon`

const getPokemonName = ({ offset, newLimit }) => {
  return axios
    .get(`${pokemonUrl}?offset=${offset}&limit=${newLimit || defaultApiLimit}}`)
    .then((response) => {
      const result = response.data.results || []
      return result.map((p) => p.name)
    })
}

const combineGettingPokemonsData = (pokemonNames) => {
  return Promise.all(pokemonNames.map(getPokemonsDataByName))
}

const getPokemonsDataByName = (name) => {
  return axios.get(`${pokemonUrl}/${name}`).then(({ data }) => data)
}

export const getPokemonsData = ({ offset }) => {
  return getPokemonName({ offset }).then(combineGettingPokemonsData)
}
