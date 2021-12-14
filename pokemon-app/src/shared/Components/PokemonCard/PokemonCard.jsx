import React, { useContext, useState } from 'react'
import styles from './PokemonCard.module.css'
import { Link } from 'react-router-dom'
import { PokemonCardContext } from '../../../PokemonCardContext'

export default function PokemonCard(props) {
  const { id, name, image } = useContext(PokemonCardContext)

  const { toggleCatch } = useContext(PokemonCardContext)

  const [isPressed, setIsPressed] = useState(false)

  const catchHandler = () => {
    setIsPressed(!isPressed)
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__id}>#{id}</div>
      <Link to={`/pokemon-stats/${name}`}>
        <img className={styles.card__img} src={image} alt={name} />
        <div className={styles.card__desc}>
          <div className={styles.card__title}>{name}</div>
        </div>
      </Link>



      <button
        className={styles.card__button}
        disabled={isPressed}
        onClick={() => {
          catchHandler()
          toggleCatch()
        }}
      >
        {isPressed ? "Caught" : "Catch"}
      </button>
    </div>
  )
}
