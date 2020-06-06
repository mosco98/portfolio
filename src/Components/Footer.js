import React from 'react'

const name = 'mos{code}'

const Footer = () => {
  return (
    <div className="footer p-2 mr-3">
      <p className="p-1 rounded">
        Designed by <span className="name">{name}</span>
      </p>
    </div>
  )
}

export default Footer
