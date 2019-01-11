import React, { Fragment } from 'react'

import Content from './Content'
import Header from './Header'
import Help from './Help'
import Footer from './Footer'

const App = () => (
  <Fragment>
    <Header />
    <Help />
    <Content />
    <Footer />
  </Fragment>
)

export default App
