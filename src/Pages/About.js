import React, { useState } from 'react'

import smile from '../Assets/img/smile.png'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'

const About = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="animated fadeIn">
      <Navbar setOpen={setOpen} open={open} />
      {open && <SideDrawer setOpen={setOpen} />}
      <div className="container-fluid section p-0" style={{ marginTop: '7rem' }}>
        <div className="container-fluid w-50 about-text-ctn text-center h-100">
          <h1 className="hello">
            Hello<span style={{ color: '#1de9b6' }}>!</span>
          </h1>
          <p>
            My name is Moses Enyinnaya. I’m a Software Engineer and love making things that might possibly work using
            JavaScript. I currently work as a Senior Cloud Developer Advocate at Microsoft. I was also a Developer
            Advocate for 2 years at Cloudinary before joining Microsoft.
          </p>
          <p>
            Before becoming an advocate, I loved working as a consultant. I consulted as a Software Developer, Developer
            Advocate, Technical Writer and Community Champion for startups including Scotch.io, Auth0, Pusher,
            Cloudinary, Progress, deepstreamHub, Logrocket, Dialog Engineers, Manifold, etc.
          </p>
          <p>
            I love working with the developer communities to build an ecosystem. With forces from colleagues and friends
            we built communities like forLoop Africa, Angular Nigeria, Concatenate Conference, Me.io, Frontstack.io and
            a lot more. I am responsible for expanding the forLoop Africa communities across new African countries and
            ecosystems while trying my best to sustain the existing ones.
          </p>
        </div>
        <img className="img-fluid smile" src={smile} alt="face" />
      </div>
      <Footer />
    </div>
  )
}

export default About
