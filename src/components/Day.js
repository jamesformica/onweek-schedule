import React, { Component } from 'react'
import moment from 'moment'
import { Collapse } from 'react-collapse'

import Session from './Session'
import chevron from '../images/chevron.svg'
import styles from './Day.css'

class Day extends Component {
  constructor(props) {
    super(props)

    const { day } = props
    const start = moment(day.day).startOf('day')

    let isOpen = false

    if (moment().isBefore(start)) {
      isOpen = true
    }

    this.state = { isOpen }
  }

  toggleOpen = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    const { day } = this.props
    const { isOpen } = this.state

    const date = moment(day.day)
    return (
      <div>
        <button className={styles.title} type="button" onClick={this.toggleOpen}>
          <p className={styles.date}>
            {date.format('dddd Do')}
          </p>
          <img src={chevron} alt="expand" className={isOpen ? styles.opened : styles.closed} />
        </button>
        <Collapse isOpened={isOpen}>
          {day.sessions.map(session => <Session session={session} key={session.title} />)}
        </Collapse>
      </div>
    )
  }
}

export default Day
