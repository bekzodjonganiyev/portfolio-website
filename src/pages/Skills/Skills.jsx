import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters'

import './Skills.scss'

const Skills = () => {
  const skillsTitle = ['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={skillsTitle}
            idx={15}
          />
        </h1>
        <p>
          HTML, CSS, JavaScript, React( Redux, Redux Toolkit, Hooks, Formik),
          Vue, Rest API, Git
        </p>
       
      </div>
    </div>
  )
}

export default Skills
