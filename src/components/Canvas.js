import React, { Component } from 'react'
import sample from 'lodash/sample'

import styles from './Canvas.css'

const colours = ['aqua', 'pink', 'magenta', 'aquamarine', 'coral', 'blueviolet', 'skyblue']

class Canvas extends Component {
  componentDidMount() {
    const { width, height } = this.canvas.getBoundingClientRect()
    this.canvas.width = width
    this.canvas.height = height
    this.context = this.canvas.getContext('2d')

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
    const { context, prevX, prevY } = this

    if (prevX && prevY) {
      context.beginPath()
      context.moveTo(prevX, prevY)
      context.lineTo(x, y)
      context.lineWidth = 6
      context.lineJoin = 'round'
      context.strokeStyle = sample(colours)
      context.stroke()
      context.closePath()
    }

    this.prevX = x
    this.prevY = y
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Feeling bored? <span className={styles.coloured}>Draw</span> something below:</p>
        <canvas className={styles.canvas} ref={(el) => { this.canvas = el }} />
      </div>
    )
  }
}

export default Canvas
