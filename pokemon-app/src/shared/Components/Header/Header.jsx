import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const headerTitle =
    'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  const headerPokeball =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png'

    const headerHomePage =
    'https://i.pinimg.com/originals/16/76/05/167605ff2b6ea18fcbefb5a90dee7f55.png'

  const navigate = useNavigate()

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.title}>
          <img src={headerTitle} alt="PokeAPI" onClick={() => navigate('/')} />
        </div>

        <nav className={styles.nav}>
        <div className={styles.home__page}>
            <img
              src={headerHomePage}
              alt="PokeAPI"
              onClick={() => navigate('/')}
            />
            <p onClick={() => navigate('/')}>Catched Pokemons</p>
          </div>

          <div className={styles.pokeball}>
            <img
              src={headerPokeball}
              alt="PokeAPI"
              onClick={() => navigate('/catched')}
            />
            <p onClick={() => navigate('/catched')}>Catched Pokemons</p>
          </div>
        </nav>
      </header>
    </div>
  )
}
