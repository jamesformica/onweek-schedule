import React from 'react'

import Container from './Container'
import Heading from './Heading'
import kate from '../images/kate.png'
import greg from '../images/greg.png'
import styles from './Help.css'

const helpers = [
  {
    name: 'Greg Thom',
    img: greg,
    slack: '@greg.thom',
  },
  {
    name: 'Kate Scrim',
    img: kate,
    slack: '@kate.scrim',
  },
]

const Help = () => (
  <div className={styles.help}>
    <Container>
      <Heading>Need help?</Heading>

      <div className={styles.helpers}>
        {helpers.map(person => (
          <div className={styles.helper} key={person.name}>
            <img className={styles.avatar} src={person.img} alt="headshot" />
            <span className={styles.name}>{person.name}</span>
            <span className={styles.slack}>{person.slack}</span>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default Help
