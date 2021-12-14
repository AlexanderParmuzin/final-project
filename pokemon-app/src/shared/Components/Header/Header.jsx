import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const headerTitle =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  const navigate = useNavigate()

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={headerTitle} alt="PokeAPI" />
        </div>

        <nav className={styles.nav}>
          <button onClick={() => navigate('/')}>Main Page</button>

          <button onClick={() => navigate('/catched')}>Catched Pokemons</button>
        </nav>
      </header>
    </div>
  )
}
