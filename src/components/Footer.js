import React from 'react'

import gradLogo from '../images/grad-logo.png'
import styles from './Footer.css'

const Footer = () => (
  <div className={styles.logoWrapper}>
    <button tabIndex="0" type="button" className={styles.button}>
      <img className={styles.logo} src={gradLogo} alt="Grad logo" />
    </button>

    <span aria-label="footer" role="img" className={styles.text}>
      Made by James Formica in a couple afternoons 💜
    </span>
    <small><i>p.s. there are a bunch of easter eggs on this page...</i></small>
  </div>
)

export default Footer
