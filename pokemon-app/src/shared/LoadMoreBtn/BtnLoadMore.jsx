import React from 'react'
import styles from './BtnLoadMore.module.css'

export default function BtnLoadMore({ onClick }) {
  return (
    <div className={styles.loadMore__button}>
      <button onClick={onClick}>More Pokemons</button>
    </div>
  )
}
