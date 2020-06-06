import React, { useState } from 'react'
import { GitHub, Link } from 'react-feather'

const Card = ({ project }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const cardStyle = {
    background: `url(${project.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  }
  return (
    <div className="col-lg-4 col-md-6 p-3" style={{ height: '18rem' }}>
      <div
        className="h-100 w-100 crd"
        style={cardStyle}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}>
        {showOverlay && (
          <div className="w-100 h-100 overlay d-flex flex-column align-items-center justify-content-center">
            <h4 className="text-white">{project.title}</h4>
            <small className="w-75 text-center project-description">{project.description}</small>
            <div className="w-50 icons-ctn d-flex align-items-center justify-content-around mt-2">
              <a href="https://github.com/mosco98" title="Github repo">
                <span className="p-2">
                  <GitHub size={'20'} color={'#fff'} fill={'#fff'} />
                </span>
              </a>
              <a href="https://twitter.com/_moscode" title="Website">
                <span className="p-2">
                  <Link size={'20'} color={'#fff'} />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
      {/* <div className="overlay">
        <p>APP</p>
      </div> */}
    </div>
  )
}

export default Card
