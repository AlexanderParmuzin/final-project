import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const headerTitle =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={headerTitle} alt="PokeAPI" />
        </div>

        <nav className={styles.nav}>
          <Link to="/">
            <button>Main Page</button>
          </Link>
          <Link to="/catched">
            <button>Catched Pokemons</button>
          </Link>
        </nav>
      </header>
    </div>
  )
}
