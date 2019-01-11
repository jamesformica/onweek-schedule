import React from 'react'

import Canvas from './Canvas'
import Container from './Container'
import Day from './Day'
import Heading from './Heading'
import schedule from '../schedule.json'
import styles from './Content.css'

const Content = () => (
  <div className={styles.content}>
    <Container>
      <div className={styles.spacer} />
      <Heading>Your schedule</Heading>
      {schedule.map(day => <Day key={day.day} day={day} />)}

      <Canvas />
    </Container>
  </div>
)

export default Content
