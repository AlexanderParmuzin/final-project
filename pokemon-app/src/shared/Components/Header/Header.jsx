import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const headerTitle =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  const headerHomePageUnhovered =
    'https://www.clipartmax.com/png/full/30-307132_tired-pikachu-pokemon-lets-go-pikachu.png'

  const headerHomePageHovered =
    'https://www.clipartmax.com/png/full/69-694404_clipart-pikachu-free-clipart-pikachu-png.png'

  const headerPokeballClosed =
    'https://www.clipartmax.com/png/full/190-1908912_free-png-pokeball-png-images-transparent-pokeball-png-hd.png'

  const headerPokeballOpened =
    'https://www.clipartmax.com/png/full/129-1298306_open-pokeball-google-search-pokemon-ball-open-png.png'

  const navigate = useNavigate()

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <a href="https://pokeapi.co/" rel="noreferrer" target="_blank">
            <img
              src={headerTitle}
              alt="PokeAPI"
              onClick={() => navigate('/')}
            />
          </a>
        </div>

        <nav className={styles.nav}>
          <div className={styles.home__page} onClick={() => navigate('/')}>
            <div className={styles.pika__image}>
              <img
                className={styles.pika__sleep}
                src={headerHomePageUnhovered}
                alt="PokeAPI"
              />
              <img
                className={styles.pika__happy}
                src={headerHomePageHovered}
                alt="PokeAPI"
              />
            </div>
            <p>All Pokemons</p>
          </div>

          <div className={styles.pokeball} onClick={() => navigate('/catched')}>
            <div className={styles.pokeball__image}>
              <img
                className={styles.pokeball__closed}
                src={headerPokeballClosed}
                alt="PokeAPI"
              />
              <img
                className={styles.pokeball__opened}
                src={headerPokeballOpened}
                alt="PokeAPI"
              />
            </div>
            <p>Caught Pokemons</p>
          </div>
        </nav>
      </header>
    </div>
  )
}
