import React from 'react'

import styles from './Container.css'

const Container = ({ children, ...rest }) => (
  <div className={styles.container} {...rest}>
    {children}
  </div>
)

export default Container
