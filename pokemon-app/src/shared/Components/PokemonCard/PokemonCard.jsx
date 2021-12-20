import React from 'react'
import styles from './PokemonCard.module.css'
import { Link } from 'react-router-dom'

export default function PokemonCard({id, name, image, onCatchPokemon, isSelected, onReleasePokemon}) {
  return (
    <div className={styles.card}>

      <div className={styles.card__id}>#{id}</div>
      <Link to={`/pokemon-stats/${name}`}>
        <div className={styles.card__body}>
          <img className={styles.card__img} src={image} alt={name} />
          <div className={styles.card__title}>{name}</div>
        </div>
      </Link>
      

      {
        isSelected
          ? <button className={styles.card__button} onClick={() => onReleasePokemon(id)}>Release</button>
          : <button className={styles.card__button} onClick={() => onCatchPokemon(id)}>Catch</button>
      }
    </div>
  )
}
