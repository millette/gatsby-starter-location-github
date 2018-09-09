// npm
import React from 'react'

// self
import './logo-anim.css'

const strokeWidth = 3
const style1 = {
  strokeWidth,
  stroke: 'brown',
  fill: 'beige'
}

const style2 = {
  strokeWidth,
  stroke: 'red',
  fill: 'none'
}

const style3 = {
  strokeWidth,
  stroke: 'black'
}

const LogoAnim = props => (
  <svg width={props.width || 48} viewBox='70 10 95 90'>
    <g id='rollodeqc-card'>
      <rect
        width='70'
        height='40'
        x='82.5'
        y='45'
        rx='5'
        yx='5'
        style={style1}
      />
      <circle cx='92.5' cy='65' r='3' style={style2} />
      <path d='M105 55 L120 55z' style={style3} stroke-linecap='round' />
      <path d='M105 60 L125 60z' style={style3} stroke-linecap='round' />
      <path d='M105 65 L145 65z' style={style3} stroke-linecap='round' />
      <path d='M110 70 L120 70z' style={style3} stroke-linecap='round' />
      <path d='M130 70 L140 70z' style={style3} stroke-linecap='round' />
      <path d='M110 75 L120 75z' style={style3} stroke-linecap='round' />
      <path d='M130 75 L140 75z' style={style3} stroke-linecap='round' />
    </g>
    <use className='rollodeck-card' id='card-1' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-2' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-3' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-4' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-5' xlinkHref='#rollodeqc-card' />
  </svg>
)

export default LogoAnim
