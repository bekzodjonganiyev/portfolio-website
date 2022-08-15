import React from 'react'

import './About.scss'

import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

const About = () => {
  const aboutTitle = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters strArray={aboutTitle} idx={15} />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptatibus eaque aliquam at quam quae reiciendis minima tenetur aut
          dolor in commodi, officia quo quisquam vero ab soluta minus molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dicta
          quasi explicabo recusandae cupiditate autem nobis officia ab rerum
          blanditiis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, fugit.
        </p>
      </div>
    </div>
  )
}

export default About
