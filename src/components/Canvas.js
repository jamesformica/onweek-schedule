import React, { Component } from 'react'
import sample from 'lodash/sample'

import styles from './Canvas.css'

const MODES = ['black', 'rainbow', 'eraser']
const COLOURS = ['aqua', 'pink', 'magenta', 'aquamarine', 'coral', 'blueviolet', 'skyblue']
const SIZES = { pen: 4, eraser: 8 }

class Canvas extends Component {
  state = {
    drawingMode: MODES[0],
  }

  componentDidMount() {
    const { width, height } = this.canvas.getBoundingClientRect()
    this.canvas.width = width
    this.canvas.height = height

    this.canvas.addEventListener('mousedown', this.addMouseMoveEvent)
    this.canvas.addEventListener('mouseup', this.removeMouseMoveEvent)

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.addMouseMoveEvent()
        e.preventDefault()
      }
    })

    this.canvas.addEventListener('touchend', (e) => {
      this.removeMouseMoveEvent()
      e.preventDefault()
    })
  }

  setMode = mode => () => (
    this.setState({ drawingMode: mode })
  )

  addMouseMoveEvent = () => {
    this.canvas.addEventListener('mousemove', this.mouseMove)
    this.canvas.addEventListener('touchmove', this.touchMove)
  }

  removeMouseMoveEvent = () => {
    this.canvas.removeEventListener('mousemove', this.mouseMove)
    this.prevX = null
    this.prevY = null
  }

  mouseMove = ({ offsetX, offsetY }) => {
    this.draw(offsetX, offsetY)
  }

  touchMove = ({ touches }) => {
    const { clientX, clientY } = touches[0]
    const { top, left } = touches[0].target.getBoundingClientRect()

    this.draw(clientX - left, clientY - top)
  }

  draw = (x, y) => {
    const { drawingMode } = this.state
    const { canvas, prevX, prevY } = this

    const context = canvas.getContext('2d')
    const colour = drawingMode === 'rainbow' ? sample(COLOURS) : 'black'
    const composition = drawingMode === 'eraser' ? 'destination-out' : 'source-over'
    const size = drawingMode === 'eraser' ? SIZES.eraser : SIZES.pen

    if (prevX && prevY) {
      context.beginPath()
      context.moveTo(prevX, prevY)
      context.lineTo(x, y)
      context.lineWidth = size
      context.lineJoin = 'round'
      context.strokeStyle = colour
      context.globalCompositeOperation = composition
      context.stroke()
    }

    this.prevX = x
    this.prevY = y
  }

  clear = () => {
    const { canvas } = this
    const context = canvas.getContext('2d')

    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  download = () => {
    const image = this.canvas.toDataURL('image/png', 1).replace('image/png', 'image/octet-stream')

    const link = global.document.createElement('a')
    link.download = 'onweek-submission.png'
    link.href = image
    link.click()
  }

  egg = () => {
    const { canvas } = this
    const { width, height } = canvas

    const context = canvas.getContext('2d')
    const text = '"Who in the world am I? Ah, that\'s the great puzzle."'

    context.save()
    context.fillStyle = 'royalblue'
    context.globalCompositeOperation = 'source-over'
    context.font = '30px Helvetica'
    context.textAlign = 'center'
    context.fillText(text, width / 2, height / 2, width * 0.9)

    context.font = 'italic 20px Helvetica'
    context.fillText('Alice - Alice in Wonderland', width / 2, height / 2 + 40, width * 0.9)
    context.restore()
  }

  render() {
    const { drawingMode } = this.state

    return (
      <div className={styles.wrapper}>
        <p>Fancy a little competition?</p>
        <p className={styles.heading}>
          <button type="button" className={styles.coloured} onClick={this.egg}>Draw&nbsp;</button>
          something below on the canvas then follow the submission instructions underneath!
        </p>

        <div className={styles.buttons}>
          {MODES.map(mode => (
            <button
              key={mode}
              type="button"
              onClick={this.setMode(mode)}
              className={drawingMode === mode ? styles[`${drawingMode}-active`] : styles.button}
            >
              {mode}
            </button>
          ))}
          <button className={styles.button} type="button" onClick={this.clear}>clear</button>
        </div>

        <canvas className={styles.canvas} ref={(el) => { this.canvas = el }} />

        <p>Submission instructions:</p>
        <p className={styles.text}>
          Think you&apos;ve got a winner?
          Click the download button below and it will do exactly what you think...
        </p>

        <button type="button" onClick={this.download} className={styles.download}>
          Download art
        </button>

        <p className={styles.text}>
          Now send the image to <strong>@james.formica</strong> on slack
          and we will all vote on them later on!
        </p>

        <span aria-label="sunglasses" role="img">😎</span>
      </div>
    )
  }
}

export default Canvas
