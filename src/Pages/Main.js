import React from 'react'
import { GitHub, Linkedin, Twitter } from 'react-feather'
import { Link } from 'react-router-dom'

import hoodie from '../Assets/img/hoodie.png'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <div className="home">
      <div />
      <div className="w-100 d-flex align-items-center justify-content-end h-75">
        <img className="img-fluid bgImg p-0" src={hoodie} alt="header" />
        <div className="header-ctn">
          <div className="details-ctn">
            <h1 className="text-white">Moses Enyinnaya</h1>
            <p className="description">
              I'm a passionate <span className="job-title">Software Developer</span> from Nigeria
            </p>
            <div className="w-50 mt-4">
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
              {/* <Link to="/contact">
                <span className="mr-3 nav-item py-1">Contact</span>
              </Link> */}
              <Link to="/blog">
                <span className="mr-3 nav-item py-1">Blog</span>
              </Link>
            </div>
            <div className="w-25 icons-ctn d-flex align-items-center justify-content-between mt-5">
              <a href="https://github.com/mosco98">
                <span className="icon p-2 mr-3">
                  <GitHub size={'18'} color={'#fff'} fill={'#fff'} />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/moses-enyinnaya-142282197">
                <span className="icon p-2 mr-3">
                  <Linkedin size={'18'} color={'#fff'} fill={'#fff'} />
                </span>
              </a>
              <a href="https://twitter.com/_moscode">
                <span className="icon p-2 mr-3">
                  <Twitter size={'18'} color={'#fff'} fill={'#fff'} />
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
