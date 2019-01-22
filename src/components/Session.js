import React from 'react'
import moment from 'moment'

import styles from './Session.css'

const showSecret = text => () => global.alert(text)

const Wrapper = ({ hiddenText, children, ...rest }) => (
  hiddenText
    ? <button type="button" onClick={showSecret(hiddenText)} {...rest}>{children}</button>
    : <div {...rest}>{children}</div>
)

const Session = ({ session }) => {
  const { hostedBy, location, moreInfo, hiddenText } = session

  const start = moment(session.start, 'HH:mm')
  const end = moment(session.end, 'HH:mm')
  const hosted = hostedBy ? ` with ${hostedBy}` : ''

  return (
    <Wrapper className={styles.wrapper} hiddenText={hiddenText}>
      <div className={styles.dot} />
      <div className={styles.info}>
        <span className={styles.time}>
          {`${start.format('h:mma')} - ${end.format('h:mma')}`}
          {location && ` → ${location}`}
        </span>

        <span className={styles.title}>
          {`${session.title}${hosted}`}
        </span>

        {moreInfo && (
          <span className={styles.more}>{moreInfo}</span>
        )}
      </div>
    </Wrapper>
  )
}

export default Session
