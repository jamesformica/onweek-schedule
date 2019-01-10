import React from 'react'
import moment from 'moment'

import styles from './Session.css'

const Session = ({ session }) => {
  const { hostedBy, location, moreInfo } = session

  const start = moment(session.start, 'HH:mm')
  const end = moment(session.end, 'HH:mm')
  const hosted = hostedBy ? ` with ${hostedBy}` : ''

  return (
    <div className={styles.wrapper}>
      <div className={styles.dot} />
      <div className={styles.info}>
        <span className={styles.time}>
          {`${start.format('h:mma')} - ${end.format('h:mma')}`}
          {location && ` → ${location}`}
        </span>

        <span className={styles.title}>
          {`${session.title}${hosted}`}
        </span>

        {moreInfo && <span className={styles.more}>{moreInfo}</span>}
      </div>
    </div>
  )
}

export default Session
