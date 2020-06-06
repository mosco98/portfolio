import React, { useState } from 'react'
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather'
import { Link } from 'react-router-dom'

import hoodieFull from '../Assets/img/hoodie-full.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'

const Main = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="home animated-faster fadeIn">
      <Navbar setOpen={setOpen} open={open} home={true} />
      {open && <SideDrawer setOpen={setOpen} />}
      <div />
      <div className="w-100 d-flex align-items-center justify-content-end h-75">
        <img className="img-fluid bgImg p-0" src={hoodieFull} alt="header" />
        <div className="header-ctn">
          <div className="details-ctn animated slideInRight">
            <h1 className="text-white name-home">Moses Enyinnaya</h1>
            <p className="description">
              I'm a passionate <span className="job-title">Software Developer</span> from Nigeria
            </p>
            <div className="w-50 mt-4 home-nav">
              <Link to="/">
                <span className="mr-3 nav-item py-1 active">Home</span>
              </Link>
              <Link to="/about">
                <span className="mr-3 nav-item py-1">About</span>
              </Link>
              <span className="mr-3 nav-item py-1">Resume</span>
              <Link to="/projects">
                <span className="mr-3 nav-item py-1">Projects</span>
              </Link>
              <Link to="/blog">
                <span className="mr-3 nav-item py-1">Blog</span>
              </Link>
            </div>
            <div className="icons-ctn">
              <a href="https://github.com/mosco98">
                <span className="icon p-2">
                  <GitHub size={'18'} color={'#fff'} fill={'#fff'} />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/moses-enyinnaya-142282197">
                <span className="icon p-2">
                  <Linkedin size={'18'} color={'#fff'} fill={'#fff'} />
                </span>
              </a>
              <a href="https://twitter.com/_moscode">
                <span className="icon p-2">
                  <Twitter size={'18'} color={'#fff'} fill={'#fff'} />
                </span>
              </a>
              <a href="https://twitter.com/_moscode">
                <span className="icon p-2">
                  <Mail size={'18'} color={'#fff'} />
                </span>
              </a>
              {/* <a href="">
                <span className="icon p-2 mr-2">
                  <Facebook size={'18'} color={'#fff'} fill={'#fff'} />
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
