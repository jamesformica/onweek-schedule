import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'

import App from './components/App'

const root = global.document.getElementById('root')

ReactDOM.render(<App />, root)
