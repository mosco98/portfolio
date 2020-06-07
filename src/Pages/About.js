import React, { useState } from 'react'

import smile from '../Assets/img/smile.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'

const About = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="animated-faster fadeIn">
      <Navbar setOpen={setOpen} open={open} />
      {open && <SideDrawer setOpen={setOpen} />}
      <div className="container-fluid section p-0" style={{ marginTop: '7rem' }}>
        <div className="container-fluid w-50 about-text-ctn text-center h-100">
          <h1 className="hello">
            Hello<span style={{ color: '#1de9b6' }}>!</span>
          </h1>
          <p>
            My name is Moses Enyinnaya. I’m a Software Engineer and love making things work on the internet(Mostly with
            javascript). I am an energetic and imaginative Software developer who is able to work alongside other
            talented IT professionals in creating websites, web apps to the very highest standards.
          </p>
          <p>
            I work with a small startup, Pandageeks(owned by my brother <em className="bliss">@ghostffcode</em>) that is
            aimed at building standard apps that solves real life problems. I am Freelancing (a few gigs) on the side
            and also working on building a brand that would be aimed at identifying real life problems and solving them
            with code.
          </p>
          <p>I am a great team player as I love sharing my ideas with the group and learning new stuff.</p>
          <div className="container p-3 d-flex flex-column">
            <h3 className="text-white text-left">SKILLS</h3>
            <div className="row text-left">
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">HTML</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">CSS</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">Javascript</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">React</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">Node JS</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">MongoDB</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">Firebase</span>
              </div>
              <div className="col-lg-4 col-md-6 p-3">
                <span className="bg-success p-2">Chrome extensions</span>
              </div>
            </div>
          </div>
        </div>
        <img className="img-fluid smile" src={smile} alt="face" />
      </div>
      <Footer />
    </div>
  )
}

export default About
