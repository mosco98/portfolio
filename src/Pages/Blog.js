import React, { useState } from 'react'

import construction from '../Assets/img/construction.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'

const Blog = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Navbar setOpen={setOpen} open={open} />
      {open && <SideDrawer setOpen={setOpen} />}
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <img className="img-fluid" src={construction} alt="construction" />
      </section>
      <Footer />
    </div>
  )
}

export default Blog
