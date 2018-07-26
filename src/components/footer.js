// npm
import React from 'react'

const Footer = ({ children }) => (
  <footer className='container-fluid card mt-5'>
    <div className='card-body row justify-content-center'>
      {children || <p className='card-text'>Hello world, ciao!</p>}
    </div>
  </footer>
)

export default Footer
