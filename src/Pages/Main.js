import React from 'react'
import { Facebook, GitHub, Linkedin, Twitter } from 'react-feather'

import bgImg from '../Assets/img/hoodie.png'

const name = 'mos{code}'

const Main = () => {
  return (
    <div className="home">
      <div className="overlay" />
      <div className="w-100 d-flex align-items-center justify-content-between h-75">
        <img className="img-fluid bgImg" src={bgImg} alt="header" />
        <div className="header-ctn">
          <div className="details-ctn">
            <h1 className="text-white">Moses Enyinnaya</h1>
            <p className="description">
              I'm a passionate <span className="job-title py-1">Software Developer</span> from Nigeria
            </p>
            <div className="w-50 mt-4">
              <span className="mr-3 nav-item py-1 active">Home</span>
              <span className="mr-3 nav-item py-1">About</span>
              <span className="mr-3 nav-item py-1">Resume</span>
              <span className="mr-3 nav-item py-1">Portfolio</span>
              <span className="mr-3 nav-item py-1">Contact</span>
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
      <div className="footer p-2 mr-3">
        <p>
          {/* Made with{' '}
          <span className="mr-1" role="img" aria-label="heart">
            ❤️
          </span>
          {'  '} */}
          Designed by <span className="name">{name}</span>
        </p>
      </div>
    </div>
  )
}

export default Main
