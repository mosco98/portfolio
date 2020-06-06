import React from 'react'

import smile from '../Assets/img/smile.png'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Works from '../Utils/Works'

const myProjects = Works()
const Projects = () => {
  console.log(myProjects)
  return (
    <div>
      <Navbar />
      <section className="container projects-ctn p-5" style={{ marginTop: '6rem' }}>
        <h2 className="text-white">My works</h2>
        <div className="row">
          {myProjects.map((project) => (
            <Card key={project.id} />
          ))}
        </div>
      </section>
      <img className="img-fluid smile" src={smile} alt="face" />
      <Footer />
    </div>
  )
}

export default Projects
