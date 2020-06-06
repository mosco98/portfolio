import React, { useState } from 'react'

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
      <img className="img-fluid smile" src={smile} alt="face" />
      <Footer />
    </div>
  )
}

export default Contact
