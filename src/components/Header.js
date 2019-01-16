import React from 'react'

import Container from './Container'
import grads from '../images/grads.jpg'
import reaLogo from '../images/realogo-white.svg'
import styles from './Header.css'

const overlay = 'rgba(30, 40, 70, 0.7)'

const backgroundStyles = {
  backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${grads}')`,
}

const Header = () => (
  <div className={styles.header}>
    <div className={styles.bg} style={backgroundStyles} />

    <Container style={{ paddingTop: '2rem', height: '100%' }}>
      <img
        alt="rea"
        src={reaLogo}
        className={styles.rea}
      />

      <div className={styles.text}>
        <h1 className={styles.title}>
          O<small>(n)</small>Week+
        </h1>
        <h2 className={styles.subtitle}>
          4<sup>th</sup> - 15<sup>th</sup> February 2019
        </h2>
      </div>
    </Container>
  </div>
)

export default Header
