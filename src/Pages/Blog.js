import React, { useState } from 'react'

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'

const Blog = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Navbar setOpen={setOpen} open={open} />
      {open && <SideDrawer />}
      <Footer />
    </div>
  )
}

export default Blog
