import React from 'react'

import smile from '../Assets/img/smile.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <img className="img-fluid smile" src={smile} alt="face" />
      <Footer />
    </div>
  )
}

export default Contact
