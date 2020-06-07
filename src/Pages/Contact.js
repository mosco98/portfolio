import React, { useState } from 'react'
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather'

import smile from '../Assets/img/smile.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'

const Contact = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="animated-faster fadeIn">
      <Navbar setOpen={setOpen} open={open} />
      {open && <SideDrawer setOpen={setOpen} />}
      <div className="container" style={{ marginTop: '7rem', height: '50vh' }}>
        <h2 className="text-white p-2">CONTACT ME</h2>
        <div className="container h-50 d-flex align-items-center justify-content-center mt-6">
          <a href="https://github.com/mosco98">
            <span className="icon-contact p-3">
              <GitHub size={'23'} color={'#fff'} fill={'#fff'} />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/moses-enyinnaya-142282197">
            <span className="icon-contact p-3">
              <Linkedin size={'23'} color={'#fff'} fill={'#fff'} />
            </span>
          </a>
          <a href="https://twitter.com/_moscode">
            <span className="icon-contact p-3">
              <Twitter size={'23'} color={'#fff'} fill={'#fff'} />
            </span>
          </a>
          <a href="mailto:enyinnayamoses60@gmail.com">
            <span className="icon-contact p-3">
              <Mail size={'23'} color={'#fff'} />
            </span>
          </a>
        </div>
      </div>
      <img className="img-fluid smile" src={smile} alt="face" />
      <Footer />
    </div>
  )
}

export default Contact
