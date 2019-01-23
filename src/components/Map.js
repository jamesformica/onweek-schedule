import React from 'react'

import Container from './Container'
import Heading from './Heading'
import map from '../images/ground-floor-map.png'
import styles from './Map.css'

const Map = () => (
  <div className={styles.map}>
    <Container>
      <Heading>Ground floor map</Heading>
      <img src={map} className={styles.ground} alt="ground floor map" />
    </Container>
  </div>
)

export default Map
