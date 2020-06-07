import React from 'react'
import { Menu, X } from 'react-feather'
import { Link } from 'react-router-dom'

const Navbar = ({ setOpen, open, home }) => {
  const path = window.location.pathname
  return (
    <div className="p-4 d-flex align-items-center justify-content-end nav-bar">
      {/* <SideDrawer /> */}
      {home ? null : (
        <div className="nav-bar-items">
          <Link to="/">
            <span className={path === '/' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>Home</span>
          </Link>
          <Link to="/about">
            <span className={path === '/about' ? 'mr-3 nav-item py-1 active' : 'mr-3 nav-item py-1'}>About</span>
          </Link>
          <a
            href="https://drive.google.com/file/d/1Btej8CUjWJvBtWq1-5L7F4P6Xa-L9kLz/view?usp=sharing"
            className="mr-3 nav-item py-1">
            Resume
          </a>
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
      )}
      {open ? (
        <button className="menu-btn animated-faster fadeIn" onClick={() => setOpen(false)}>
          <X size={'35'} color={'#fff'} />
        </button>
      ) : (
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <Menu size={'35'} color={'#fff'} />
        </button>
      )}
    </div>
  )
}

export default Navbar
