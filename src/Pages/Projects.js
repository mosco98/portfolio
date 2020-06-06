import React, { useState } from 'react'

import smile from '../Assets/img/smile.png'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import SideDrawer from '../Components/SideDrawer'
import Works from '../Utils/Works'

const myProjects = Works()
const Projects = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="animated fadeIn">
      <Navbar setOpen={setOpen} open={open} />
      {open && <SideDrawer setOpen={setOpen} />}
      <section className="container projects-ctn p-5" style={{ marginTop: '7rem', marginBottom: '4rem' }}>
        <h2 className="text-white">My works</h2>
        <div className="row mt-3">
          {myProjects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </section>
      <img className="img-fluid smile" src={smile} alt="face" />
      <Footer />
    </div>
  )
}

export default Projects
