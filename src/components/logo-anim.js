// npm
import React from 'react'

// self
import './logo-anim.css'

const LogoAnim = props => (
  <svg width={props.width || 48} viewBox='70 10 95 90'>
    <g id='rollodeqc-card' strokeWidth={3} stroke='black' strokeLinecap='round'>
      <rect
        width={70}
        height={40}
        x={82.5}
        y={45}
        rx={5}
        yx={5}
        stroke='brown'
        fill='beige'
      />
      <circle cx={92.5} cy={65} r={3} stroke='red' fill='none' />
      <path d='M105 55 L120 55z' />
      <path d='M105 60 L125 60z' />
      <path d='M105 65 L145 65z' />
      <path d='M110 70 L120 70z' />
      <path d='M130 70 L140 70z' />
      <path d='M110 75 L120 75z' />
      <path d='M130 75 L140 75z' />
    </g>
    <use className='rollodeck-card' id='card-1' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-2' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-3' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-4' xlinkHref='#rollodeqc-card' />
    <use className='rollodeck-card' id='card-5' xlinkHref='#rollodeqc-card' />
  </svg>
)

export default LogoAnim
