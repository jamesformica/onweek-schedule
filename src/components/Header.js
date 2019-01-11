import React from 'react'

import Container from './Container'
import grads from '../images/grads.jpg'
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
        src="https://s1.rui.au.reastatic.net/rui-static/img/rea-logo-thin-white-v3.png"
        className={styles.rea}
      />

      <div className={styles.text}>
        <h1 className={styles.title}>
          O<small>(n)</small>Week+
        </h1>
        <h2 className={styles.subtitle}>
          11<sup>th</sup> - 15<sup>th</sup> February 2019
        </h2>
      </div>
    </Container>
  </div>
)

export default Header
