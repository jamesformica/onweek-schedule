import React from 'react'

import gradLogo from '../images/grad-logo.png'
import styles from './Footer.css'

const Footer = () => (
  <div className={styles.logoWrapper}>
    <img className={styles.logo} src={gradLogo} alt="Grad logo" />

    <span aria-label="footer" role="img" className={styles.text}>
      Made by James Formica in a couple afternoons 💜
    </span>
  </div>
)

export default Footer
