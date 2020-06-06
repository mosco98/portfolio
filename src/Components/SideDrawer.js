import React from 'react'
import { X } from 'react-feather'
import { Link } from 'react-router-dom'

import Footer from './Footer'

const SideDrawer = ({ setOpen }) => {
  const path = window.location.pathname
  return (
    <div className="side-drawer animated-faster fadeIn">
      <button className="menu-btn-x mt-4 mr-4" onClick={() => setOpen(false)}>
        <X size={'35'} color={'#fff'} />
      </button>
      <div className="side-drawer-items">
        <Link to="/">
          <span className={path === '/' ? 'nav-item py-1 active' : 'nav-item py-1'}>Home</span>
        </Link>
        <Link to="/about">
          <span className={path === '/about' ? 'nav-item py-1 active' : 'nav-item py-1'}>About</span>
        </Link>
        <span className="nav-item" style={{ padding: '10px' }}>
          Resume
        </span>
        <Link to="/projects">
          <span className={path === '/projects' ? 'nav-item py-1 active' : 'nav-item py-1'}>Projects</span>
        </Link>
        <Link to="/contact">
          <span className={path === '/contact' ? 'nav-item py-1 active' : 'nav-item py-1'}>Contact</span>
        </Link>
        <Link to="/blog">
          <span className={path === '/blog' ? 'nav-item py-1 active' : 'nav-item py-1'}>Blog</span>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default SideDrawer
