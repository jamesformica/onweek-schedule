import React from 'react'

import styles from './Heading.css'

const Heading = ({ children }) => (
  <h2 className={styles.heading}>{children}</h2>
)

export default Heading
