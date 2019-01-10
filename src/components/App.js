import React, { Fragment } from 'react'

import Container from './Container'
import Day from './Day'
import Header from './Header'
import Heading from './Heading'
import Help from './Help'
import Footer from './Footer'
import schedule from '../schedule.json'

const App = () => (
  <Fragment>
    <Header />
    <Help />

    <Container>
      <Heading>Your schedule</Heading>
      {schedule.map(day => <Day key={day.day} day={day} />)}

      <Heading>Enjoy</Heading>
    </Container>
    <Footer />
  </Fragment>
)

export default App
