import React from 'react'
import { Link } from 'react-router-dom'

import SideDrawer from './SideDrawer'

const Navbar = (props) => {
  const path = window.location.pathname
  return (
    <div className="nav p-4 d-flex align-items-center justify-content-end nav-bar">
      {/* <SideDrawer /> */}
      <div className="nav-bar-items">
        <Link to="/">
          <span className={path === '/' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>Home</span>
        </Link>
        <Link to="/about">
          <span className={path === '/about' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>About</span>
        </Link>
        <span className="mr-3 nav-item py-1">Resume</span>
        <Link to="/projects">
          <span className={path === '/projects' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>Projects</span>
        </Link>
        <Link to="/contact">
          <span className={path === '/contact' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>Contact</span>
        </Link>
        <Link to="/blog">
          <span className={path === '/blog' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>Blog</span>
        </Link>
      </div>
      <button className="menu-btn">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </button>
    </div>
  )
}

export default Navbar
