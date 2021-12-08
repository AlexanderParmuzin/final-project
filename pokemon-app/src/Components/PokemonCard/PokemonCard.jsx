import React from 'react'
import styles from './PokemonCard.module.css'

export default function PokemonCard({ name, image, id }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__id}>#{id}</div>
      <img className={styles.card__img} src={image} alt={name} />
      <div className={styles.card__desc}>
        <div className={styles.card__title}>{name}</div>

        <button className={styles.card__button}>Catch</button>
      </div>
    </div>
  )
}
